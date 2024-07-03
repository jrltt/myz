import { NextRequest } from "next/server";
import { getSession, updateSession } from "@/lib/auth.service";

export async function middleware(request: NextRequest) {
  const currentUser = await getSession();
  console.log(currentUser, request.nextUrl.pathname);

  if (
    currentUser &&
    !request.nextUrl.pathname.startsWith("/dashboard") &&
    !request.nextUrl.pathname.startsWith("/settings")
  ) {
    return Response.redirect(new URL("/dashboard", request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }

  return await updateSession(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.svg$).*)"],
};
