import { cn } from "@/utils/cn";
import Link from "next/link";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <div className={cn("custom-bento grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ", className)}>{children}</div>;
};

export const BentoGridItem = ({ className, title, description, date, header, icon, link }: { className?: string; title?: string | React.ReactNode; description?: string | React.ReactNode; date?: string; header?: React.ReactNode; icon?: React.ReactNode; link?: string }) => {
  return (
    <Link href={link ?? "/"} className={cn("row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-6 bg-white/50 border-2 border-white dark:bg-white/10 justify-between flex flex-col space-y-4", className)}>
      {header ? (
        header
      ) : (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-200 dark:bg-neutral-400"></div>
      )}

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-polysans-bold font-bold text-neutral-900 dark:text-neutral-200 text-xl mb-2 mt-2 w-full whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
        <div className="font-polysans-thin font-normal text-neutral-600 dark:text-neutral-400 text-lg mb-2 whitespace-nowrap overflow-hidden text-ellipsis" dangerouslySetInnerHTML={{ __html: description || "" }} />
        <div className="font-polysans-thin font-normal text-neutral-400 dark:text-neutral-300 text-md">{date}</div>
      </div>
    </Link>
  );
};
