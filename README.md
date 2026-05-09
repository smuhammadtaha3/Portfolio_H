# 🚀 Syed Muhammad Taha — Portfolio

A single-page portfolio website for a Machine Learning Engineer & Python Developer.
Dark theme · Blue color scheme · Animated binary rain background · Smooth scroll-reveal.

---

## 📁 Folder Structure

```
my-portfolio/
├── index.html        ← Main (and only) HTML file — entire page lives here
├── style.css         ← All styles: layout, theme, animations, responsive
├── script.js         ← Canvas rain, typed text, scroll-reveal, nav logic
├── cv.pdf            ← Your résumé (rename yours to cv.pdf and drop it here)
└── README.md         ← This file
```

> **No build step, no dependencies, no Node.js required.** Pure HTML/CSS/JS.

---

## ✏️ How to Personalise

| What to change | Where |
|---|---|
| Your name & bio | `index.html` → hero section |
| Job titles in typing effect | `script.js` → `phrases` array |
| Experience entries | `index.html` → `#experience` section |
| Project cards | `index.html` → `#projects` section |
| Skills pills | `index.html` → `#skills` section |
| Email address | `index.html` → contact `mailto:` link |
| Social links (GitHub, LinkedIn, Twitter) | `index.html` → social links in `#contact` |
| CV file | Replace `cv.pdf` with your actual PDF |
| Color accent | `style.css` → `--cyan`, `--blue`, `--blue-light` variables |

---

## 💻 Local Setup

### Option A — Just open the file (quickest)

1. Download / clone this folder.
2. Double-click `index.html`.
3. Opens in your browser instantly. ✅

> ⚠️ The Google Fonts link requires an internet connection. For true offline use see Option B.

### Option B — Live-reload dev server (recommended)

**Prerequisites:** [Node.js](https://nodejs.org) installed (any version ≥ 14).

```bash
# 1. Install the live-server tool once globally
npm install -g live-server

# 2. Navigate into the project folder
cd my-portfolio

# 3. Start the server
live-server

# Browser opens automatically at http://127.0.0.1:8080
# Changes to any file reload the page instantly.
```

### Option C — Python (if you have Python installed)

```bash
cd my-portfolio

# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

---

## 🌐 Deploying to Vercel

Vercel hosts static sites for **free** with a custom domain and HTTPS.

### Method 1 — Vercel CLI (fastest)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Go to your project folder
cd my-portfolio

# 3. Deploy (follow the prompts the first time)
vercel

# For subsequent deploys (production):
vercel --prod
```

Vercel will give you a live URL like `https://my-portfolio-xyz.vercel.app`.

---

### Method 2 — Vercel Dashboard (no CLI needed)

1. Push your project to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Sign up / Log in** with GitHub.

3. Click **"Add New Project"** → Import your `my-portfolio` repository.

4. Keep all settings as default (Vercel auto-detects static HTML).

5. Click **Deploy**. ✅

6. Your site is live. Every `git push` auto-deploys.

---

### Method 3 — Drag & Drop (no Git, no CLI)

1. Go to [vercel.com/new](https://vercel.com/new).
2. Drag and drop your **entire project folder** onto the page.
3. Click **Deploy**. Done.

---

## 🔗 Custom Domain (optional)

1. In Vercel dashboard → your project → **Settings → Domains**.
2. Add your domain (e.g., `syedtaha.dev`).
3. Update your domain registrar's DNS with the records Vercel shows.
4. HTTPS is automatic.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styles | CSS3 (custom properties, grid, flexbox, keyframes) |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Syne + Space Mono |
| Hosting | Vercel (recommended) |

No frameworks, no bundlers, no dependencies. Loads in < 1 second.
