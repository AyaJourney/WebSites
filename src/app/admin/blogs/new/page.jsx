"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import axios from "axios";
import { useRouter } from "next/navigation";
import PostWarningModal from "../modal/PostWarningModal";
import BlogEditor from "@/app/components/blogeditor/BlogEditor";
export default function NewBlogPage() {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
    category: "",
    image_url:"",
    is_featured: false,
    published: false,
  });
    const router = useRouter();
    const[loading,setLoading]=useState(false);
    const[open,setOpen]=useState(false);
    const[blogId,setBlogId]=useState("")
    const[boolPut,setBoolPut]=useState({put_now:false,put_end:false})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };
const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `blogs/${fileName}`;

  // UPLOAD
  const { error: uploadError } = await supabase.storage
    .from("blog-images")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) {
    console.error(uploadError);

    return;
  }

  // PUBLIC URL
  const { data } = supabase.storage
    .from("blog-images")
    .getPublicUrl(filePath);

  console.log("IMAGE URL:", data.publicUrl);

  setForm((prev) => ({
    ...prev,
    image_url: data?.publicUrl,
  }));
};
console.log(form,"new form")
const postBlogText = async()=>{
  try {
    await axios.post(`/api/admin/blogs/create`,form)
     setBoolPut({...boolPut,put_now:true,put_end:true})
  } catch (error) {
    
  }
}

  const handleSubmit = async (e) => {
    e.preventDefault();

     setOpen(true);
    // setBlogId(id)
  };

  return (
    <div className="max-w-4xl mx-auto mt-36 px-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Yeni Blog Yazısı
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-6 space-y-6"
      >
        {/* Başlık */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Başlık
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            placeholder="Blog başlığı"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Özet */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Özet
          </label>
          <textarea
            name="summary"
            value={form.summary}
            onChange={handleChange}
            placeholder="Kısa özet metni"
            rows={3}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          />
        </div>

        {/* İçerik */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Ana İçerik
          </label>
         <BlogEditor
  value={form?.content || ""}
  onChange={(html) =>
    setForm((prev) => ({ ...prev, content: html }))
  }
/>
        </div>

        {/* Kategori */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Kategori
          </label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Örn: Vize, Seyahat, Genel"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
           Fotoğraf
          </label>
         <input
  type="file"
  accept="image/*"
  onChange={handleImageUpload}
  className="border p-2 rounded"
/>
{form?.image_url && (
  <img
    src={form?.image_url}
    className="mt-4 w-full max-h-64 object-cover rounded-xl"
  />
)}

        </div>
        {/* Checkboxlar */}
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="is_featured"
              checked={form.is_featured}
              onChange={handleChange}
              className="w-4 h-4"
            />
            Önerilen
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="published"
              checked={form.published}
              onChange={handleChange}
              className="w-4 h-4"
            />
            Yayında
          </label>
        </div>

        {/* Buton */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Kaydet
          </button>
        </div>
      </form>
<PostWarningModal  open={open} setOpen={setOpen} postBlogText={postBlogText} boolPut={boolPut} setBoolPut={setBoolPut} router={router} form={form}/>
    </div>
  );
}
