// Dependencies
import RSS from "rss";

// Dependencies
import { allBlogs } from "contentlayer/generated";

// Lib
import { sortBlogPostByDate } from "@/lib/utils";

export async function GET() {
  const feed = new RSS({
    title: "Osayi Eseosa",
    description:
      "Osayi Eseosa is a fullstack javascript web developer with high expertise in his field with a curiosity piqued by tech",
    feed_url: `${process.env.NEXT_PUBLIC_SITE_URL}/rss.xml`,
    site_url: process.env.NEXT_PUBLIC_SITE_URL as string,
    copyright: `© 2024 - ${new Date().getFullYear()} Osayi Eseosa. All rights reserved.`,
    language: "en",
    pubDate: new Date(),
  });

  allBlogs.sort(sortBlogPostByDate).map((post) =>
    feed.item({
      title: post.title,
      description: post.description,
      url: new URL(post.slug ?? "/", process.env.NEXT_PUBLIC_SITE_URL).href,
      date: post.publishedOn,
    }),
  );

  return new Response(feed.xml(), {
    headers: { "Content-Type": "application/rss+xml; charset=UTF-8" },
  });
}