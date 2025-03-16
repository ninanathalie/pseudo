import React from "react";
import Link from "next/link";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { PencilLine } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FloatingNav } from "@/components/ui/floating-navbar";
import BackgroundBlob from "@/components/ui/background-blob";
import DeleteButton from "@/components/ui/delete-btn";
import { BlurFade } from "@/components/ui/blur-fade";

export default async function SinglePage({ params }: { params: { slug: string } }) {
  const { isAuthenticated } = getKindeServerSession();

  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
  });
  if (!post) {
    notFound();
  }

  const [previousPost, latestPost] = await Promise.all([prisma.post.findFirst({ where: { createdAt: { lt: post.createdAt } }, orderBy: { createdAt: "desc" } }), prisma.post.findFirst({ where: { createdAt: { gt: post.createdAt } }, orderBy: { createdAt: "asc" } })]);

  const formattedDate = format(new Date(post.createdAt), "MMMM dd, yyyy");

  const navItems = [
    { title: "Edit", href: `/blogs/${post.slug}/edit`, icon: <PencilLine className="w-4 h-4 md:w-full md:h-full" /> },
    {
      title: "Delete",
      component: <DeleteButton slug={post.slug} />,
    },
  ];

  return (
    <main className="relative w-full flex flex-col items-center justify-center mb-16 lg:mb-24">
      <BackgroundBlob variant="center" />
      <BlurFade delay={0.25} inView className="w-full md:max-w-4xl flex justify-center">
        <div className="mb-8 text-center max-w-4xl mt-32 lg:mt-44 z-10">
          <h1 className="text-4xl md:text-6xl font-polysans-bold mb-2 leading-10 px-6">{post.title}</h1>
          <small className="mb-5 text-neutral-400 uppercase font-polysans-thin">{formattedDate}</small>
        </div>
      </BlurFade>
      {(await isAuthenticated()) && (
        <div className="hidden md:flex max-w-fit fixed top-6 right-4 border border-transparent rounded-2xl z-40 ">
          <FloatingNav items={navItems} />
        </div>
      )}
      <BlurFade delay={0.5} inView className="w-full md:max-w-4xl flex justify-center">
        <div className="natsu-blog flex flex-col items-center justify-center w-full" dangerouslySetInnerHTML={{ __html: post.body || "" }} />
      </BlurFade>

      <BlurFade delay={0.75} inView className="w-full md:max-w-4xl flex justify-center">
        <div className="flex justify-between items-start w-full mt-8 md:max-w-4xl px-6 lg:px-0 gap-2">
          {previousPost && (
            <Link href={`/blogs/${previousPost.slug}`}>
              <span className="flex flex-col w-44 md:w-60 p-6 bg-white/20 border rounded-xl text-right">
                <span className="text-xs mb-2 uppercase text-neutral-400">← Previous Post</span>
                <span className="truncate font-polysans-bold text-md">{previousPost.title}</span>
              </span>
            </Link>
          )}
          {latestPost && (
            <Link href={`/blogs/${latestPost.slug}`}>
              <span className="flex flex-col w-44 md:w-60 p-6 bg-white/20 border rounded-xl">
                <span className="text-xs mb-2 uppercase text-neutral-400">Latest Post →</span>
                <span className="truncate font-polysans-bold text-md">{latestPost.title}</span>
              </span>
            </Link>
          )}
        </div>
      </BlurFade>
    </main>
  );
}
