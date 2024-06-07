"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { BottomGradient, LabelInputContainer } from "@/app/(auth)/login/page";
import { cn } from "@/utils/cn";

export default function LoginInput() {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="user@email.com" type="email" value={email} onChange={handleEmailChange} required />
      </LabelInputContainer>

      <LoginLink authUrlParams={{ connection_id: process.env.NEXT_PUBLIC_KINDE_AUTH_PASSWORDLESS || "", login_hint: email }}>
        <div className="flex items-center justify-center bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
          Sign in &rarr;
          <BottomGradient />
        </div>
      </LoginLink>
    </div>
  );
}
