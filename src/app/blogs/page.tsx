import React, { Suspense } from "react";
import BlogLists from "@/components/blog/blog-lists";
import BackgroundBlob from "@/components/ui/background-blob";

export default function BlogPage() {
  return (
    <main className="relative w-full flex flex-col items-center justify-center mb-16 lg:mb-24 mt-32 lg:mt-44 z-10">
      <BackgroundBlob variant="top" />

      <Suspense fallback="Loading...">
        <BlogLists />
      </Suspense>
    </main>
  );
}
