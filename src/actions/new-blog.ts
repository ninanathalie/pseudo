"use server";

import prisma from "@/lib/db";

export async function submit(htmlContent: string, textInput: string) {
  console.log("Submitting HTML:", htmlContent, "Text Input:", textInput);

  const title = textInput;
  const body = htmlContent;

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });
}
