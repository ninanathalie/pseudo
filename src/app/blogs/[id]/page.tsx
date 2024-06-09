import React from "react";
import BackButton from "@/components/ui/back-btn";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { format } from "date-fns";

export default async function SinglePage({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }

  const formattedDate = format(new Date(post.createdAt), "MMMM dd, yyyy");

  return (
    <main className="container px-5 w-3/4 lg:w-1/2 mx-auto flex flex-col justify-center my-14">
      <div className="back-btn relative mb-8">
        <BackButton />
        <h1 className="text-4xl md:text-4xl font-medium mb-2">{post.title}</h1>
        <small className="mb-5 text-neutral-400 uppercase font-thin">{formattedDate}</small>
      </div>
      <div className="natsu-blog" dangerouslySetInnerHTML={{ __html: post.body || "" }} />
    </main>
  );
}
