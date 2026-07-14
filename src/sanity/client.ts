import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2024-03-11";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // set to false for real-time draft previews / server-side rendering without cache
});
