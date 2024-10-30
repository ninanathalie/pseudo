"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";

export const BlogGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <div className={cn("custom-blog gap-4 w-full lg:max-w-5xl 4xl:max-w-6xl mx-auto", className)}>{children}</div>;
};

export const BlogGridItem = ({ className, title, description, date, link }: { className?: string; title?: string | React.ReactNode; description?: string | React.ReactNode; date?: string; link?: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const excerpt = description ? description.toString() : "";

  useEffect(() => {
    setIsMounted(true); // Ensures the component has mounted
  }, []);

  if (!isMounted) {
    return null; // Don't render anything on the server-side
  }

  return (
    <Link href={link ?? "/"} className={cn("group/blog transition duration-200 justify-between flex flex-col py-6 border-b", className)}>
      <div className="group-hover/blog:translate-x-2 transition duration-200">
        <div className="flex flex-row">
          <div className="mr-4 flex items-center">
            <RiArrowRightUpLine className="w-6 h-6 md:w-10 md:h-10" />
          </div>
          <div className="flex flex-col w-full overflow-hidden">
            <div className="flex justify-start items-center">
              <h4 className="font-polysans-bold font-bold text-neutral-900 dark:text-neutral-200 text-xl md:text-2xl lg:text-3xl whitespace-nowrap overflow-hidden text-ellipsis">{title}</h4>
              <p className="font-light text-neutral-400 dark:text-neutral-300 text-xs uppercase ml-2 flex-shrink-0 whitespace-nowrap">• {date}</p>
            </div>

            <p className="truncate font-light text-neutral-600 dark:text-neutral-400 md:text-lg w-full" dangerouslySetInnerHTML={{ __html: excerpt }} />
          </div>
        </div>
      </div>
    </Link>
  );
};
