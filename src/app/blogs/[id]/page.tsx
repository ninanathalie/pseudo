import React from "react";
import BackButton from "@/components/ui/back-btn";

export default async function SinglePage({ params }: { params: { id: string } }) {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await response.json();

  return (
    <main className="container px-5 w-1/2 mx-auto flex flex-col justify-center my-14">
      <div className="back-btn relative">
        <BackButton />
        <h1 className="text-4xl md:text-4xl font-medium mb-5">{post.title}</h1>
      </div>
      <p className="font-light">{post.body}</p>
    </main>
  );
}
