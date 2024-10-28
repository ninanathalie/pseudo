"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { generateSlug } from "@/utils/slug";

export async function submit(htmlContent: string, textInput: string) {
  const title = textInput;
  const body = htmlContent;

  // Generate a slug from the title
  let slug = generateSlug(title);

  // Ensure slug is unique by appending a number if needed
  let existingPost = await prisma.post.findUnique({
    where: { slug },
  });

  let count = 1;
  while (existingPost) {
    slug = `${generateSlug(title)}-${count++}`;
    existingPost = await prisma.post.findUnique({
      where: { slug },
    });
  }

  // Create the post with the unique slug
  await prisma.post.create({
    data: {
      title,
      body,
      slug,
    },
  });

  // Revalidate the blogs path to include the new post
  revalidatePath("/blogs");
}
