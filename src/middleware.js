import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublic = path === "/login" || path === "/signup" || path === "/";
  const token = request.cookies.get("token")?.value;

  if ((path === "/login" || path === "/signup") && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/login", "/signup", "/verifyEmail", "/mathematiquesPhysiquesChimie","/webDesign","/electronique","/programmation","/ia"],
};
