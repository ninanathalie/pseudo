import React from "react";
import { BlogGrid, BlogGridItem } from "@/components/ui/blog-grid";
import BackgroundBlob from "@/components/ui/background-blob";
import { format } from "date-fns";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function RecentBlogs() {
  const recentPosts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return (
    <section className="relative flex items-center justify-center flex-col w-10/12 3xl:w-2/4 max-w-[1440px] mb-[25%] lg:mb-[20%] 2xl:mb-[10%]">
      <BackgroundBlob variant="center" />

      <h2 className="font-polysans-bold text-center text-4xl lg:text-6xl mb-6">Fresh Musings</h2>
      <div className="flex items-center justify-center mt-6 lg:mt-10 gap-4 w-full">
        <BlogGrid className="mx-auto md:auto-rows-[20rem]">
          {recentPosts.map((post, index) => {
            const formattedDate = format(new Date(post.createdAt), "MMMM dd, yyyy");
            const gridClass = index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1";

            const body = post.body as string;
            const cleanExcerpt = body
              ?.replace(/<p[^>]*><\/p>/g, "")
              .replace(/<\/?p[^>]*>/g, "")
              .replace(/<h[1-6][^>]*><\/h[1-6]>/g, "")
              .replace(/<\/?h[1-6][^>]*>/g, "")
              .replace(/<br\s*\/?>/g, "")
              .trim();

            return <BlogGridItem key={post.id} title={post.title} description={cleanExcerpt} date={formattedDate} link={`/blogs/${post.slug}`} className={gridClass} />;
          })}
        </BlogGrid>
      </div>
      <div className="flex items-center justify-center mt-10 lg:mt-16 gap-4">
        <Link href="/blogs" className="font-polysans-regular text-md md:text-lg lg:text-xl px-6 py-3 text-white bg-neutral-950 dark:text-neutral-950 dark:bg-neutral-50 rounded-xl">
          See all blogs
        </Link>
      </div>
    </section>
  );
}
