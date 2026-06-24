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
    <div className="border-b border-border">
      <Container className="pt-20 pb-12 sm:pt-28">
        <Reveal>
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display mt-4 text-[clamp(3rem,10vw,7rem)] uppercase leading-[0.82] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </div>
  );
}
