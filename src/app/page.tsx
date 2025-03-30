import BlogLists from "@/components/blog/blog-lists";
import Intro from "@/components/homepage/intro";
import MovingText from "@/components/homepage/moving-text";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-[30%] lg:mt-[20%] xl:mt-[15%] 3xl:mt-[8%] flex-1 w-full z-10">
      <Intro />
      <MovingText />
      <BlogLists />
    </main>
  );
}
