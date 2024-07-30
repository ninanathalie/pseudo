import Intro from "@/components/homepage/intro";
import RecentBlogs from "@/components/homepage/recent-blogs";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-[30%] lg:mt-[20%] xl:mt-[15%] 3xl:mt-[8%] flex-1 w-full z-10">
      <Intro />
      <RecentBlogs />
    </main>
  );
}
