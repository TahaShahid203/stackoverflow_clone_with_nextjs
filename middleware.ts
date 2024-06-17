import { authMiddleware } from "@clerk/nextjs/server";

 
export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhooks',
    '/api/webhooks/test',
    '/question/:id',
    '/tags',
    '/tags/:id',
    '/profile/:id',
    '/community',
    '/jobs'
  ],
  ignoredRoutes: [
    '/api/webhooks', '/api/chatgpt'
  ]
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
 