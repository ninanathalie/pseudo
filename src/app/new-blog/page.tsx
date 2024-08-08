import React, { useMemo } from "react";
import dynamic from "next/dynamic";

export default async function NewBlog() {
  const TextEditor = useMemo(() => dynamic(() => import("@/components/blog/new-blog"), { ssr: false }), []);

  return (
    <main className="w-full flex flex-col items-center justify-center mb-16 lg:mb-24 mt-32 lg:mt-44 z-10">
      <TextEditor />
    </main>
  );
}
