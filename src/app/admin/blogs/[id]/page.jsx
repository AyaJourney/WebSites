"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import PutWarningModal from "../modal/PutWarningModal";
import { supabase } from "@/lib/supabase";
export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState(null);
const[loading,setLoading]=useState(false);

   const[open,setOpen]=useState(false);
    const[blogId,setBlogId]=useState("")
    const[boolPut,setBoolPut]=useState({put_now:false,put_end:false})
    const getBlogText = async ()=>{
    setLoading(true)
    try {
        const{data}=await axios.get(`/api/admin/blogs/${id}`);
        setForm(data)
        setLoading(false)

    } catch (error) {
    setLoading(false)
    setErrorText("Veri yüklenirken hata oluştu tekrar deneyiniz. Hata devam ederse sistem yöneticisi ile iletişime geçiniz.")
        
    }
}
console.log("put form",form)
const putBlogText = async(id,form)=>{
  try {
    await axios.put(`/api/admin/blogs/${id}`,
form
    
    )
     setBoolPut({...boolPut,put_now:true,put_end:true})
  } catch (error) {
    
  }
}
  useEffect(() => {
    if(id){
         getBlogText(id)
    }

  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        Yükleniyor...
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
    alert("Upload başarısız");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setOpen(true);
    setBlogId(id)

    // router.push("/admin/blogs");
  };
  console.log(form, "form")

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white shadow-lg rounded-2xl p-8 border">
        <h1 className="text-2xl font-bold mb-6">Blog Düzenle</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Başlık */}
          <div>
            <label className="block text-sm font-medium mb-1">Başlık</label>
            <input
              name="title"
              value={form?.title || ""}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Başlık"
              required
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input
              name="slug"
              value={form?.slug || ""}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="slug-ornek"
              required
            />
          </div>

          {/* Özet */}
          <div>
            <label className="block text-sm font-medium mb-1">Özet</label>
            <textarea
              name="summary"
              value={form?.summary || ""}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Kısa özet"
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-sm font-medium mb-1">Kategori</label>
            <input
              name="category"
              value={form?.category || ""}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Kategori"
            />
          </div>

          {/* İçerik */}
          <div>
            <label className="block text-sm font-medium mb-1">Ana İçerik</label>
            <textarea
              name="content"
              value={form?.content}
              onChange={handleChange}
              rows={10}
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Blog içeriği"
              required
            />
          </div>
  <div>
            <label className="block text-sm font-medium mb-1">Ana İçerik</label>
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
          <div className="flex items-center gap-8">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="published"
                checked={form?.published}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Yayında
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="is_featured"
                checked={form?.is_featured}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Önerilen
            </label>
          </div>

          {/* Butonlar */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 rounded-xl border hover:bg-gray-100"
            >
              Geri
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
      <PutWarningModal open={open} setOpen={setOpen} putBlogText={putBlogText} id={id} boolPut={boolPut} setBoolPut={setBoolPut} router={router} form={form}  />
    </div>
  );
}
