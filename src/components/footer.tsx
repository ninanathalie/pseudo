import React from "react";
import { TextDisperse } from "@/components/ui/text-disperse";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/thatgirlnathalie",
    },
    {
      name: "THREADS",
      url: "https://www.threads.net/thatgirlnathalie",
    },
    {
      name: "YOUTUBE",
      url: "https://www.youtube.com/@thatgirlnathalie",
    },
  ];

  return (
    <footer className="w-full mt-auto text-center text-white/90 p-16 md:pt-32 lg:pt-40 bg-black rounded-t-3xl z-10">
      <p className="text-lg font-light tracking-wide text-neutral-200 mb-4 lg:mb-8">
        If you found this blog, you're already halfway to being awesome. <br /> The other half? Well, you should follow me on my socials!
      </p>
      <h2 className="font-polysans-bold text-center lg:text-3xl text-white/25 mb-4 lg:mb-8">SHOOT ME A DM OR JUST SAY HI</h2>
      <div className="flex flex-col items-center justify-center pb-16 md:pb-32">
        {socialLinks.map(({ name, url }) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={name}>
            <TextDisperse>{name}</TextDisperse>
          </a>
        ))}
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
