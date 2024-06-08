import Link from "next/link";
import React from "react";
import { Post } from "@/types/definitions";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default async function BlogLists() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  return (
    <section>
      {data.posts.map((post: Post) => {
        const body = post.body as string;
        const words = body ? body.split(" ") : [];
        const excerpt = words.length > 30 ? words.slice(0, 30).join(" ") + "..." : post.body;

        return (
          <Link href={`/blogs/${post.id}`} key={post.id}>
            <BentoGrid className="mx-auto">
              <BentoGridItem title={post.title} body={excerpt} className="mb-10" />
            </BentoGrid>
          </Link>
        );
      })}
    </section>
  );
}
