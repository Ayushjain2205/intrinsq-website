import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

// Get a pre-configured url-builder from your Sanity client
const builder = createImageUrlBuilder(client);

// Then we like to make a handy function that you can call with your image asset reference and get an url
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
