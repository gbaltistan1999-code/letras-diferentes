import Link from "next/link";
import { AuthorAvatar } from "@/components/AuthorAvatar";
import { authorPath, type Author } from "@/data/authors";

/** "About the author" card shown at the end of blog posts. */
export function AuthorBox({ author }: { author: Author }) {
  return (
    <aside aria-label="Quem escreve" className="mt-10 flex gap-4 rounded-2xl border border-line bg-surface p-5">
      <AuthorAvatar author={author} size={56} />
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Quem escreve</p>
        <p className="mt-1 font-semibold">
          <Link href={authorPath(author)} className="hover:text-accent hover:underline">
            {author.name}
          </Link>{" "}
          <span className="font-normal text-ink-soft">· {author.role}</span>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{author.bio}</p>
        <Link href={authorPath(author)} className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">
          Ver todos os artigos de {author.name}
        </Link>
      </div>
    </aside>
  );
}
