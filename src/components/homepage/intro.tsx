"use client";

import React from "react";
import Image from "next/image";
import BackgroundBlob from "@/components/ui/background-blob";
import { HyperText } from "@/components/ui/hyper-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Intro() {
  return (
    <section className="relative flex items-center justify-center flex-col w-10/12 3xl:w-2/4 max-w-[1440px] mb-[4%] 4xl:mb-[2%]">
      <BackgroundBlob variant="top" />

      <BlurFade delay={0.25} inView>
        <div className="flex items-center justify-center flex-col mt-4">
          <HyperText className={`${spaceMono.className} text-center text-md xl:text-2xl tracking-tighter md:mb-2 lg:mb-6`} text={`while(!(succeed=try())){}`} />

          <h1 className="font-polysans-bold text-center text-4xl xl:text-7xl font-bold mb-4">Write. Design. Code.</h1>

          <p className="lg:w-[60%] font-light xl:text-lg text-center xl:leading-8 dark:text-neutral-300 mb-6">
            Hello, I'm Nathalie and this space is a caboodle of my daily ramblings – an abode for my undistributed thoughts, serene thinking and tranquil ideas. Today, I welcome you to my blog, and these are my misadventures!
          </p>

          <small className="text-black/30 dark:text-white/20">
            <strong>Disclaimer:</strong> This is not a technical blog.
          </small>
        </div>
      </BlurFade>
    </section>
  );
}
