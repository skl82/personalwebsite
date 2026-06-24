import { site } from "@/lib/site";
import { Container } from "@/components/container";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-border/60 py-12">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-base font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            © {year} · Built with Next.js &amp; too much coffee.
          </p>
        </div>
        <SocialLinks />
      </Container>
    </footer>
  );
}
