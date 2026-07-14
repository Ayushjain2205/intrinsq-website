/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { mockPosts } from "@/sanity/mockData";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { ArrowLeft, Calendar, User, Info, Clock } from "lucide-react";

import type { Metadata } from "next";

// For ISR/SSR
export const revalidate = 60;

// Tell Next.js what static paths to pre-generate for the fallback mock routes
export async function generateStaticParams() {
  return mockPosts.map((p) => ({
    slug: p.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | IntrinsQ Insights",
    };
  }

  // Handle dynamic image
  let ogImageUrl =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop";
  if (post.mainImage?.assetUrl) {
    ogImageUrl = post.mainImage.assetUrl;
  } else if (post.mainImage) {
    try {
      ogImageUrl = urlFor(post.mainImage).width(1200).height(630).url();
    } catch (e) {
      // ignore
    }
  }

  return {
    title: `${post.title} | IntrinsQ Insights`,
    description:
      post.excerpt || "Strategic advisory and compounding financial insights from IntrinsQ.",
    openGraph: {
      title: post.title,
      description:
        post.excerpt || "Strategic advisory and compounding financial insights from IntrinsQ.",
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
    },
  };
}

async function getPost(slug: string): Promise<{ post: any; isFallback: boolean }> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  // Use fallback if it's the placeholder project
  if (!projectId || projectId === "your-project-id") {
    const mock = mockPosts.find((p) => p.slug.current === slug);
    return { post: mock || null, isFallback: true };
  }

  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      author->{
        name,
        image,
        bio
      },
      categories[]->{
        title
      },
      body
    }`;
    const post = await client.fetch(query, { slug });
    if (!post) {
      // Try searching local mock data before giving up
      const mock = mockPosts.find((p) => p.slug.current === slug);
      if (mock) {
        return { post: mock, isFallback: true };
      }
      return { post: null, isFallback: false };
    }
    return { post, isFallback: false };
  } catch (error) {
    console.error(`Failed to fetch post "${slug}", falling back to mock data:`, error);
    const mock = mockPosts.find((p) => p.slug.current === slug);
    return { post: mock || null, isFallback: true };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { post, isFallback } = await getPost(slug);

  if (!post) {
    notFound();
  }

  // Helper to render image source
  const getPostImageSrc = (post: any) => {
    if (post.mainImage?.assetUrl) {
      return post.mainImage.assetUrl;
    }
    if (post.mainImage) {
      try {
        return urlFor(post.mainImage).width(1600).height(900).url();
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
        return urlFor(post.author.image).width(1200).height(1200).url();
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

  // Portable Text styling mapping
  const portableTextComponents: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 font-sans">
          {children}
        </p>
      ),
      h1: ({ children }) => (
        <h1 className="text-3xl md:text-5xl font-serif text-navy dark:text-cream mt-12 mb-4 leading-tight">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl md:text-4.5xl font-serif text-navy dark:text-cream mt-10 mb-4 leading-tight">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl md:text-3.5xl font-serif text-navy dark:text-cream mt-8 mb-3 leading-snug">
          {children}
        </h3>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-[3px] border-gold pl-6 py-1 my-8 text-lg md:text-xl font-serif italic text-muted-foreground bg-gold/5 pr-4 rounded-r">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80 font-sans text-base md:text-lg">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-6 mb-6 space-y-2 text-foreground/80 font-sans text-base md:text-lg">
          {children}
        </ol>
      ),
    },
    types: {
      image: ({ value }) => {
        let imageSrc = "";
        try {
          imageSrc = urlFor(value).width(1200).height(800).url();
        } catch (e) {
          imageSrc =
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop";
        }
        return (
          <div className="relative aspect-[16/10] my-10 overflow-hidden rounded-xl border border-border/40">
            <Image src={imageSrc} alt={value.alt || "Blog image"} fill className="object-cover" />
            {value.alt && (
              <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded">
                {value.alt}
              </span>
            )}
          </div>
        );
      },
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || post.title,
    image: getPostImageSrc(post),
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name || "IntrinsQ Advisor",
    },
    publisher: {
      "@type": "Organization",
      name: "IntrinsQ",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/logo.png`,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      {/* Spacer for navigation */}
      <div className="h-20" />

      {/* Main Container */}
      <main className="flex-grow mx-auto max-w-[900px] px-6 md:px-10 py-12 md:py-20 w-full">
        {/* Warning banner for preview mode */}
        {isFallback && (
          <div className="mb-12 p-4 bg-gold/10 border border-gold/30 rounded-lg flex items-start gap-3 fade-up">
            <Info className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <div className="text-sm">
              <span className="font-semibold text-gold">Preview Mode:</span> Displaying local mock
              content. If this article is from your Sanity studio database, verify that your client
              environment keys are set up.
            </div>
          </div>
        )}

        {/* Back Link */}
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm text-gold hover:text-gold/85 mb-8 transition-colors fade-up"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="space-y-8">
          <div className="space-y-4 fade-up">
            <div className="flex flex-wrap gap-2">
              {post.categories?.map((cat: any) => (
                <span
                  key={cat.title}
                  className="text-xs uppercase bg-navy/95 dark:bg-cream text-cream dark:text-navy px-3 py-1 font-semibold tracking-wider"
                >
                  {cat.title}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-serif text-navy dark:text-cream leading-tight">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-serif italic leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Author / Date Info */}
          <div
            className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-border/40 fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-full overflow-hidden border border-gold/30">
                <Image
                  src={getAuthorImageSrc(post)}
                  alt={post.author?.name || "Author"}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{post.author?.name}</div>
                <div className="text-xs text-muted-foreground">Advisor, IntrinsQ</div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-gold" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gold" />5 min read
              </span>
            </div>
          </div>

          {/* Cover Image */}
          <div
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cream-deep/30 border border-border/60 fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Image
              src={getPostImageSrc(post)}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Portable Text Body */}
          <div className="pt-8 markdown-content fade-up" style={{ animationDelay: "0.15s" }}>
            <PortableText value={post.body} components={portableTextComponents} />
          </div>

          {/* Bio section */}
          {post.author && (
            <div className="mt-16 p-6 md:p-8 bg-card/35 backdrop-blur-sm border border-border/60 rounded-xl flex flex-col md:flex-row items-center md:items-start gap-6 fade-up">
              <div className="relative h-16 w-16 rounded-full overflow-hidden shrink-0 border border-gold/30">
                <Image
                  src={getAuthorImageSrc(post)}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-lg font-serif font-bold text-navy dark:text-cream">
                  About {post.author.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.author.bio ? (
                    <PortableText
                      value={post.author.bio}
                      components={{
                        block: {
                          normal: ({ children }) => <span>{children}</span>,
                        },
                      }}
                    />
                  ) : (
                    "A trusted advisor at IntrinsQ, specializing in guiding founders and business owners through complex structural, fiscal, and operational decisions."
                  )}
                </p>
              </div>
            </div>
          )}
        </article>

        {/* Bottom CTA */}
        <div className="mt-16 text-center border-t border-border/40 pt-12 fade-up">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 bg-navy text-cream dark:bg-cream dark:text-navy px-6 py-3.5 text-sm font-semibold hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Articles
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
