// The `withAuth` middleware is re-exported from next-auth/middleware.
// It will automatically redirect users to the sign-in page if they are not authenticated.
export { default } from "next-auth/middleware";

// The `config` object specifies which routes the middleware should be applied to.
export const config = {
  // The `matcher` property uses a regular expression-like syntax
  // to match paths. This will protect the /cart route.
  matcher: ["/cart", "/profile"],
};
