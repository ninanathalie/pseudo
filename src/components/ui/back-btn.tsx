"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="absolute group top-2 -left-12 p-2 bg-neutral-100 hover:bg-neutral-200/60 rounded-md">
      <ArrowLeft className="text-neutral-400 group-hover:text-neutral-600 w-4 h-4" />
    </button>
  );
}
