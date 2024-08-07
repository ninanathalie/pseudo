import React, { Suspense } from "react";
import BlogLists from "@/components/blog/blog-lists";

export default function BlogPage() {
  return (
    <main className="w-full flex flex-col items-center justify-center mb-16 lg:mb-24 mt-32 lg:mt-44 z-10">
      <div className="back-btn relative">
        <h1 className="font-polysans-bold text-center text-4xl lg:text-6xl mb-6">Stories</h1>
      </div>

      <Suspense fallback="Loading...">
        <BlogLists />
      </Suspense>
    </main>
  );
}
