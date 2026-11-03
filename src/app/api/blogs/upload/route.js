import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseSecretKey) {
      return NextResponse.json(
        {
          error:
            "Supabase environment variables are missing from the server.",
        },
        { status: 500 }
      );
    }

    const supabase = createClient(
      supabaseUrl,
      supabaseSecretKey
    );

    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        {
          error:
            "Image upload requires multipart/form-data.",
        },
        { status: 400 }
      );
    }

    const formData = await request.formData();

    const file = formData.get("file");

    if (!file || typeof file.arrayBuffer !== "function") {
      return NextResponse.json(
        {
          error: "No image file was received.",
        },
        { status: 400 }
      );
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        {
          error:
            "Invalid image format. Use JPG, PNG, WEBP, or GIF.",
        },
        { status: 400 }
      );
    }

    const maxSize = 10 * 1024 * 1024;

    if (file.size > maxSize) {
      return NextResponse.json(
        {
          error: "Image must be smaller than 10MB.",
        },
        { status: 400 }
      );
    }

    const originalName = file.name || "image.jpg";

    let extension =
      originalName.split(".").pop()?.toLowerCase() || "jpg";

    if (extension === "jpeg") {
      extension = "jpg";
    }

    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 10)}.${extension}`;

    const filePath = `blogs/${fileName}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(filePath, buffer, {
        contentType: file.type,
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      console.error(
        "Supabase Storage upload error:",
        uploadError
      );

      return NextResponse.json(
        {
          error: uploadError.message,
        },
        { status: 500 }
      );
    }

    const { data: publicUrlData } = supabase.storage
      .from("blog-images")
      .getPublicUrl(filePath);

    const publicUrl = publicUrlData?.publicUrl;

    if (!publicUrl) {
      return NextResponse.json(
        {
          error:
            "Image uploaded but public URL could not be generated.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        url: publicUrl,
        publicUrl: publicUrl,
        image: publicUrl,
        path: filePath,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Image upload route error:", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to upload image.",
      },
      { status: 500 }
    );
  }
}