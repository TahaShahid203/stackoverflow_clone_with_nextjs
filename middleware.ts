import { clerkMiddleware } from "@clerk/nextjs/server";

// Define the middleware function
const middleware = clerkMiddleware({
  // Your Clerk configuration options
});

// Define a function to conditionally apply the middleware
function applyClerkMiddleware(req, res, next) {
  // List of API endpoints that should not be protected
  const unprotectedRoutes = [
    "/api/webhooks",
    // Add more endpoints here as needed
  ];

  // Check if the current request URL matches any of the unprotected routes
  if (unprotectedRoutes.includes(req.url)) {
    // Skip authentication for unprotected routes
    return next();
  }

  // Apply Clerk middleware for all other routes
  return middleware(req, res, next);
}

// Export the conditional middleware
export default applyClerkMiddleware;

export const config = {
  // Define the route matcher
  // Include only routes that should be protected by Clerk middleware
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};
