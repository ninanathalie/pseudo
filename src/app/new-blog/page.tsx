import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function NewBlog() {
  const TextEditor = useMemo(() => dynamic(() => import("@/components/blog-editor"), { ssr: false }), []);

  return (
    <main className="container px-5 w-3/4 lg:w-1/2 mx-auto flex flex-col justify-center my-14">
      <TextEditor />
    </main>
  );
}
