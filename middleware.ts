import { getToken } from "next-auth/jwt";
import withAuth, { NextRequestWithAuth } from "next-auth/middleware";
import { NextFetchEvent, NextResponse } from "next/server";

const authMiddleware = async (
  req: NextRequestWithAuth,
  event: NextFetchEvent
) => {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if (req.nextUrl.pathname === "/" && isAuthenticated) {
    return NextResponse.redirect(new URL("/app", req.url));
  }

  const authMiddleware = withAuth({
    pages: {
      signIn: `/`,
    },
  });

  return authMiddleware(req, event);
};

export default authMiddleware;

export const config = {
  matcher: ["/app/:path*", "/"],
};
