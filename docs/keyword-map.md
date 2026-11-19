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
| `/letras-bonitas` | letras bonitas | letras bonitas para bio | Curated *decorated* combos (frames, hearts, stars) |
| `/fontes-de-letras-estilosas` | fontes de letras estilosas | letras estilosas, fonte estilosa, letras estilosas para copiar, letras estilosas para Instagram, letras estilosas Free Fire, fontes estilosas | All styles, most stylish first, with per-platform examples |
| `/nome-personalizado` | nome personalizado | nome personalizado para copiar, nome personalizado com símbolos, nome personalizado para Free Fire, nome personalizado Instagram, nome diferente | Your own name styled: generator + 60 ready name ideas (not the blog: it has the tool) |
| `/letras-cursivas` | letras cursivas | letra cursiva para copiar, letra manuscrita | Script/italic styles only |
| `/letras-goticas` | letras góticas | letra medieval, fraktur, letra gótica para tatuagem | Fraktur styles |
| `/letras-pequenas` | letras pequenas | letras pequenas para nick, versalete, letras sobrescritas | Small caps / superscript / subscript |
| `/letras-para-instagram` | letras para Instagram | como colocar letras diferentes no Instagram, letras para bio | Platform how-to + rules |
| `/letras-para-whatsapp` | letras para WhatsApp | fontes para WhatsApp, como mudar a letra do WhatsApp, negrito no WhatsApp, letras diferentes WhatsApp, formatação WhatsApp | Two-tab converter: Unicode styles + native WhatsApp codes (*negrito*, _itálico_, ~tachado~, lists, quote) |
| `/letras-para-tiktok` | letras para TikTok | fontes para TikTok, letras diferentes TikTok, nome para TikTok, bio para TikTok, letras aesthetic TikTok | Converter with field limits (nome 30, bio 80, comentário 150, legenda 2.200), aesthetic presets and @ suggestions |
| `/letras-para-free-fire` | letras para Free Fire | nick para Free Fire, letras diferentes para nick, como mudar o nick no Free Fire | Game nick how-to + symbols |
| `/gerador-de-nick` | gerador de nick | gerador de nick ff, nick com símbolos, nick masculino, nick feminino, nick para clã | Nick generator by category (FF, masc, fem, clã, fofo) with clan tag + invisible separator. "nick para free fire" stays primary on /letras-para-free-fire |
| `/nome-invisivel` | nome invisível | espaço invisível, nome invisível free fire, nick invisível, letra invisível, mensagem em branco whatsapp | Copy the invisible character (U+3164) + insert/test tools; no styled letters |
| `/letras-para-tatuagem` | letras para tatuagem | fontes de letras para tatuagem, letras de tatuagem, tatuagem escrita, tipos de letras para tatuagem, letras para tatuagem masculina, lettering tattoo | Tattoo font picker with real-font preview on skin tone |
| `/letras-riscadas` | letras riscadas | texto riscado, letra sublinhada, como riscar texto no WhatsApp | Combining-mark styles |
| `/simbolos` | símbolos para copiar | símbolos para nick, ꧁꧂ para copiar, símbolos para bio | Symbol picker (not letters) |
| `/perguntas-frequentes` | — | o que são letras diferentes, por que aparece quadradinho | Support questions |

## Cannibalization decisions

- **`/nick-para-free-fire` was merged into `/letras-para-free-fire`.** Both
  queries want the same thing (a styled nick + how to change it in the game);
  two pages would compete. `/nick-para-free-fire` returns 404. If you later
  have distinct content for it (e.g. a big curated list of ready-made nicks),
  create it then, or add a 301 redirect in `next.config.ts`.
- **"letras estilosas" moved from `/letras-bonitas` to `/fontes-de-letras-estilosas`**:
  the bonitas page no longer uses "estilosas" in its title, H1 or description.
- **"letras diferentes" vs "letras bonitas"**: the homepage is the complete tool;
  `/letras-bonitas` only shows decorated combinations and is written around
  using them in bios/messages. Do not add the full style list there.
- **"letras para tatuagem" vs `/letras-goticas`**: the gothic page keeps one short
  tattoo-reference section and links to `/letras-para-tatuagem`, which owns the
  tattoo intent. Don't expand tattoo content on the gothic page.
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
- Como riscar texto no WhatsApp → `/letras-riscadas` (the native ~tachado~ code is also in `/letras-para-whatsapp`)
- Como mudar a letra do WhatsApp / negrito no WhatsApp → `/letras-para-whatsapp`
