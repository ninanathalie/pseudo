import React from "react";
import { BlogGrid, BlogGridItem } from "@/components/ui/blog-item";
import { BlurFade } from "@/components/ui/blur-fade";
import { format } from "date-fns";
import prisma from "@/lib/db";

export default async function BlogLists() {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const recentPosts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="flex items-center justify-center flex-col w-10/12 3xl:w-2/4 max-w-[1440px]">
      <BlurFade delay={0.25} inView>
        <h2 className="font-polysans-bold text-center text-md uppercase tracking-wide mb-6 text-black/30 dark:text-white/20">Recent Posts</h2>
      </BlurFade>

      <div className="flex w-full items-center justify-center mt-6 lg:mt-10 gap-4">
        <BlurFade delay={0.25} inView className="w-full lg:w-[60%]">
          <BlogGrid className="mx-auto md:auto-rows-[20rem]">
            {recentPosts.map((post, index) => {
              const formattedDate = format(new Date(post.createdAt), "MMMM dd, yyyy");

              return <BlogGridItem key={post.id} title={post.title} description={post.body} date={formattedDate} link={`/blogs/${post.slug}`} className={index === recentPosts.length - 1 ? "border-0" : "border-b border-dotted dark:border-white/20"} />;
            })}
          </BlogGrid>
        </BlurFade>
      </div>
    </section>
  );
}
