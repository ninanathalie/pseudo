import React from "react";
import Link from "next/link";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function SinglePage({ params }: { params: { id: string } }) {
  const { isAuthenticated } = getKindeServerSession();

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
    <main className="container px-5 w-3/4 lg:w-1/2 max-w-4xl mx-auto flex flex-col justify-center my-14 z-10">
      <div className="back-btn relative mb-8">
        <Link href="/blogs" className="absolute group top-2 -left-12 p-2 bg-neutral-100 hover:bg-neutral-200/60 rounded-md">
          <ArrowLeft className="text-neutral-400 group-hover:text-neutral-600 w-4 h-4" />
        </Link>
        <h1 className="text-4xl md:text-4xl font-medium mb-2">{post.title}</h1>
        <small className="mb-5 text-neutral-400 uppercase font-thin">{formattedDate}</small>
        {(await isAuthenticated()) && (
          <Link href={`/blogs/${post.id}/edit`}>
            <button className="fixed top-0 right-0 mt-4 mr-4 px-4 py-2 text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg">Edit</button>
          </Link>
        )}
      </div>
      <div className="natsu-blog" dangerouslySetInnerHTML={{ __html: post.body || "" }} />
    </main>
  );
}
