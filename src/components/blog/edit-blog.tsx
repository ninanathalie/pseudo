"use client";

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { BlockNoteEditor } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import TextareaAutoSize from "react-textarea-autosize";
import { Save } from "lucide-react";
import { updatePost } from "@/actions/update-post";
import { cn } from "@/utils/cn";
import { FloatingNav } from "@/components/ui/floating-navbar";
import BackgroundBlob from "@/components/ui/background-blob";

interface UpdatePostProps {
  post: {
    id: number;
    title: string;
    body: string | null;
  };
}

export default function UpdatePost({ post }: UpdatePostProps) {
  const [html, setHTML] = useState("");
  const [textInput, setTextInput] = useState(post.title);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isContentChanged, setIsContentChanged] = useState(false);
  const editor: BlockNoteEditor = useCreateBlockNote();

  const handleChange = useCallback(async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);
    setHTML(html);
    setIsContentChanged(true);
  }, [editor, setHTML]);

  useEffect(() => {
    async function loadInitialContent() {
      if (post.body) {
        const blocks = await editor.tryParseHTMLToBlocks(post.body);
        editor.replaceBlocks(editor.document, blocks);
      }
    }
    loadInitialContent();
  }, [editor, post.body]);

  const handleTextInputChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
    setIsContentChanged(true);
  }, []);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const html = await editor.blocksToHTMLLossy(editor.document);
    await updatePost(post.id, html, textInput);
    setIsSubmitting(false);
    setIsContentChanged(false);
  };

  const navItems = [
    {
      name: "Save",
      useDiv: true,
      icon: <Save className="h-5 w-5" />,
    },
  ];

  return (
    <section className="relative">
      <BackgroundBlob variant="center" />

      <div className="mb-8 text-center w-full">
        <TextareaAutoSize value={textInput} onChange={handleTextInputChange} placeholder="Untitled" className="text-center w-full resize-none appearance-none overflow-hidden bg-transparent text-4xl md:text-6xl font-polysans-bold mb-2 focus:outline-none" />
      </div>
      <div className="-mx-12">
        <BlockNoteView className="blog-editor" editor={editor} editable={true} theme="light" onChange={handleChange} />
      </div>
      <button
        className={cn("hidden md:flex", {
          "cursor-not-allowed opacity-50": isSubmitting || !isContentChanged,
        })}
        onClick={handleSubmit}
        disabled={isSubmitting || !isContentChanged}
      >
        <FloatingNav navItems={navItems} className="mr-5 px-4 cursor-not-allowed" />
      </button>
    </section>
  );
}
