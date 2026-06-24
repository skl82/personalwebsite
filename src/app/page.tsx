import { MDXRemote } from "next-mdx-remote/rsc";
import { Shell, type Tab } from "@/components/shell";
import { MusicPane } from "@/components/panes/music-pane";
import { WritingPane } from "@/components/panes/writing-pane";
import { ProjectsPane } from "@/components/panes/projects-pane";
import { ResumePane } from "@/components/panes/resume-pane";
import { getPost, getPostSlugs, type Post, type PostMeta } from "@/lib/posts";

export default function Home() {
  // Load posts (newest first) and pre-render their MDX bodies on the server,
  // so the client shell can swap them in instantly without a route change.
  const full: Post[] = getPostSlugs()
    .map((slug) => getPost(slug))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const posts: PostMeta[] = full.map(({ content: _content, ...meta }) => meta);
  const bodies: Record<string, React.ReactNode> = Object.fromEntries(
    full.map((post) => [post.slug, <MDXRemote key={post.slug} source={post.content} />]),
  );

  const tabs: Tab[] = [
    { id: "music", label: "music", content: <MusicPane /> },
    { id: "writing", label: "writing", content: <WritingPane posts={posts} bodies={bodies} /> },
    { id: "projects", label: "projects", content: <ProjectsPane /> },
    { id: "resume", label: "resume", content: <ResumePane /> },
  ];

  return <Shell tabs={tabs} />;
}
