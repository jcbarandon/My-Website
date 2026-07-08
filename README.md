# Joe Barandon — Developer Portfolio

> Personal portfolio of **Joe Carlo Jr. O. Barandon** — Machine Learning Engineer & Applications Developer, and a BS Computer Science student at Ateneo de Naga University.

🌐 **Live site:** [joebarandon-portfolio.vercel.app](https://joebarandon-portfolio.vercel.app/)

<p>
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="Deployed on Vercel" src="https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white" />
</p>

---

## ✨ About

A fast, responsive, single-page portfolio that showcases my experience across
**full-stack web development, applied AI/ML, and game development**. Built as a
clean, animated single page with a dark theme and a blue → violet → emerald
gradient identity.

## 🚀 Features

- **Responsive design** — looks great from mobile to widescreen
- **Animated hero** with a typing role rotator and live availability badge
- **Scroll-reveal animations** on every section (respects `prefers-reduced-motion`)
- **Sticky navbar** with active-section highlighting and a scroll-progress bar
- **Sections:** About, Skills, Experience, Projects, Awards, Education, Leadership, Contact
- **Working contact form** (composes a pre-filled email — no backend required)
- **Downloadable résumé** and social links
- **SEO-ready** with Open Graph / Twitter meta tags

## 🛠️ Tech Stack

| Area        | Tools                                                      |
| ----------- | ---------------------------------------------------------- |
| Framework   | [React 19](https://react.dev)                              |
| Build tool  | [Vite 8](https://vitejs.dev)                               |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com)                 |
| Icons       | [lucide-react](https://lucide.dev), [react-icons](https://react-icons.github.io/react-icons/) |
| Fonts       | Space Grotesk · Inter · JetBrains Mono                     |
| Hosting     | [Vercel](https://vercel.com)                               |

## 📦 Getting Started

Requires **Node.js 20.19+** (or 22.12+).

```bash
# 1. Clone the repo
git clone https://github.com/jcbarandon/My-Website.git
cd My-Website

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:5173)
npm run dev
```

### Available scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reload    |
| `npm run build`   | Build the production bundle to `dist/`       |
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Run ESLint across the project                |

## 📁 Project Structure

```
My-Website/
├── public/            # Static assets (favicon, résumé PDF)
├── src/
│   ├── assets/        # Images
│   ├── components/    # Section + UI components (Hero, Skills, Experience, …)
│   ├── hooks/         # Custom React hooks (useActiveSection)
│   ├── App.jsx        # Page composition
│   ├── main.jsx       # App entry point
│   └── index.css      # Tailwind theme + custom utilities
├── index.html
└── vercel.json        # Vercel deployment config
```

## 🌍 Deployment

Deployed on **Vercel** with a Vite preset. Every push to `main` triggers an
automatic production deploy; other branches get preview URLs.

## 📫 Contact

- **Email:** [barandonjoe13@gmail.com](mailto:barandonjoe13@gmail.com)
- **LinkedIn:** [Joe Barandon](https://linkedin.com/in/joebarandon)
- **GitHub:** [@jcbarandon](https://github.com/jcbarandon)

---

<sub>© 2026 Joe Carlo Jr. O. Barandon. Built with React & Tailwind CSS.</sub>
