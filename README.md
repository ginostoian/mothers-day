# Simona, Inima Noastră - 8 Martie

Website interactiv de tip photobook, construit cu Next.js (App Router), în limba română.

## Rulare locală

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Build producție

```bash
npm run build
npm run start
```

## Structură importantă

- `app/page.tsx` - landing cinematic
- `app/capitol/[slug]/page.tsx` - capitolele dinamice
- `app/final/page.tsx` - epilog
- `src/content/timeline.ro.ts` - TOT conținutul în română + lista pozelor
- `src/components/*` - componente UI (scene, rail progres, lightbox, player muzică)

## Cum înlocuiești rapid pozele cu cele reale

1. Deschide `src/content/timeline.ro.ts`.
2. Pentru fiecare capitol, actualizează array-ul `photos` (sau helper-ul care generează pozele).
3. Pentru fiecare imagine setează:
   - `src`
   - `altRo`
   - `captionRo`
   - `creditName` și `creditUrl` (dacă vrei creditare)

## Muzică de fundal

- URL-ul este definit în `siteMetaRo.musicUrl` în `src/content/timeline.ro.ts`.
- Poți înlocui cu un fișier local (ex: `/audio/simona.mp3` în `public/audio/simona.mp3`).

## Deploy pe Vercel

1. Push repo-ul în GitHub.
2. Import proiectul în Vercel.
3. Build command: `npm run build`.
4. Output: detectat automat de Next.js.

Nu sunt necesare configurări speciale suplimentare.
