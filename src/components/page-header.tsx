import { Reveal } from "@/components/reveal";
import { Container } from "@/components/container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Container className="pt-16 pb-10 sm:pt-24">
      <Reveal>
        {eyebrow && (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
          <span className="gradient-text">{title}</span>
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
      </Reveal>
    </Container>
  );
}
