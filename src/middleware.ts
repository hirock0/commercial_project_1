import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;
  if (
    token &&
    (url.pathname.startsWith("/user/login") ||
      url.pathname.startsWith("/user/signup"))
  ) {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  if (
    token?.email !== "hirockdutta0@gmail.com" &&
    url.pathname.startsWith("/admin")
  ) {
    return NextResponse.rewrite(new URL("/", request.url));
  }
  if (
    !token &&
    (url.pathname.startsWith("/user/profile") ||
      url.pathname.startsWith("/user/informations"))
  ) {
    return NextResponse.rewrite(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/user/login/:path*",
    "/user/signup/:path*",
    "/admin/:path*",
    "/user/profile/:path*",
    "/user/informations/:path*",
  ],
};
