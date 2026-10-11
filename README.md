# zachariahhansen.com

My portfolio site: a single page built with React, TypeScript, Vite, and Tailwind CSS.

## Running it

```bash
npm install
npm run dev
```

`npm run build` type-checks and writes the production build to `dist/`.

## Editing content

The text lives in config files, so most updates don't touch a component:

- `src/config/site.ts`: name, links, nav, résumé PDF path
- `src/config/personal/experience.ts`: jobs
- `src/config/personal/projects.ts`: the Work section
- `src/config/personal/education.ts`: education

The résumé PDF and the link-preview image (`og.png`) are in `public/`.
