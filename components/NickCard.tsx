import { CopyButton } from "@/components/CopyButton";
import { FF_LIMIT, nickLength } from "@/lib/nick";

/** One ready-made nick with a copy button and its length; warns above the limit (Free Fire by default). */
export function NickCard({ nick, limit = FF_LIMIT }: { nick: string; limit?: number }) {
  const len = nickLength(nick);
  const over = len > limit;
  return (
    <li className="flex items-center gap-3 overflow-hidden rounded-xl border border-line bg-surface px-4 py-2.5">
      <div className="min-w-0 flex-1">
        {/* ꧁ ꧂ are very tall in some fonts: those nicks get extra room. */}
        <p
          className={`font-[family-name:var(--font-symbols)] text-xl [overflow-wrap:anywhere] ${
            /[꧁꧂]/u.test(nick) ? "pb-3 pt-2 leading-[2.6]" : "py-1 leading-[2]"
          }`}
        >
          {nick}
        </p>
        <p className={`text-xs ${over ? "font-medium text-amber-700 dark:text-amber-400" : "text-ink-soft"}`}>
          {len} caracteres{over ? ": pode passar do limite" : ""}
        </p>
      </div>
      <CopyButton text={nick} label={`Copiar nick ${nick}`} />
    </li>
  );
}
