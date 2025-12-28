import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import ReactMarkdown from "react-markdown";

async function getBlog(slug) {
  const { data, error } = await supabase.from("blogs").select("*").eq("slug", slug).eq("published", true).single();
  if (error) return null;
  return data;
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const blog = await getBlog(slug);
  if (!blog) notFound();

  return (
    <article className="bg-slate-50">
      <div className="max-w-[860px] mx-auto px-4 py-16">
        <header className="mb-12">
          {blog.category && <span className="inline-block mb-4 rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold text-slate-700">{blog.category}</span>}
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 tracking-tight">{blog.title}</h1>
          <div className="mt-6 text-sm text-slate-500">{new Date(blog.created_at).toLocaleDateString("tr-TR")}</div>
        </header>

        {blog.image_url && (
          <div className="mb-14 overflow-hidden rounded-[32px] shadow-sm bg-white">
            <div className="aspect-[4/3] md:aspect-[16/9] w-full bg-slate-200">
              <img src={blog.image_url} alt={blog.title} className="h-full w-full object-cover" />
            </div>
          </div>
        )}

        {/* MARKDOWN CONTENT */}
<div className="prose prose-slate prose-lg max-w-none prose-p:leading-relaxed prose-img:rounded-2xl prose-img:shadow-sm prose-img:my-8 prose-a:text-blue-600 prose-a:font-semibold hover:prose-a:underline text-justify">
  <ReactMarkdown
    components={{
      h2: ({ children }) => (
        <h2 className="mt-12 mb-4 text-2xl font-extrabold text-slate-900">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="mt-8 mb-3 text-xl font-bold text-slate-900">
          {children}
        </h3>
      ),
    }}
  >
    {blog.content}
  </ReactMarkdown>
</div>


        <footer className="mt-20 border-t pt-8">
          <p className="text-sm text-slate-500">
            Bu yazı <span className="font-semibold text-slate-700">{blog.category}</span> kategorisinde yayınlandı.
          </p>
        </footer>
      </div>
    </article>
  );
}
