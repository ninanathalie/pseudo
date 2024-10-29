"use server";

import prisma from "@/lib/db";
import { generateSlug } from "@/utils/slug";

async function ensureUniqueSlug(title: string, currentSlug: string): Promise<string> {
  let slug = generateSlug(title);

  if (slug === currentSlug) {
    return slug;
  }

  let slugExists = await prisma.post.findUnique({
    where: { slug },
  });

  let count = 1;

  while (slugExists) {
    slug = `${generateSlug(title)}-${count}`;
    slugExists = await prisma.post.findUnique({
      where: { slug },
    });
    count++;
  }

  return slug;
}

export async function updatePost(slug: string, htmlContent: string, newTitle: string) {
  const existingPost = await prisma.post.findUnique({
    where: { slug },
  });

  if (!existingPost) {
    throw new Error("Post not found");
  }

  // Generate a new unique slug only if the new title differs from the existing title
  const updatedSlug = await ensureUniqueSlug(newTitle, slug);

  await prisma.post.update({
    where: { id: existingPost.id },
    data: {
      title: newTitle,
      slug: updatedSlug,
      body: htmlContent,
    },
  });

  return updatedSlug;
}
