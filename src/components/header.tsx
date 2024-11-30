import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import ThemeSwitch from "@/components/ui/theme-switch";
import { Home, NotebookPen, FilePlus2, LogIn, LogOut } from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Header() {
  const session = await getKindeServerSession();
  const isAuthenticated = await session.isAuthenticated();

  const filteredNavItems = navItems.filter((navItem) => {
    const displayNav = navItem.title === "LogOut" ? isAuthenticated : navItem.title === "LogIn" ? !isAuthenticated : !navItem.requiresAuth || (navItem.requiresAuth && isAuthenticated);
    return displayNav;
  });

  if (filteredNavItems.length === 0) return null;

  return (
    <div className="relative w-full">
      <div className="flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-transparent rounded-2xl z-40 ">
        <FloatingNav items={filteredNavItems} />
      </div>
    </div>
  );
}

const navItems = [
  {
    title: "Home",
    requiresAuth: false,
    href: "/",
    icon: <Home className="w-4 h-4 md:w-full md:h-full" />,
  },
  {
    title: "Blogs",
    requiresAuth: false,
    href: "/blogs",
    icon: <NotebookPen className="w-4 h-4 md:w-full md:h-full" />,
  },
  {
    title: "Write",
    requiresAuth: true,
    href: "/new-blog",
    icon: <FilePlus2 className="w-4 h-4 md:w-full md:h-full" />,
  },
  {
    title: "LogIn",
    requiresAuth: false,
    href: "/login",
    icon: <LogIn className="w-4 h-4 md:w-full md:h-full" />,
  },
  {
    title: "LogOut",
    requiresAuth: true,
    component: (
      <LogoutLink className="after:absolute after:inset-0">
        <LogOut className="w-4 h-4 md:w-full md:h-full" />
      </LogoutLink>
    ),
  },
  {
    title: "Light",
    requiresAuth: false,
    component: <ThemeSwitch />,
  },
];
