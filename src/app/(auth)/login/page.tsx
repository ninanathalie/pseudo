import React from "react";
import { cn } from "@/utils/cn";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import LoginInput from "@/components/login-input";

export default function LoginForm() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-semibold text-xl text-neutral-800 dark:text-neutral-200">Login</h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">Only authorized user is allowed to login</p>

        <form className="my-8">
          <LoginInput />

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <LoginLink authUrlParams={{ connection_id: process.env.NEXT_PUBLIC_KINDE_AUTH_GITHUB_CONNECTION_ID || "" }}>
              <div className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">Login with GitHub</span>
                <BottomGradient />
              </div>
            </LoginLink>
            <LoginLink authUrlParams={{ connection_id: process.env.NEXT_PUBLIC_KINDE_AUTH_GOOGLE_CONNECTION_ID || "" }}>
              <div className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">Login with Google</span>
                <BottomGradient />
              </div>
            </LoginLink>
          </div>
        </form>
      </div>
    </section>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
