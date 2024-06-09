"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function submit(htmlContent: string, textInput: string) {
  const title = textInput;
  const body = htmlContent;

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  revalidatePath("/blogs");
}
