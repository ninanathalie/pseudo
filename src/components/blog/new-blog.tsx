"use client";

import React, { useState } from "react";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { uploadFiles } from "@/utils/uploadthing";
import TextareaAutoSize from "react-textarea-autosize";
import { submit } from "@/actions/new-blog";
import { Send } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import BackgroundBlob from "@/components/ui/background-blob";

interface EditorProps {
  initialContent?: string;
  editable?: boolean;
}

export default function Editor({ initialContent, editable }: EditorProps) {
  const [html, setHTML] = useState("");
  const [textInput, setTextInput] = useState("");
  const [editorContent, setEditorContent] = useState<PartialBlock[]>([]);

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent ? (JSON.parse(initialContent) as PartialBlock[]) : undefined,
    uploadFile: async (file: File) => {
      const [res] = await uploadFiles("imageUploader", { files: [file] });
      return res.url;
    },
  });

  const handleChange = async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);
    setHTML(html);
    setEditorContent(editor.document);
  };

  const handleSubmit = async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);
    submit(html, textInput);
  };

  const navItems = [
    {
      name: "Publish",
      useDiv: true,
      icon: <Send className="h-5 w-5" />,
    },
  ];

  return (
    <section className="relative w-full max-w-4xl">
      <BackgroundBlob variant="center" />

      <div className="mb-8 text-center w-full">
        <TextareaAutoSize value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder="Untitled" className="text-center w-full resize-none appearance-none overflow-hidden bg-transparent text-4xl md:text-6xl font-polysans-bold mb-2 focus:outline-none" />
      </div>
      <div className="w-full">
        <BlockNoteView className="blog-editor" editor={editor} editable={editable} theme="light" onChange={handleChange} />
      </div>
      <button className="hidden md:flex" onClick={handleSubmit}>
        <FloatingNav navItems={navItems} className="mr-5 px-4 cursor-not-allowed" />
      </button>
    </section>
  );
}
