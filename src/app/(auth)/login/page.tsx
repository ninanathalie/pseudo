import React from "react";
import LoginInput from "@/components/login-input";
import { BlurFade } from "@/components/ui/blur-fade";

export default function LoginForm() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <BlurFade delay={0.25} inView>
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-semibold text-xl text-neutral-800 dark:text-neutral-200">Login</h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">Only authorized user is allowed to login</p>

          <form className="my-8">
            <LoginInput />
          </form>
        </div>
      </BlurFade>
    </section>
  );
}
