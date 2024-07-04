import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

/**
 * This is a Next.js middleware function that handles authentication for the '/new-blog' and '/blogs/:id/edit' route.
 * It uses the `withAuth` function from the `@kinde-oss/kinde-auth-nextjs/middleware` package.
 *
 * @param req - The NextRequest object representing the incoming request.
 * @returns The result of the `withAuth` function, which may redirect the user to the login page if not authenticated.
 *
 **/
export default function middleware(req: NextRequest) {
  return withAuth(req, { redirectTo: "/login" });
}

export const config = {
  matcher: ["/new-blog", "/blogs/:id/edit"],
};
