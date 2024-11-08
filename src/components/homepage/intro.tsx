"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BackgroundBlob from "@/components/ui/background-blob";
import { HyperText } from "@/components/ui/hyper-text";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Intro() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="relative flex items-center justify-center flex-col w-10/12 3xl:w-2/4 max-w-[1440px] mb-[4%] 4xl:mb-[2%]">
      <BackgroundBlob variant="top" />

      <Image onClick={handleImageClick} src="/images/home-img-1.jpg" alt="Intro Image" width="142" height="142" quality="95" priority={true} className="w-24 h-24 xl:w-32 xl:h-32 cursor-pointer rounded-full object-cover mb-6 md:mb-8 border-4 border-white dark:border-white/10" />
      <ImageModal isOpen={isModalOpen} onClose={handleCloseModal} imageSrc="/images/home-img-1.jpg" altText="Intro Image" />

      <h1 className="font-polysans-bold text-center text-5xl md:text-6xl lg:text-8xl font-bold mb-2 md:mb-4">Hello, I'm Nathalie</h1>

      <HyperText className={`${spaceMono.className} text-center text-lg md:text-2xl lg:text-3xl tracking-tighter mb-2 lg:mb-6`} text={`No Pseudo Pretenses, Just Me`} />

      <p className="lg:w-[80%] 4xl:w-[60%] font-light md:text-lg 2xl:text-xl text-center md:leading-8 2xl:leading-9 dark:text-neutral-300">
        This space is a caboodle of my daily ramblings – an abode for my undistributed thoughts, serene thinking and tranquil ideas. Today, I welcome you to my blog, and these are my misadventures!
      </p>

      <div className="flex items-center justify-center mt-6 lg:mt-10 gap-4">
        <Link href="#stories" className="text-md md:text-lg px-6 py-3 text-white bg-neutral-950 dark:text-neutral-950 dark:bg-neutral-50 rounded-xl">
          Read blog
        </Link>
        <Link href="/about" className="text-md md:text-lg px-6 py-3 text-neutral-950 bg-transparent border-2 border-neutral-950 dark:text-neutral-50 dark:border-neutral-50 rounded-xl">
          PseudoNath, Who?
        </Link>
      </div>
    </section>
  );
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc, altText }: ImageModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl">
          &times;
        </button>
        <img src={imageSrc} alt={altText} className="max-w-full max-h-full object-contain" />
      </div>
    </div>
  );
};
