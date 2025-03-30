"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";

export const BlogGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const { visibleCount, loadMoreRef } = useInfiniteScroll(childrenArray.length);

  return (
    <div className={cn("custom-blog gap-4 w-full lg:max-w-5xl 4xl:max-w-6xl mx-auto", className)}>
      {childrenArray.slice(0, visibleCount)}

      {visibleCount < childrenArray.length && <div ref={loadMoreRef} className="h-10 w-full" />}
    </div>
  );
};

export const BlogGridItem = ({ className, title, description, date, link }: { className?: string; title?: string | React.ReactNode; description?: string | React.ReactNode; date?: string; link?: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const body = description ? description.toString() : "";

  useEffect(() => {
    setIsMounted(true); // Ensures the component has mounted
  }, []);

  if (!isMounted) {
    return null; // Don't render anything on the server-side
  }

  return (
    <BlurFade delay={0.5} inView>
      <Link href={link ?? "/"} className={cn("group/blog natsu-blog-home transition duration-200 justify-between flex flex-col items-center", className)}>
        <div className="flex flex-col align-center overflow-hidden text-center py-12 lg:py-20 ">
          <h4 className="font-polysans-bold font-bold text-neutral-900 dark:text-neutral-200 text-xl md:text-3xl 2xl:text-4xl mb-2">{title}</h4>
          <p className="font-light text-neutral-400 dark:text-neutral-300 text-xs uppercase flex-shrink-0 whitespace-nowrap mb-6">{date}</p>

          <div className="font-light text-neutral-600 w-full" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </Link>
    </BlurFade>
  );
};
