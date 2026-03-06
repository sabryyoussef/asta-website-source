# ASTA — Applied Skills Training Academy

Frontend website for **ASTA** (أكاديمية المهارات التطبيقية), a Saudi Arabian professional training academy. Built with React 19 and Vite, supporting full **Arabic / English** bilingual operation with RTL layout.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 19 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 4 |
| Routing | React Router v6 |
| Internationalisation | i18next / react-i18next |
| Email (registration) | EmailJS |
| Icons | Heroicons |
| Slider | Swiper |

---

## Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** v9 or later

### 1 — Install dependencies

```bash
npm install
```

### 2 — Start the development server

```bash
npm run dev
```

The app opens at **http://localhost:5173**. It redirects `/` → `/ar` automatically, so your starting URL will be **http://localhost:5173/ar**.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR on port **5173** |
| `npm run build` | Production build → `dist/` + regenerate `public/sitemap.xml` |
| `npm start` | Serve the production build on port **10000** |
| `npm run lint` | Run ESLint across the whole project |
| `npm run sitemap` | Regenerate `public/sitemap.xml` without rebuilding |
| `npm run preview` | Vite built-in preview (same as `npm start` without `--host`) |

### Quick production start

```bash
npm install && npm run build && npm start
```

Production server: **http://localhost:10000**

---

## Project Structure

```
asta-website-source/
├── public/              # Static assets served as-is
│   ├── images/          # Photos and illustrations
│   ├── svgs/            # Logo and icon SVGs
│   ├── fonts/           # Web fonts
│   └── sitemap.xml      # Auto-generated; do not edit by hand
│
├── src/
│   ├── api/             # Static data (no backend required)
│   │   ├── Courses.json         # All course records
│   │   ├── Courses.js           # Helper functions for courses
│   │   ├── Programs.json        # All program (diploma) records
│   │   ├── Programs.js          # Helper functions for programs
│   │   ├── Categories.json      # Course categories
│   │   └── Partners.json        # Partner logos / names
│   │
│   ├── i18n/            # Internationalisation
│   │   ├── ar.json      # All Arabic UI strings
│   │   ├── en.json      # All English UI strings
│   │   └── index.js     # i18next initialisation
│   │
│   ├── layout/
│   │   └── App.jsx      # Root router: defines all routes
│   │
│   ├── shared/
│   │   └── SharedLayout.jsx  # Persistent shell: Navbar + Footer + FABs
│   │
│   ├── pages/           # One file per route/page
│   ├── components/      # Reusable UI components (grouped by feature)
│   └── style/           # Global CSS (App.css, fontawesome.css)
│
├── vite.config.js       # Vite + Tailwind + bundle-analyser config
├── tailwind.config.cjs  # Tailwind theme / content paths
└── sitemap-generator.js # Node script called by `npm run build`
```

---

## Routing

Every route is prefixed with a **language segment**:

```
/ar          → Arabic home page   (RTL)
/en          → English home page  (LTR)

/ar/courses           → course list in Arabic
/en/courses/:id       → course detail in English
/ar/programs          → diploma/program list
/ar/registration      → registration form
/ar/certificate-checker
/ar/about-us
...
```

Visiting `/` redirects to `/ar` by default.

The active language is read from the URL (`useParams().lang`) inside `SharedLayout`, which then calls `i18n.changeLanguage(lang)` and sets `dir="rtl"` / `dir="ltr"` on `<html>`.

---

## Content: Adding or Editing Data

All content lives in **JSON files** under `src/api/`. There is no backend — edits take effect after saving and refreshing.

### Add a new course

Open `src/api/Courses.json` and append an object following the existing schema:

```jsonc
{
  "id": "your-course-slug",           // used in the URL: /ar/courses/your-course-slug
  "title":    { "ar": "...", "en": "..." },
  "subtitle": { "ar": "...", "en": "..." },
  "category": { "ar": "...", "en": "..." },
  "description": { "ar": "...", "en": "..." },
  "hours": 12,
  "price": 5000,
  "status": { "ar": "مفتوح للتسجيل", "en": "Open for Registration" },
  // ... (see existing records for all available fields)
}
```

### Add a new program (diploma)

Same pattern — edit `src/api/Programs.json`.

### Add a new partner logo

Edit `src/api/Partners.json` and place the logo file in `public/images/`.

---

## Internationalisation (i18n)

UI strings (button labels, section headings, error messages, etc.) live in:

- `src/i18n/ar.json` — Arabic
- `src/i18n/en.json` — English

Both files share the same key structure, organized by feature:

```
global, header, footer, hero, home, about, courses, diplomas,
testCenter, forms, visionMission, benefits, buttons, programs,
registration, messages, seo, errors, aiBot
```

**To add a new string:**

1. Add the key to **both** `ar.json` and `en.json` under the appropriate section.
2. Use it in a component with `useTranslation`:

```jsx
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('home.myNewKey')}</h1>;
}
```

---

## Adding a New Page

1. Create `src/pages/MyPage.jsx`.
2. Register a lazy import and a `<Route>` in `src/layout/App.jsx`:

```jsx
const MyPage = lazy(() => import('../pages/MyPage'));

// inside <Routes>:
<Route path="my-page" element={<MyPage />} />
```

The new page is automatically wrapped by `SharedLayout` (Navbar, Footer, etc.).

3. Add any new UI strings to both translation files.

---

## Code Conventions

- **Language detection** — always read from `useParams().lang`; never hardcode `'ar'` or `'en'`.
- **RTL flag** — derive with `const isRTL = lang === 'ar'` and use it for conditional Tailwind classes (`isRTL ? 'text-right' : 'text-left'`).
- **Bilingual fields in JSON** — every user-visible text field must be `{ ar: '...', en: '...' }`; access with `field[lang]`.
- **Components** — place feature-specific components under `src/components/<FeatureName>/`; shared/global components go directly in `src/components/`.
- **Linting** — run `npm run lint` before committing; the project uses ESLint with `react-hooks` and `react-refresh` plugins.

---

## Deployment

The app is a **static SPA** after `npm run build`. The `dist/` folder can be served by any static host (Nginx, Apache, Netlify, Vercel, etc.).

For Vite's built-in preview server:

```bash
npm run build && npm start
# → http://localhost:10000
```

> **SPA routing note:** configure your web server to serve `index.html` for all routes so that direct URL access and page refreshes work correctly.
