import React from "react";
import UpdatePost from "@/components/blog/edit-blog";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

async function fetchPostData(slug: string) {
  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });
  return post;
}

export default async function EditPage({ params }: { params: { slug: string } }) {
  const post = await fetchPostData(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="w-full flex flex-col items-center justify-center mb-16 lg:mb-24 mt-32 lg:mt-44 z-10">
      <UpdatePost post={post} />
    </main>
  );
}
