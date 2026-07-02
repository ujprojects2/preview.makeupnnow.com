# Makeupnnow

Production-ready Next.js (App Router) implementation of the Makeupnnow / Bangalore Artists makeup-artist directory, built from the provided Stitch design mockups.

## Pages

| Route        | Page                          |
|--------------|-------------------------------|
| `/`          | Home                          |
| `/about`     | About Us                      |
| `/artists`   | Bangalore Artist Directory    |
| `/services`  | Our Services                  |
| `/contact`   | Contact Us (working form UI)  |
| `/register`  | Artist Registration (working form UI) |

All pages share a common `Header`, `Footer`, and mobile `BottomNav`, and are fully linked together.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** — design tokens (colors, type scale, spacing) ported 1:1 from the Stitch design system into `src/app/globals.css`
- Google Fonts: EB Garamond (headlines) + Hanken Grotesk (body/labels), Material Symbols Outlined (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Notes

- The Contact and Artist Registration forms are client components with working submit-state UI. Wire the `handleSubmit` functions in `src/components/ContactForm.jsx` and `src/components/RegisterForm.jsx` up to your backend/email/CRM endpoint of choice.
- Images are served directly from the original Stitch/Google-hosted asset URLs (`lh3.googleusercontent.com`). Swap in your own hosted images before going live, since these are demo assets.
- A handful of in-page decorative links (social icons, "Login here", filter chips) still point to `#` — the Stitch mockups didn't include destination pages for these, so they're left as placeholders.

## Deploying

### GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repo you just pushed
3. Framework preset: **Next.js** (auto-detected) — no config needed
4. Click **Deploy**
