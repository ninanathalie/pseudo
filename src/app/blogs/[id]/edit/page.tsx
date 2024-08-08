import React from "react";
import UpdatePost from "@/components/blog/edit-blog";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

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
    <main className="w-full flex flex-col items-center justify-center mb-16 lg:mb-24 mt-32 lg:mt-44 z-10">
      <UpdatePost post={post} />
    </main>
  );
}
