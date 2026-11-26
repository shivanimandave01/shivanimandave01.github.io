# Shivani Mandave — Portfolio (React)

This is your portfolio site converted from static HTML/CSS/JS into a React app, built with Vite. It keeps the same design, sections, and behavior (scroll-spy nav, EmailJS contact form, dynamic footer year) — just split into reusable components.

## Project structure

```
portfolio-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── profile.png
│   ├── project1.png
│   ├── project2.png
│   ├── project3.png
│   └── resume.pdf
└── src/
    ├── main.jsx          # entry point, imports Bootstrap + global CSS
    ├── App.jsx            # composes all sections
    ├── index.css          # your original style.css, unchanged
    └── components/
        ├── Navbar.jsx      # sticky nav with scroll-spy active link
        ├── Hero.jsx        # home section
        ├── About.jsx
        ├── Skills.jsx      # skill cards + progress bars (data-driven)
        ├── Projects.jsx    # project cards (data-driven)
        ├── Contact.jsx     # controlled form + EmailJS send
        └── Footer.jsx      # auto-updating copyright year
```

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy anywhere (Netlify, Vercel, GitHub Pages, etc.).

## Notes on the conversion

- **Bootstrap & icons** are now installed as npm packages (`bootstrap`, `bootstrap-icons`) instead of CDN `<link>` tags, and imported in `src/main.jsx`.
- **Navbar active-link tracking** uses the same `IntersectionObserver` approach as your original `script.js`, now wrapped in a `useEffect` hook in `Navbar.jsx`.
- **Contact form** is a controlled React form (state via `useState`) and sends through `@emailjs/browser`, using your existing EmailJS service/template IDs. If you rotate that public key later, update the constants at the top of `Contact.jsx`.
- **Skills and Projects** are now data arrays (`SKILL_CARDS`, `PROGRESS`, `PROJECTS`) mapped into cards — add or edit an entry in the array to update the page instead of duplicating markup.
- **Images** (`profile.png`, `project1–3.png`) and `resume.pdf` live in `public/` and are referenced with root-relative paths (e.g. `/profile.png`), which Vite serves as-is.
- The Bootstrap collapse toggle on mobile still works because `bootstrap/dist/js/bootstrap.bundle.min.js` is imported for its side effects (Popper + Collapse), matching the CDN script your original page used.

## Deploying

Any static host works since this builds to plain HTML/CSS/JS. For GitHub Pages, set `base` in `vite.config.js` to your repo name (e.g. `base: "/your-repo-name/"`) before building.
