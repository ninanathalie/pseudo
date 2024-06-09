import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  return withAuth(req, { redirectTo: "/login" });
}

export const config = {
  matcher: ["/new-blog"],
};
