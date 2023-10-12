import withAuth from "next-auth/middleware";

const authMiddleware = withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ token }) => {
      return token !== null;
    },
  },
});

export default authMiddleware;

export const config = {
  matcher: "/app/:path*",
};
