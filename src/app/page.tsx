import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PostCard } from "@/components/post-card";
import { RecCard } from "@/components/rec-card";
import { getAllPosts } from "@/lib/posts";
import { recommendations } from "@/lib/music";

export default function Home() {
  const posts = getAllPosts().slice(0, 2);
  const recs = recommendations.slice(0, 3);

  return (
    <>
      <Hero />

      {posts.length > 0 && (
        <Container className="py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="From the notebook"
              title="Recent writing"
              href="/writing"
              linkLabel="All posts"
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} className="h-full" delay={i * 0.05}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      )}

      <Container className="py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="On repeat"
            title="What I'm into"
            href="/music"
            linkLabel="All music"
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recs.map((rec, i) => (
            <Reveal key={rec.title} className="h-full" delay={i * 0.05}>
              <RecCard rec={rec} />
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
