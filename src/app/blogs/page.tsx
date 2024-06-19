import React, { Suspense } from "react";
import BlogLists from "@/components/blog-lists";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function BlogPage() {
  return (
    <main className="container px-5 w-3/4 lg:w-1/2 mx-auto flex flex-col justify-center my-14">
      <div className="back-btn relative">
        <Link href="/" className="absolute group top-2 -left-12 p-2 bg-neutral-100 hover:bg-neutral-200/60 rounded-md">
          <ArrowLeft className="text-neutral-400 group-hover:text-neutral-600 w-4 h-4" />
        </Link>
        <h1 className="text-4xl md:text-5xl font-medium mb-10">Stories</h1>
      </div>

      <Suspense fallback="Loading...">
        <TracingBeam>
          <BlogLists />
        </TracingBeam>
      </Suspense>
    </main>
  );
}
