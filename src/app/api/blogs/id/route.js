export async function DELETE(request) {
  try {
    const supabase = getSupabase();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Blog ID is required." },
        { status: 400 }
      );
    }

    // Get blog image before deleting the record
    const { data: blog, error: findError } = await supabase
      .from("blogs")
      .select("id, image")
      .eq("id", id)
      .maybeSingle();

    if (findError) {
      return NextResponse.json(
        { error: findError.message },
        { status: 500 }
      );
    }

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found." },
        { status: 404 }
      );
    }

    // Remove image from Supabase Storage if it belongs to blog-images
    if (blog.image) {
      const marker =
        "/storage/v1/object/public/blog-images/";

      if (blog.image.includes(marker)) {
        const filePath = blog.image.split(marker)[1];

        if (filePath) {
          const { error: storageError } =
            await supabase.storage
              .from("blog-images")
              .remove([filePath]);

          if (storageError) {
            console.error(
              "Image delete error:",
              storageError
            );
          }
        }
      }
    }

    // Delete blog
    const { error: deleteError } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id);

    if (deleteError) {
      console.error(
        "Supabase delete error:",
        deleteError
      );

      return NextResponse.json(
        { error: deleteError.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Blog deleted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE /api/blogs error:", error);

    return NextResponse.json(
      {
        error:
          error.message || "Failed to delete blog.",
      },
      { status: 500 }
    );
  }
}