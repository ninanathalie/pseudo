import Link from "next/link";
import React from "react";
import prisma from "@/lib/db";
import { format } from "date-fns";

export default async function BlogLists() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc", // Sort by createdAt in descending order
    },
  });

  return (
    <section>
      {posts.map((post) => {
        const body = post.body as string;
        const words = body ? body.split(" ") : [];
        const excerpt = words.length > 30 ? words.slice(0, 30).join(" ") + "..." : post.body;

        // Remove <p> tags and empty <p> tags
        const cleanExcerpt = excerpt
          ?.replace(/<p[^>]*><\/p>/g, "")
          .replace(/<\/?p[^>]*>/g, "")
          .replace(/<h[1-6][^>]*><\/h[1-6]>/g, "")
          .replace(/<\/?h[1-6][^>]*>/g, "")
          .trim();
        const formattedDate = format(new Date(post.createdAt), "MMMM dd, yyyy");

        return (
          <div key={post.id} className="row-span-1 rounded-xl group transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 mb-6 lg:mb-14">
            <Link href={`/blogs/${post.id}`}>
              <div className="group-hover:translate-x-2 transition duration-200">
                <h2 className="font-medium text-xl text-neutral-800 mt-2">{post.title}</h2>
                <small className="mb-5 text-neutral-400 uppercase font-thin">{formattedDate}</small>
                <div className="font-light text-neutral-600" dangerouslySetInnerHTML={{ __html: cleanExcerpt || "" }} />
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
}
