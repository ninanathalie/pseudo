"use client";

import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });
const words = `Hello! My name is Nathalie. When life becomes overwhelming, this is where you'll find me. This is a caboodle of my daily ramblings – an abode for my undistributed thoughts, serene thinking and tranquil ideas. Today, I welcome you to my blog, and these are my misadventures.`;

export default function Intro() {
  return (
    <section>
      <TextGenerateEffect words={words} className={`${syne.className}`} />
    </section>
  );
}
