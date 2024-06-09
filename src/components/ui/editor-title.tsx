"use client";

import TextareaAutoSize from "react-textarea-autosize";

export default function TitleEditor() {
  return (
    <div className="flex justify-center w-full mb-4">
      <TextareaAutoSize name="title" placeholder="Untitled" className="w-full resize-none appearance-none overflow-hidden bg-transparent text-4xl font-medium focus:outline-none" />
    </div>
  );
}
