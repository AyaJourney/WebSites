import { NextResponse } from "next/server";
const blockedPrefixes = [
    "/category",
    "/services_group",
    "/portfolio",
    "/team",
    "/layouts",
    "/blog-portfolio",
    "/shop",
    "/tag",
    "/author",
    "/service-plus",
    "/newsletter-popups",
    "/my-account",
    "/cart",
    "/checkout",
    "/wishlist-page",
    "/category/news/",
  ];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (blockedPrefixes.some(prefix => pathname.startsWith(prefix))) {
    const url = request.nextUrl.clone();
    url.pathname = "/410";
    return NextResponse.rewrite(url, { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
