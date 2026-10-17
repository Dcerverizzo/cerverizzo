# cerverizzo.dev

Portfólio, case studies e blog de Daniel Cerverizzo. Next.js (App Router), tema claro/escuro e versão em português e inglês.

## Rodando localmente

```bash
npm install
npm run dev
```

O site abre em http://localhost:3000. O blog lê os posts do Dev.to pelo usuário em `DEVTO_USERNAME` (`.env`).

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| Textos da home, experiência e traduções PT/EN | `src/content/translations.ts` |
| Case studies (`/work`) | `src/app/work/data.ts` |
| Projetos (home e `/portfolio`) | `src/lib/github/fetch.ts` — lista curada; projeto privado usa `html_url: null` |
| Imagens dos cases | `public/work/<slug>/` |
| Imagem de compartilhamento | `public/images/og-image.png` (1200×630) |

As fontes (Syne e DM Sans) ficam em `src/app/fonts/` e são carregadas com `next/font/local`, sem depender do Google Fonts no build.
