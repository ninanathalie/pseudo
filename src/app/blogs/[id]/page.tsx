import React from "react";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { PencilLine } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FloatingNav } from "@/components/ui/floating-navbar";
import BackgroundBlob from "@/components/ui/background-blob";

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

  const navItems = [
    {
      name: "Edit",
      link: `/blogs/${post.id}/edit`,
      icon: <PencilLine className="h-5 w-5" />,
    },
  ];

  return (
    <main className="relative w-full flex flex-col items-center justify-center mb-16 lg:mb-24 mt-32 lg:mt-44 z-10">
      <BackgroundBlob variant="center" />

      <div className="mb-8 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-polysans-bold mb-2 leading-10">{post.title}</h1>
        <small className="mb-5 text-neutral-400 uppercase  font-polysans-thin">{formattedDate}</small>
      </div>

      {(await isAuthenticated()) && (
        <div className="hidden md:flex">
          <FloatingNav navItems={navItems} className="mr-5 px-4" />
        </div>
      )}

      <div className="natsu-blog flex flex-col items-center justify-center" dangerouslySetInnerHTML={{ __html: post.body || "" }} />
    </main>
  );
}
