import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function DELETE(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const deletedPost = await prisma.post.delete({
      where: { slug: slug },
    });

    return NextResponse.json({ message: "Post deleted successfully", deletedPost });
  } catch (error) {
    console.error("Failed to delete post:", error);
    return NextResponse.json({ message: "Failed to delete post" }, { status: 500 });
  }
}
