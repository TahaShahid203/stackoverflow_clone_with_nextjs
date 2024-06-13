import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)","/api/webhook","/question/:id", "/tags", "/tags/:id", "/profile/:id", "/community", "/jobs"],
  ignoredRoutes: ['/api/webhook', '/api/chatgpt']
};