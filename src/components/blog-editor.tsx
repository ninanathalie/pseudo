"use client";

import React, { useState } from "react";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { uploadFiles } from "@/utils/uploadthing";
import TextareaAutoSize from "react-textarea-autosize";
import { submit } from "@/actions/new-blog";

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

  return (
    <section>
      <TextareaAutoSize value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder="Untitled" className="w-full resize-none appearance-none overflow-hidden bg-transparent text-4xl font-medium focus:outline-none mb-4" />
      <div className="-mx-12">
        <BlockNoteView editor={editor} editable={editable} theme="light" onChange={handleChange} />
      </div>
      <button className="fixed top-0 right-0 mt-4 mr-4 px-4 py-2 text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg" onClick={handleSubmit}>
        Submit
      </button>
    </section>
  );
}
