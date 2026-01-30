"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import { Extension } from "@tiptap/core";
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'

// --- ÖZEL UZANTI: TAB TUŞUNA GERÇEK BOŞLUK ATAMA ---
const CustomTab = Extension.create({
  name: 'customTab',
  addKeyboardShortcuts() {
    return {
      'Tab': () => {
        return this.editor.commands.insertContent('    ') // 4 boşluk ekler
      },
    }
  },
})

export default function BlogEditor({ value, onChange }) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ 
        textStyle: false,
        bulletList: { keepMarks: true },
        orderedList: { keepMarks: true },
      }),
      TextStyle,
      Color,
      Underline,
      CustomTab,
      TaskList,
      TaskItem.configure({ nested: true }),
      Link.configure({ openOnClick: false, autolink: true }),
      Image,
      Placeholder.configure({ placeholder: "Blog yazınıza başlayın... Paragraf başı için Tab veya boşluk kullanabilirsiniz." }),
      CharacterCount.configure({ limit: 20000 }),
    ],
    content: value || "",
    editorProps: {
      attributes: {
        class: [
          "max-w-none min-h-[450px] p-8 focus:outline-none leading-relaxed text-slate-800",
          // BOŞLUKLARI KORU (Çok Önemli)
          "whitespace-pre-wrap",
          // OTOMATİK İLK SATIR GİRİNTİSİ
          "[&_p]:[text-indent:40px]", 
          // PARAGRAFLAR ARASI BOŞLUK
          "[&_p]:mb-6 [&_p]:min-h-[1rem]",
          // BAŞLIKLARDA GİRİNTİYİ SIFIRLA
          "[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:[text-indent:0px]",
          "[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:[text-indent:0px]",
          // LİSTELERDE GİRİNTİYİ SIFIRLA
          "[&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-6 [&_ul]:[text-indent:0px]",
          "[&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-6 [&_ol]:[text-indent:0px]",
          "[&_li]:mb-2 [&_li_p]:mb-0 [&_li_p]:[text-indent:0px]",
        ].join(" "),
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      {/* TOOLBAR */}
      <div className="flex flex-wrap gap-1 p-2 border-b bg-slate-50 items-center">
        <div className="flex gap-1 pr-2 border-r border-slate-300">
          <Btn on={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")}>B</Btn>
          <Btn on={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive("underline")}>U</Btn>
          <Btn on={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")}>I</Btn>
        </div>

        <div className="flex gap-1 px-2 border-r border-slate-300">
          <Btn on={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })}>H2</Btn>
          <Btn on={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive("heading", { level: 3 })}>H3</Btn>
        </div>

        <div className="flex gap-1 px-2 border-r border-slate-300">
          <Btn on={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")}>• Liste</Btn>
          <Btn on={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")}>1. Liste</Btn>
          <Btn on={() => editor.chain().focus().toggleTaskList().run()} active={editor.isActive("taskList")}>☑ Liste</Btn>
        </div>

        <div className="flex items-center gap-2 pl-2">
          <input
            type="color"
            value={editor.getAttributes('textStyle').color || '#000000'}
            onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
            className="w-6 h-6 cursor-pointer border-none bg-transparent"
          />
          <Btn on={() => editor.chain().focus().undo().run()}>↺</Btn>
          <Btn on={() => editor.chain().focus().redo().run()}>↻</Btn>
        </div>
      </div>

      <EditorContent editor={editor} />

      <div className="text-[10px] p-2 bg-slate-50 border-t flex justify-between text-slate-400">
        <span>Paragraf başı için Tab veya Space kullanabilirsiniz.</span>
        <span>{editor.storage.characterCount.characters()} Karakter</span>
      </div>
    </div>
  );
}

function Btn({ on, active, children, title }) {
  return (
    <button
      type="button"
      onClick={on}
      title={title}
      className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
        active ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:bg-slate-200"
      }`}
    >
      {children}
    </button>
  );
}