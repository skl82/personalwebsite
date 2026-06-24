import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { PostCard } from "@/components/post-card";
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
        eyebrow="Writing"
        title="Words"
        description="Essays and notes. Some of it starts on Substack — it all ends up here."
      />

      <Container className="pb-12">
        {/* Substack callout */}
        <Reveal>
          <a
            href={site.socials.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="card lift mb-10 flex items-center justify-between gap-4 rounded-2xl p-5"
          >
            <div className="flex items-center gap-4">
              <span className="gradient-bg flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
                <SubstackIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display font-semibold">
                  Subscribe on Substack
                </p>
                <p className="text-sm text-muted">
                  New essays, straight to your inbox. No spam, just words.
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted" />
          </a>
        </Reveal>

        {posts.length === 0 ? (
          <p className="text-muted">
            No posts yet — drop an{" "}
            <code className="rounded bg-surface px-1 py-0.5 font-mono text-sm">
              .mdx
            </code>{" "}
            file in <code className="font-mono text-sm">content/writing</code>.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} className="h-full" delay={(i % 2) * 0.05}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
