# Quizzie - Single-Page AI Quiz Web App

A modern, distraction-free single-page quiz application designed for interview preparation and study sessions. Built with plain HTML, modern CSS, and vanilla JavaScript in a single self-contained `index.html` file. 

Now powered by **Groq AI** to automatically generate fresh, non-repeating interview questions on any topic in seconds! Works completely offline with manual fallback, opens locally with a double-click, and deploys effortlessly to Vercel as a static site.

---

## ✨ Features

- **⚡ Groq AI Quiz Generator**: Enter your free Groq API key to generate interview quizzes on-demand using ultra-fast models (`Llama 3.3 70B` with instant fallback to `Llama 3.1 8B`).
- **🛡️ Intelligent Deduplication (No-Repeat Engine)**: Remembers questions you've previously practiced on each topic and instructs the AI to generate completely new questions and angles. Tracks history in `localStorage` with an option to reset at any time.
- **🎯 12 Curated Interview Topics + Custom Input**:
  - Data Structures & Algorithms
  - Python Core & Advanced
  - JavaScript & TypeScript
  - React & Frontend
  - SQL & Database Design
  - System Design & Architecture
  - OS & Linux Internals
  - Computer Networks
  - Machine Learning & AI
  - Java & Spring Boot
  - DevOps, CI/CD & Cloud
  - Go (Golang)
  - *Or type any custom topic/specialization (e.g., Next.js 15, Kubernetes, Redis Caching, Pandas).*
- **⚙️ Configurable Quiz Settings**:
  - Question count (5 or 10 questions).
  - Difficulty level (Junior, Mid-Level, Senior).
- **📋 Collapsible Manual JSON Mode**: Still allows pasting custom JSON questions generated from ChatGPT or elsewhere.
- **🎨 shadcn/ui Dark Aesthetic**: Minimalist, eye-soothing dark theme inspired by shadcn/ui (zinc dark mode) with clean 1px borders, matte `#09090b` canvas, `#fafafa` black-and-white accents, and refined typography.
- **🧠 Rich Question Explanations**:
  - **Red Box**: Explains why your chosen option was wrong (`why_wrong`).
  - **Green Box**: Detailed step-by-step working and solution (`explanation`).
  - **Blue Box**: Strategy and methodology (`approach`).
- **🎯 Targeted Practice**: "Retry only the ones I got wrong" lets you drill down on mistakes until mastered.
- **⚡ Next Quiz (New Questions)**: Generate another fresh set of non-repeating questions on the same topic directly from the results screen.
- **📥 Save as PDF**: Export your full score, review questions, your selected answers, correct answers, and all step-by-step explanations directly to a clean, professionally formatted PDF.
- **🔒 100% Client-Side Privacy**: Your Groq API key, seen question history, and scores remain strictly in your browser's `localStorage`. No telemetry, no backend, no middleman.

---

## 🚀 Getting Started

### 1. Opening Locally
Simply double-click `index.html` in your file explorer / Finder to launch it directly in any modern browser (`file://`), or run a simple local web server:

```bash
# Python 3
python3 -m http.server 3000

# or npx serve
npx serve .
```
Then visit `http://localhost:3000`.

### 2. Setting Up Your Free Groq API Key
1. Get a free API key at [console.groq.com/keys](https://console.groq.com/keys).
2. Paste it into the **Groq API Key** card at the top of the homepage and click **Save Key**.
3. Your key is stored securely in your browser's `localStorage` and never leaves your computer.

### 3. Generating a Quiz
1. Click any topic card (e.g. *Data Structures & Algorithms*, *System Design*, *Python*) or enter a custom topic.
2. Select your desired question count (5 or 10) and difficulty level (*Junior*, *Mid-Level*, *Senior*).
3. Click **⚡ Generate Quiz**.
4. Quizzie prompts Groq AI, validates the structure, deduplicates against previously seen questions, and launches the quiz.

---

## 🌐 Deployment to Vercel

The app is completely static and pre-configured with `vercel.json` (`cleanUrls: true`). It requires no build command or output directory configuration.

### Method 1: Push to GitHub & Import in Vercel (Recommended)

1. Initialize a git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Quizzie with Groq AI generator"
   ```
2. Push your repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and log in.
4. Click **"Add New..."** > **"Project"**.
5. Select your GitHub repository and click **Import**.
6. In the project configuration:
   - **Framework Preset**: `Other`
   - **Root Directory**: `./`
   - **Build Command**: Leave empty / disabled
   - **Output Directory**: Leave empty (root)
7. Click **Deploy**. Your quiz app will be live within seconds!

### Method 2: Deploy with Vercel CLI

```bash
# Install CLI
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

---

## 🔒 Privacy & Data Retention

- All quizzes run 100% on the client side in your browser.
- The Groq API key is communicated directly to `api.groq.com` from your browser using fetch without any proxy or server in between.
- History, keys, and scores can be wiped at any time with the **"Clear saved data"** button.

---

Made with ❤️ by Pranil
