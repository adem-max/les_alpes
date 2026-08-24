# Adding the CMS to les_alpes

These files add a Sanity-powered content editor to the site, reachable at
`/studio`. Your aunt will eventually just bookmark
`https://les-alpes.vercel.app/studio`, log in, edit, publish — nothing else.

## 1. Copy these files into your repo

Keep the same folder structure:

```
les_alpes/
  sanity.config.ts              <- new, goes at repo root (next to package.json)
  sanity/
    env.ts
    lib/
      client.ts
      queries.ts
    schemaTypes/
      index.ts
      siteSettings.ts
  app/
    page.tsx                    <- REPLACES your current app/page.tsx
    HomeClient.tsx               <- new
    studio/
      [[...tool]]/
        page.tsx
  .env.local                    <- create this from .env.local.example, don't commit it
```

Your original `app/page.tsx` logic now lives in `app/HomeClient.tsx` — don't
delete it, it's been adapted, not replaced.

## 2. Install the new dependencies

```bash
npm install sanity next-sanity @sanity/vision styled-components
```

(`styled-components` is a peer dependency the Studio needs internally — you
won't write any yourself.)

## 3. Create your free Sanity project

1. Go to https://www.sanity.io/get-started and sign up (free tier is plenty
   for this site).
2. Create a new project. Name it anything, e.g. "les-alpes".
3. It will create a dataset automatically — use the default name `production`.
4. Copy the **Project ID** shown in the dashboard.

## 4. Set your environment variables

Create `.env.local` in the repo root (copy `.env.local.example`) and fill in
your real project ID:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=abcd1234
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
```

Then add the same three variables in **Vercel → Project Settings →
Environment Variables**, so the live site can read them too. Redeploy after
adding them.

## 5. Allow your domains in Sanity

In https://www.sanity.io/manage → your project → API → CORS Origins, add:

- `http://localhost:3000` (for local testing)
- `https://les-alpes.vercel.app`
- your custom domain once it's connected, e.g. `https://les-alpes-multiservices.fr`

Check "Allow credentials" for each.

## 6. Run it locally and add the first content

```bash
npm run dev
```

Visit `http://localhost:3000/studio`, log in with the same account you used
to create the Sanity project, and create one "Contenu du site" document.
Fill in the fields, upload real photos to the gallery, hit **Publish**.
Refresh `http://localhost:3000` and you should see your content instead of
the old hardcoded text and stock photos.

## 7. Push and deploy

```bash
git add .
git commit -m "Add Sanity CMS for editable content"
git push
```

Vercel redeploys automatically. The live site now reads from Sanity, and
`/studio` is live at `https://les-alpes.vercel.app/studio`.

## 8. Give your aunt access

In https://www.sanity.io/manage → your project → Members, invite her by
email with the **Editor** role. She'll get an email, sets up a login (or
uses Google sign-in), and from then on she only ever visits
`les-alpes.vercel.app/studio` — no code, no GitHub, no Vercel dashboard.

## Notes / things I simplified on purpose

- Only 4 zones are editable (hero text, contact info, the 3 service cards,
  the gallery) — matches what we scoped earlier. Everything else (colors,
  layout, animations, the CTA section wording) is still in code, on
  purpose, to keep her interface simple.
- Service icons are a fixed dropdown (building / Airbnb / office) rather
  than free text, so she can't pick something that doesn't render.
- The phone number auto-formats for display assuming a `+33` French mobile
  format like the current one. If you ever change to a different country
  code or number length, the formatting regex in `HomeClient.tsx`
  (`telDisplay`) will just pass the raw number through unformatted — not
  break, just less pretty. Worth a quick fix if that happens.
- `revalidate = 60` in `app/page.tsx` means content updates appear within a
  minute, without needing a Sanity webhook. Fine for a small business site;
  say the word if you want instant updates via a webhook instead.
