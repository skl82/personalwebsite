import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { PostCard, PostList } from "@/components/post-card";
import { SubstackIcon } from "@/components/icons";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays, notes, and half-finished thoughts.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="// Writing"
        title="Words"
        description="Essays and notes. Some of it starts on Substack — it all ends up here."
      />

      <Container className="py-16 sm:py-20">
        {/* Substack callout */}
        <Reveal>
          <a
            href={site.socials.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-12 flex items-center justify-between gap-4 border border-border bg-panel p-5 transition-colors hover:border-accent"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-accent text-accent">
                <SubstackIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-2xl uppercase leading-none tracking-tight">
                  Subscribe on Substack
                </p>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
                  New essays · straight to your inbox
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-dim transition-colors group-hover:text-accent" />
          </a>
        </Reveal>

        {posts.length === 0 ? (
          <p className="font-mono text-sm text-muted">
            No posts yet — drop an .mdx file in content/writing.
          </p>
        ) : (
          <Reveal>
            <PostList>
              {posts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </PostList>
          </Reveal>
        )}
      </Container>
    </>
  );
}
