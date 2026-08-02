import { NextResponse } from "next/server";

export function middleware() {
  // Temporarily keep the old Writing, Craft, and resume content off the site.
  // Remove this middleware when those sections are ready to be restored.
  return new NextResponse(null, { status: 404 });
}

export const config = {
  matcher: ["/writing/:path*", "/craft/:path*", "/resume.pdf"],
};
