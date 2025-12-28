"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import DeleteWarningModal from "./modal/DeleteWarningModal";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
export default function AdminBlogsPage() {
    const[open,setOpen]=useState(false);
    const[blogId,setBlogId]=useState("")
    const[boolDelete,setBoolDelete]=useState({delete_now:false,delete_end:false})
  const [blogs, setBlogs] = useState([]);
const[loading,setLoading]=useState(false);
const[errorText,setErrorText]=useState("")
const getBlogText = async ()=>{
    setLoading(true)
    try {
        const{data}=await axios.get(`/api/admin/blogs/list`);
        setBlogs(data)
    setLoading(false)

    } catch (error) {
    setLoading(false)
    setErrorText("Veri yüklenirken hata oluştu tekrar deneyiniz. Hata devam ederse sistem yöneticisi ile iletişime geçiniz.")
        
    }
}


const deleteBlogText = async (blog)=>{
    setLoading(true)
    try {
        await axios.delete(`/api/admin/blogs/${blog.id}`);
    setLoading(false)
    setBoolDelete({...boolDelete,delete_now:true,delete_end:true})
getBlogText()
    } catch (error) {
    setLoading(false)
         setErrorText("Silme işlemi sırasında hata oluştu tekrar deneyiniz. Hata devam ederse sistem yöneticisi ile iletişime geçiniz.")
    }
}




  useEffect(() => {
   getBlogText()
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-36 px-6 min-h-screen">
      {/* Başlık + Yeni Blog */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Blog Yazıları</h1>

        <a
          href="/admin/blogs/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          + Yeni Blog
        </a>
      </div>

      {/* Tablo */}
{loading ? (
    <div className="flex justify-center items-center">
        <h4>Yükleniyor...</h4>
    </div>
) : (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">Başlık</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3 text-center">Yayında</th>
              <th className="px-4 py-3 text-center">Önerilen</th>
              <th className="px-4 py-3">Tarih</th>
              <th className="px-4 py-3 text-right">İşlemler</th>
            </tr>
          </thead>

          <tbody>
            {blogs.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-8 text-center text-gray-500"
                >
                  Henüz blog yazısı yok
                </td>
              </tr>
            )}

            {blogs.map(blog => (
              <tr
                key={blog.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-medium text-gray-800">
                  {blog.title}
                </td>

                <td className="px-4 py-3">
                  {blog.category || "-"}
                </td>

                <td className="px-4 py-3 text-center">
                  {blog.published ? "✅" : "❌"}
                </td>

                <td className="px-4 py-3 text-center">
                  {blog.is_featured ? "⭐" : "-"}
                </td>

                <td className="px-4 py-3 text-gray-600">
                  {new Date(blog.created_at).toLocaleDateString()}
                </td>
<td className="px-4 py-3 text-right">
  <div className="inline-flex items-center gap-3">
    {/* Düzenle */}
    <a href={`/admin/blogs/${blog.id}`} className="group relative inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition">
      <FiEdit2 className="text-lg" />
      <span className="pointer-events-none absolute -top-9 right-0 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition group-hover:opacity-100">
        Düzenle
      </span>
    </a>

    {/* Sil */}
    <button
      type="button"
      onClick={() => {
        setOpen(true);
        setBlogId(blog);
      }}
      className="group relative inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-red-600 transition"
    >
      <FiTrash2 className="text-lg" />
      <span className="pointer-events-none absolute -top-9 right-0 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition group-hover:opacity-100">
        Sil
      </span>
    </button>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>  
)}

    <DeleteWarningModal  open={open} setOpen={setOpen} deleteBlogText={deleteBlogText} blogId={blogId} boolDelete={boolDelete} setBoolDelete={setBoolDelete} />
    </div>
  );
}
