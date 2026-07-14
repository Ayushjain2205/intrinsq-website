/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { mockPosts } from "@/sanity/mockData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  let posts: any[] = mockPosts;

  // Only query Sanity if it is properly configured
  if (projectId && projectId !== "your-project-id") {
    try {
      const query = `*[_type == "post"] { 
        slug, 
        publishedAt 
      }`;
      const fetchedPosts = await client.fetch(query);
      if (fetchedPosts && fetchedPosts.length > 0) {
        posts = fetchedPosts;
      }
    } catch (error) {
      console.error(
        "Sitemap generation: failed to fetch posts from Sanity, using mock fallback:",
        error,
      );
    }
  }

  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.64,
  }));

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ];

  return [...routes, ...blogUrls];
}
export const revalidate = 3600; // Cache the sitemap for 1 hour
