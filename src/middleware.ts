import createMiddleware from "next-intl/middleware";

import { localePrefix, locales } from "./navigation";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

// export default createMiddleware({
//   locales: ["en", "ru"],
//   defaultLocale: "en",
//   localePrefix: "always",
// });

export const config = {
  matcher: ["/", "/(ru|en)/:path*"],
};
