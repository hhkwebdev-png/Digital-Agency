import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

async function getBlog(slug) {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();

    if (error) {
      console.error("Get blog error:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Get blog exception:", error);
    return null;
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#1C3636]">

      {/* HEADER */}

      <section className="px-6 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-xl bg-[#1C3636] px-6 py-10 text-white sm:px-8 lg:px-12">

          {blog.category && (
            <p className="text-sm font-bold uppercase tracking-wider">
              {blog.category}
            </p>
          )}

          <h1 className="mt-4 text-[30px] font-extrabold leading-tight sm:text-[36px] lg:text-[42px]">
            {blog.title}
          </h1>

          {blog.description && (
            <p className="mt-5 max-w-3xl text-base leading-[1.8]">
              {blog.description}
            </p>
          )}

          {blog.author && (
            <p className="mt-5 text-sm font-semibold">
              By {blog.author}
            </p>
          )}

          {blog.created_at && (
            <p className="mt-2 text-sm opacity-80">
              {new Date(
                blog.created_at
              ).toLocaleDateString()}
            </p>
          )}

        </div>
      </section>

      {/* IMAGE */}

      {blog.image && (
        <section className="px-6 py-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-xl">

            <img
              src={blog.image}
              alt={blog.title}
              className="max-h-[600px] w-full object-cover"
            />

          </div>
        </section>
      )}

      {/* CONTENT */}

      <section className="px-6 py-6 sm:px-8 lg:px-12">
        <article className="mx-auto max-w-4xl">

          <div
            className="blog-content text-base leading-[1.9]"
            dangerouslySetInnerHTML={{
              __html: blog.content || "",
            }}
          />

        </article>
      </section>

    </main>
  );
}