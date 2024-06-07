"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto mt-auto text-center text-neutral-600 py-5 px-7">
      <small className="mb-2 text-xs font-extralight">
        Designed & Built by{" "}
        <a href="https://github.com/ninanathalie/nathalie.blog" target="_blank" className="underline underline-offset-2">
          Niña Nathalie
        </a>{" "}
        | All Rights Reserved &copy; {currentYear}
      </small>
    </footer>
  );
}
