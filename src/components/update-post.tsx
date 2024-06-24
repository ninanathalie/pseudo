"use client";

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { BlockNoteEditor } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import TextareaAutoSize from "react-textarea-autosize";
import { ArrowLeft } from "lucide-react";
import { updatePost } from "@/actions/update-post";
import { cn } from "@/utils/cn";

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

  return (
    <section>
      <div className="back-btn relative">
        <Link href={`/blogs/${post.id}`} className="absolute group top-2 -left-12 p-2 bg-neutral-100 hover:bg-neutral-200/60 rounded-md">
          <ArrowLeft className="text-neutral-400 group-hover:text-neutral-600 w-4 h-4" />
        </Link>
        <TextareaAutoSize value={textInput} onChange={handleTextInputChange} placeholder="Untitled" className="w-full resize-none appearance-none overflow-hidden bg-transparent text-4xl font-medium focus:outline-none mb-4" />
      </div>
      <div className="-mx-12">
        <BlockNoteView editor={editor} editable={true} theme="light" onChange={handleChange} />
      </div>
      <button
        className={cn("fixed top-0 right-0 mt-4 mr-4 px-4 py-2 text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg", {
          "cursor-not-allowed opacity-50": isSubmitting || !isContentChanged,
        })}
        onClick={handleSubmit}
        disabled={isSubmitting || !isContentChanged}
      >
        Update
      </button>
    </section>
  );
}
