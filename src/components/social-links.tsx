import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  SpotifyIcon,
  SubstackIcon,
} from "@/components/icons";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { key: "linkedin", href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { key: "github", href: site.socials.github, label: "GitHub", Icon: GithubIcon },
  { key: "substack", href: site.socials.substack, label: "Substack", Icon: SubstackIcon },
  { key: "spotify", href: site.socials.spotify, label: "Spotify", Icon: SpotifyIcon },
  { key: "email", href: site.email ? `mailto:${site.email}` : "", label: "Email", Icon: Mail },
].filter((l) => l.href);

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map(({ key, href, label, Icon }) => (
        <a
          key={key}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-muted ring-1 ring-border transition-all hover:-translate-y-0.5 hover:text-fg hover:ring-accent/60"
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
