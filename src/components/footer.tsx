import React from "react";
import { FaThreads, FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto text-center text-white p-16 md:pt-24 bg-black rounded-t-3xl z-10">
      <h2 className="font-polysans-bold text-center text-4xl md:text-5xl mb-4">Get In Touch</h2>
      <p className="font-polysans-thin tracking-wide mb-4 text-neutral-200">
        If you found this blog, you're already halfway to being awesome. <br /> The other half? Well, you should follow me on my socials!
      </p>
      <div className="flex justify-center pb-10 md:pb-16">
        <a href="https://instagram.com/thatgirlnathalie" target="_blank" className="text-white px-4 py-2">
          <FaInstagram className="w-6 h-6 lg:w-8 lg:h-8" />
        </a>
        <a href="https://www.youtube.com/@thatgirlnathalie" target="_blank" className="text-white px-4 py-2">
          <FiYoutube className="w-6 h-6 lg:w-8 lg:h-8" />
        </a>
        <a href="https://threads.net/thatgirlnathalie" target="_blank" className="text-white px-4 py-2">
          <FaThreads className="w-6 h-6 lg:w-8 lg:h-8" />
        </a>
      </div>
      <small className="mb-2 mx-auto font-extralight text-neutral-600">
        Designed & Built by{" "}
        <a href="https://github.com/ninanathalie/nathalie.blog" target="_blank" className="underline underline-offset-2">
          Niña Nathalie
        </a>{" "}
        | All Rights Reserved &copy; {currentYear}
      </small>
    </footer>
  );
}
