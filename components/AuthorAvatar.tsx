import Image from "next/image";
import type { Author } from "@/data/authors";

/** Author photo, or their initial in a brand-colored circle when there's no photo. */
export function AuthorAvatar({ author, size = 56 }: { author: Author; size?: number }) {
  if (author.image) {
    return (
      <Image
        src={author.image}
        alt={author.name}
        width={size}
        height={size}
        className="shrink-0 rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center rounded-full bg-accent font-bold text-on-accent"
      style={{ width: size, height: size, fontSize: size * 0.42 }}
    >
      {author.name.charAt(0).toUpperCase()}
    </span>
  );
}
