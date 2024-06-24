"use server";

import prisma from "@/lib/db";

export async function updatePost(id: number, htmlContent: string, textInput: string) {
  const title = textInput;
  const body = htmlContent;

  await prisma.post.update({
    where: { id },
    data: {
      title,
      body,
    },
  });
}
