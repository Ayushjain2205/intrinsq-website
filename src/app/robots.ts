import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/studio/*"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
export const revalidate = 86400; // Cache robots.txt for 1 day
