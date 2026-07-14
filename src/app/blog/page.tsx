/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { mockPosts, MockPost } from "@/sanity/mockData";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Calendar, User, Info, FileText } from "lucide-react";

// Force dynamic because we might fallback to mock data or fetch live data dynamically
export const revalidate = 60;

async function getPosts(): Promise<{ posts: any[]; isFallback: boolean }> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  // If the project ID is the default placeholder or not set, skip fetching and use fallback
  if (!projectId || projectId === "your-project-id") {
    return { posts: mockPosts, isFallback: true };
  }

  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      author->{
        name,
        image
      },
      categories[]->{
        title
      }
    }`;
    const posts = await client.fetch(query);
    if (!posts || posts.length === 0) {
      return { posts: mockPosts, isFallback: true };
    }
    return { posts, isFallback: false };
  } catch (error) {
    console.error("Failed to fetch posts from Sanity, falling back to mock data:", error);
    return { posts: mockPosts, isFallback: true };
  }
}

export default async function BlogIndexPage() {
  const { posts, isFallback } = await getPosts();

  // Separate the featured (latest) post from the rest
  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

  // Helper to render image source
  const getPostImageSrc = (post: any) => {
    if (post.mainImage?.assetUrl) {
      return post.mainImage.assetUrl;
    }
    if (post.mainImage) {
      try {
        return urlFor(post.mainImage).width(1200).height(800).url();
      } catch (e) {
        return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop";
      }
    }
    return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop";
  };

  const getAuthorImageSrc = (post: any) => {
    if (post.author?.image && typeof post.author.image === "string") {
      return post.author.image;
    }
    if (post.author?.image) {
      try {
        return urlFor(post.author.image).width(80).height(80).url();
      } catch (e) {
        return "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop";
      }
    }
    return "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Nav />

      {/* Spacer for navigation */}
      <div className="h-20" />

      {/* Main Container */}
      <main className="flex-grow mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-20 w-full">
        {/* Warning banner for preview mode */}
        {isFallback && (
          <div className="mb-12 p-4 bg-gold/10 border border-gold/30 rounded-lg flex items-start gap-3 fade-up">
            <Info className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <div className="text-sm">
              <span className="font-semibold text-gold">Preview Mode:</span> Showing sample blog
              posts. To connect your actual Sanity project, create a project at{" "}
              <a
                href="https://sanity.io"
                target="_blank"
                className="underline font-medium hover:text-gold/80"
              >
                sanity.io
              </a>{" "}
              and configure the{" "}
              <code className="bg-background px-1.5 py-0.5 rounded border border-border/40 font-mono text-xs">
                NEXT_PUBLIC_SANITY_PROJECT_ID
              </code>{" "}
              in your{" "}
              <code className="bg-background px-1.5 py-0.5 rounded border border-border/40 font-mono text-xs">
                .env.local
              </code>
              .
            </div>
          </div>
        )}

        {/* Page Header */}
        <div className="space-y-4 mb-16 md:mb-24 max-w-3xl fade-up">
          <span className="eyebrow eyebrow-line">Blog</span>
          <h1 className="text-5xl md:text-7xl font-serif text-navy dark:text-cream leading-tight">
            Advice That Compounds.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-serif italic max-w-2xl">
            Strategic insights, guidance, and reflections on corporate structure, tax planning,
            payroll strategy, and fiscal compliance.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-20 md:mb-28 fade-up" style={{ animationDelay: "0.1s" }}>
            <Link href={`/blog/${featuredPost.slug.current}`} className="group block">
              <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center bg-card/45 backdrop-blur-sm border border-border/60 hover:border-gold/40 p-6 md:p-8 rounded-xl transition-all duration-500 hover:shadow-xl hover:shadow-gold/5">
                {/* Main image */}
                <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-lg bg-cream-deep/30">
                  <Image
                    src={getPostImageSrc(featuredPost)}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
                    priority
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {featuredPost.categories?.map((cat: any) => (
                      <span
                        key={cat.title}
                        className="text-xs uppercase bg-navy/90 dark:bg-cream/95 text-cream dark:text-navy px-3 py-1 font-medium tracking-wider"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(featuredPost.publishedAt)}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif text-navy dark:text-cream leading-tight group-hover:text-gold transition-colors duration-300">
                    {featuredPost.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="relative h-9 w-9 rounded-full overflow-hidden border border-gold/30">
                        <Image
                          src={getAuthorImageSrc(featuredPost)}
                          alt={featuredPost.author?.name || "Author"}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground/80">
                        {featuredPost.author?.name}
                      </span>
                    </div>

                    {/* Read More */}
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold group-hover:translate-x-1.5 transition-transform duration-300">
                      Read Post <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Blog Post Grid */}
        {gridPosts.length > 0 && (
          <section className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-serif text-2xl text-navy dark:text-cream">More Articles</h3>
              <div className="h-px bg-border/40 flex-grow" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post: any, idx: number) => (
                <article
                  key={post._id}
                  className="fade-up"
                  style={{ animationDelay: `${0.1 + (idx + 1) * 0.05}s` }}
                >
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="group flex flex-col h-full bg-card/30 border border-border/60 hover:border-gold/40 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/2"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-cream-deep/30">
                      <Image
                        src={getPostImageSrc(post)}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className="object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex gap-1.5">
                        {post.categories?.map((cat: any) => (
                          <span
                            key={cat.title}
                            className="text-[10px] uppercase bg-navy/90 dark:bg-cream/95 text-cream dark:text-navy px-2.5 py-0.5 font-semibold tracking-wider"
                          >
                            {cat.title}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow space-y-4">
                      <div className="text-[11px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.publishedAt)}
                      </div>

                      <h4 className="text-xl font-serif text-navy dark:text-cream leading-snug group-hover:text-gold transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h4>

                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                        {/* Author */}
                        <div className="flex items-center gap-2.5">
                          <div className="relative h-7 w-7 rounded-full overflow-hidden border border-gold/30">
                            <Image
                              src={getAuthorImageSrc(post)}
                              alt={post.author?.name || "Author"}
                              fill
                              sizes="28px"
                              className="object-cover"
                            />
                          </div>
                          <span className="text-xs font-medium text-foreground/80">
                            {post.author?.name}
                          </span>
                        </div>

                        {/* Read Link */}
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:translate-x-1 transition-transform duration-300">
                          Read <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
