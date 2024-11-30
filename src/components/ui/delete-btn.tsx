"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { TrashIcon } from "lucide-react";

export default function DeleteButton({ slug }: { slug: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function handleDelete() {
    setOpen(false);

    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        method: "DELETE",
      });
      if (response.ok) {
        router.push("/blogs/");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("An error occurred while deleting the post:", error);
    }
  }

  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        <TrashIcon className="w-4 h-4 md:w-full md:h-full" />
      </span>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this post?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone. Once deleted, the post will be permanently removed.</AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
