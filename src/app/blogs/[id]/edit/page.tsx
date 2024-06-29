import React from "react";
import Link from "next/link";
import UpdatePost from "@/components/update-post";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

async function fetchPostData(id: string) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return post;
}

export default async function EditPage({ params }: { params: { id: string } }) {
  const post = await fetchPostData(params.id);
  if (!post) {
    notFound();
  }

  return (
    <main className="container px-5 w-3/4 lg:w-1/2 max-w-4xl mx-auto flex flex-col justify-center my-14 z-10">
      <div className="back-btn relative mb-8">
        <Link href={`/blogs/${post.id}`} className="absolute group top-2 -left-12 p-2 bg-neutral-100 hover:bg-neutral-200/60 rounded-md">
          <ArrowLeft className="text-neutral-400 group-hover:text-neutral-600 w-4 h-4" />
        </Link>

        <UpdatePost post={post} />
      </div>
    </main>
  );
}
