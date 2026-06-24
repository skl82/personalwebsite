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
    <div className={cn("flex items-center", className)}>
      {links.map(({ key, href, label, Icon }, i) => (
        <a
          key={key}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "flex h-10 w-10 items-center justify-center border border-border text-muted transition-colors hover:bg-panel hover:text-accent",
            i > 0 && "-ml-px", // collapse borders into a single rule
          )}
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
