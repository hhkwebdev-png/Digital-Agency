import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error(
      "Supabase environment variables are missing."
    );
  }

  return createClient(
    supabaseUrl,
    supabaseSecretKey
  );
}

export async function GET() {
  try {
    const supabase = getSupabaseClient();

    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Fetch blogs error:", error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { blogs: data || [] },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/blogs error:", error);

    return NextResponse.json(
      {
        error:
          error?.message || "Failed to load blogs.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const contentType =
      request.headers.get("content-type") || "";

    let body;

    if (contentType.includes("application/json")) {
      body = await request.json();
    } else if (
      contentType.includes("multipart/form-data") ||
      contentType.includes(
        "application/x-www-form-urlencoded"
      )
    ) {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    } else {
      return NextResponse.json(
        {
          error:
            "Unsupported Content-Type. Use JSON or FormData.",
        },
        { status: 415 }
      );
    }

    const title = String(body.title || "").trim();
    const description = String(
      body.description || ""
    ).trim();
    const category = String(body.category || "").trim();
    const author =
      String(body.author || "Admin").trim();
    const content = String(body.content || "");
    const image = String(body.image || "").trim();

    if (!title) {
      return NextResponse.json(
        { error: "Title is required." },
        { status: 400 }
      );
    }

    if (!description) {
      return NextResponse.json(
        { error: "Description is required." },
        { status: 400 }
      );
    }

    if (!category) {
      return NextResponse.json(
        { error: "Category is required." },
        { status: 400 }
      );
    }

    if (!content.trim()) {
      return NextResponse.json(
        { error: "Content is required." },
        { status: 400 }
      );
    }

    const slug =
      String(body.slug || "").trim() ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    const supabase = getSupabaseClient();

    /*
      IMPORTANT:
      image_size is intentionally NOT included here
      because your current blogs table does not contain
      an image_size column.
    */

    const blogData = {
      title,
      description,
      category,
      author,
      image,
      content,
      slug,
    };

    const { data, error } = await supabase
      .from("blogs")
      .insert([blogData])
      .select()
      .single();

    if (error) {
      console.error("Create blog error:", error);

      return NextResponse.json(
        {
          error: error.message,
          details: error.details || null,
          hint: error.hint || null,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        blog: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/blogs error:", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to publish blog.",
      },
      { status: 500 }
    );
  }
}

/* -------------------------------------------------------
   DELETE BLOG
------------------------------------------------------- */

export async function DELETE(request) {
  try {
    const { searchParams } =
      new URL(request.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          error: "Blog ID is required.",
        },
        { status: 400 }
      );
    }

    const supabase =
      getSupabaseClient();

    const { data, error } =
      await supabase
        .from("blogs")
        .delete()
        .eq("id", id)
        .select()
        .single();

    if (error) {
      console.error(
        "Delete blog error:",
        error
      );

      return NextResponse.json(
        {
          error:
            error.message ||
            "Failed to delete blog.",
          details:
            error.details || null,
          hint:
            error.hint || null,
        },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        {
          error: "Blog not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        blog: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "DELETE /api/blogs error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to delete blog.",
      },
      { status: 500 }
    );
  }
}