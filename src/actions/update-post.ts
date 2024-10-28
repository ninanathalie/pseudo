"use server";

import prisma from "@/lib/db";

export async function updatePost(slug: string, htmlContent: string, textInput: string) {
  const title = textInput;
  const body = htmlContent;

  await prisma.post.update({
    where: { slug },
    data: {
      title,
      body,
    },
  });
}
