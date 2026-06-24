import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SpotifyEmbed } from "@/components/spotify-embed";
import { RecCard } from "@/components/rec-card";
import { releases, recommendations } from "@/lib/music";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Music",
  description: "Releases I've made and the music I can't stop playing.",
};

export default function MusicPage() {
  return (
    <>
      <PageHeader
        eyebrow="Music"
        title="Sounds"
        description="The stuff I make, and the stuff on repeat. Half studio, half record collection."
      />

      {/* My releases */}
      <Container className="pb-8">
        <Reveal>
          <SectionHeading
            eyebrow="My releases"
            title="Made by me"
            href={site.socials.spotify || undefined}
            linkLabel="Spotify profile"
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {releases.map((release, i) => (
            <Reveal key={release.title} delay={i * 0.05}>
              <div className="card rounded-2xl p-4">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold">
                    {release.title}
                  </h3>
                  {release.year && (
                    <span className="font-mono text-xs text-muted">
                      {release.year}
                    </span>
                  )}
                </div>
                <SpotifyEmbed url={release.spotifyUrl} title={release.title} />
                {release.note && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {release.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Recommendations */}
      <Container className="py-12 sm:py-16">
        <Reveal>
          <SectionHeading eyebrow="Recommendations" title="On heavy rotation" />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((rec, i) => (
            <Reveal key={rec.title} className="h-full" delay={(i % 3) * 0.05}>
              <RecCard rec={rec} />
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
