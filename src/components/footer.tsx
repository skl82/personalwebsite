import { site } from "@/lib/site";
import { Container } from "@/components/container";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl uppercase leading-none tracking-tight">
            {site.name}
          </p>
          <p className="label mt-2 text-dim">
            © {year} · Built with Next.js
          </p>
        </div>
        <SocialLinks />
      </Container>
    </footer>
  );
}
