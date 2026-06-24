import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PostCard, PostList } from "@/components/post-card";
import { RecCard } from "@/components/rec-card";
import { getAllPosts } from "@/lib/posts";
import { recommendations } from "@/lib/music";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const recs = recommendations.slice(0, 3);

  return (
    <>
      <Hero />

      {posts.length > 0 && (
        <Container className="py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              index="01"
              title="Recent writing"
              href="/writing"
              linkLabel="All posts"
            />
          </Reveal>
          <Reveal>
            <PostList>
              {posts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </PostList>
          </Reveal>
        </Container>
      )}

      <Container className="py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            index="02"
            title="What I'm into"
            href="/music"
            linkLabel="All music"
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
