# Keyword map & information architecture

No keyword-research tool was available while building this site, so **no search
volumes, difficulty scores or traffic estimates are given**. The mapping below
is based on search intent only. Validate it with real data (Google Search
Console after launch, or a keyword tool) and adjust.

## Primary intent

**"letras diferentes"** — transactional/tool intent. Users want to type text
and immediately copy it in other styles, very often for a game nick (Free Fire)
or an Instagram bio. They expect the tool above the fold, not an article.

## Keyword → page map

| Page | Primary target | Secondary / long-tail | Distinct intent |
|---|---|---|---|
| `/` | letras diferentes | letras diferentes para copiar, gerador de letras, fontes para copiar e colar, letras estilosas (shared) | The full tool, every style |
| `/letras-bonitas` | letras bonitas | letras estilosas, letras bonitas para bio | Curated *decorated* combos (frames, hearts, stars) |
| `/letras-cursivas` | letras cursivas | letra cursiva para copiar, letra manuscrita | Script/italic styles only |
| `/letras-goticas` | letras góticas | letra medieval, fraktur, letra gótica para tatuagem | Fraktur styles |
| `/letras-pequenas` | letras pequenas | letras pequenas para nick, versalete, letras sobrescritas | Small caps / superscript / subscript |
| `/letras-para-instagram` | letras para Instagram | como colocar letras diferentes no Instagram, letras para bio | Platform how-to + rules |
| `/letras-para-free-fire` | letras para Free Fire | nick para Free Fire, letras diferentes para nick, como mudar o nick no Free Fire | Game nick how-to + symbols |
| `/letras-riscadas` | letras riscadas | texto riscado, letra sublinhada, como riscar texto no WhatsApp | Combining-mark styles |
| `/simbolos` | símbolos para copiar | símbolos para nick, ꧁꧂ para copiar, símbolos para bio | Symbol picker (not letters) |
| `/perguntas-frequentes` | — | o que são letras diferentes, por que aparece quadradinho | Support questions |

## Cannibalization decisions

- **`/nick-para-free-fire` was merged into `/letras-para-free-fire`.** Both
  queries want the same thing (a styled nick + how to change it in the game);
  two pages would compete. `/nick-para-free-fire` returns 404. If you later
  have distinct content for it (e.g. a big curated list of ready-made nicks),
  create it then, or add a 301 redirect in `next.config.ts`.
- **"letras diferentes" vs "letras bonitas"**: the homepage is the complete tool;
  `/letras-bonitas` only shows decorated combinations and is written around
  using them in bios/messages. Do not add the full style list there.
- **"letras diferentes para nick"** is assigned to `/letras-para-free-fire`
  (the dominant nick use case in Brazil) rather than a separate page.

## Internal linking

- Home → every style page (cards near the end of the page + footer + header menu).
- Each style page → home ("gerador completo") + 3 related style pages.
- Breadcrumbs on every page below home.
- Anchor text varies ("letras para Instagram", "nicks para Free Fire", "gerador
  completo de letras diferentes").

## Common questions covered

- Como colocar letras diferentes no Instagram → `/letras-para-instagram`
- Como mudar o nick no Free Fire com letras diferentes → `/letras-para-free-fire`
- Por que aparecem quadradinhos → home FAQ + `/perguntas-frequentes`
- As letras funcionam com acento? → home FAQ
- Como riscar texto no WhatsApp → `/letras-riscadas`
