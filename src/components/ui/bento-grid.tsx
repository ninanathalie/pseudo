import { cn } from "@/utils/cn";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <div className={cn("grid grid-cols-1 gap-4 mx-auto ", className)}>{children}</div>;
};

export const BentoGridItem = ({ className, title, body, header }: { className?: string; title?: string | React.ReactNode; body?: string | React.ReactNode; header?: React.ReactNode }) => {
  return (
    <div className={cn("row-span-1 rounded-xl group/bento transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4", className)}>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <h2 className="font-medium text-xl text-neutral-600 mb-2 mt-2">{title}</h2>
        <p className="font-light text-neutral-600">{body}</p>
      </div>
    </div>
  );
};
