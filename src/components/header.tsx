import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import ThemeSwitch from "@/components/ui/theme-switch";
import { Home, NotebookPen, FilePlus2, LogIn, LogOut } from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface HeaderProps {
  isAuthenticated?: boolean;
}

// This function runs on the server side and passes data to the component
export async function getServerSideProps() {
  const session = await getKindeServerSession();
  const isAuthenticated = await session.isAuthenticated();

  return {
    props: {
      isAuthenticated,
    },
  };
}

export default function Header({ isAuthenticated }: HeaderProps) {
  // Filter navItems based on authentication status
  const filteredNavItems = navItems.filter((navItem) => {
    const displayNav = navItem.name === "LogOut" ? isAuthenticated : navItem.name === "LogIn" ? !isAuthenticated : !navItem.requiresAuth || (navItem.requiresAuth && isAuthenticated);
    return displayNav;
  });

  if (filteredNavItems.length === 0) return null;

  return (
    <div className="relative w-full">
      <FloatingNav navItems={filteredNavItems} />
    </div>
  );
}

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-5 w-5" />,
    requiresAuth: false,
  },
  {
    name: "Blogs",
    link: "/blogs",
    icon: <NotebookPen className="h-5 w-5" />,
    requiresAuth: false,
  },
  {
    name: "Write",
    link: "/new-blog",
    icon: <FilePlus2 className="h-5 w-5" />,
    requiresAuth: true,
  },
  {
    name: "LogIn",
    link: "/login",
    icon: <LogIn className="h-5 w-5" />,
    requiresAuth: false,
  },
  {
    name: "LogOut",
    requiresAuth: true,
    useComponent: true,
    component: (
      <LogoutLink>
        <LogOut className="h-5 w-5" />
      </LogoutLink>
    ),
  },
  {
    name: "Light",
    requiresAuth: false,
    useComponent: true,
    useDiv: true,
    component: <ThemeSwitch />,
  },
];
