# Quizzie - Single-Page AI Quiz Web App

A modern, distraction-free single-page quiz application designed for interview preparation and study sessions. Built with plain HTML, modern CSS, and vanilla JavaScript in a single self-contained `index.html` file. 

Powered by **Groq AI** to automatically generate fresh, non-repeating interview questions on any topic in seconds! Works completely offline with manual fallback, opens locally with a double-click, and deploys effortlessly to Vercel as a static site.

---

## ✨ Features

- **⚡ Instant Groq AI Quiz Generation**: Uses your single Groq API key (configured directly in `index.html`) to generate quizzes on-demand using ultra-fast models (`Llama 3.3 70B` with instant fallback to `Llama 3.1 8B`).
- **📝 Topic Name Text Box**: Users simply type any topic or subject into the prominent text box (e.g. *Data Structures & Algorithms*, *System Design*, *Python*, *React*, *Kubernetes*, *PostgreSQL*), or click any of the popular quick-suggestion chips.
- **🎚️ Selectable Difficulty Level**:
  - **Easy**
  - **Medium** (default)
  - **Hard**
- **⚙️ Configurable Question Count**: 5 or 10 questions per quiz.
- **🛡️ Intelligent Deduplication (No-Repeat Engine)**: Remembers questions you've previously practiced on each topic and instructs the AI to generate completely new questions and angles. Tracks history in `localStorage` with an option to reset at any time.
- **📋 Collapsible Manual JSON Mode**: Still allows pasting custom JSON questions generated from ChatGPT or elsewhere.
- **🎨 shadcn/ui Dark Aesthetic**: Minimalist, eye-soothing dark theme inspired by shadcn/ui (zinc dark mode) with clean 1px borders, matte `#09090b` canvas, `#fafafa` black-and-white accents, and refined typography.
- **🧠 Rich Question Explanations**:
  - **Red Box**: Explains why your chosen option was wrong (`why_wrong`).
  - **Green Box**: Detailed step-by-step working and solution (`explanation`).
  - **Blue Box**: Strategy and methodology (`approach`).
- **🎯 Targeted Practice**: "Retry only the ones I got wrong" lets you drill down on mistakes until mastered.
- **⚡ Next Quiz (New Questions)**: Generate another fresh set of non-repeating questions on the same topic directly from the results screen.
- **📥 Save as PDF**: Export your full score, review questions, your selected answers, correct answers, and all step-by-step explanations directly to a clean, professionally formatted PDF.
- **🔒 100% Client-Side Privacy**: All quizzes run strictly in the browser. Zero telemetry, zero server backend.

---

## 🚀 Setting Up Your Groq API Key

To set your Groq API key:

1. Open `index.html` in your code editor.
2. Near the top of the `<script>` section (around line 1762), find the placeholder:
   ```javascript
   const GROQ_API_KEY = "YOUR_GROQ_API_KEY_HERE";
   ```
3. Replace `"YOUR_GROQ_API_KEY_HERE"` with your Groq API key (e.g. `"gsk_..."`).
4. Save the file! Now all visitors can generate quizzes without needing to enter an API key themselves.

*(Get a free Groq API key at [console.groq.com/keys](https://console.groq.com/keys) if you don't have one).*

---

## 💻 How to Use the App

### 1. Opening Locally
Simply double-click `index.html` in your file explorer / Finder to launch it directly in any modern browser (`file://`), or run a simple local web server:

```bash
# Python 3
python3 -m http.server 3000

# or npx serve
npx serve .
```
Then visit `http://localhost:3000`.

### 2. Generating a Quiz
1. Enter your desired topic in the **Quiz Topic** text box (or click a popular suggestion chip).
2. Choose your **Difficulty Level** (`Easy`, `Medium`, or `Hard`).
3. Select your **Question Count** (5 or 10 questions).
4. Click **⚡ Generate Quiz** (or press Enter).
5. Quizzie queries Groq AI, verifies the questions, filters duplicates, and launches the quiz immediately!

---

## 🌐 Deployment to Vercel

The app is completely static and pre-configured with `vercel.json` (`cleanUrls: true`). It requires no build command or output directory configuration.

### Method 1: Push to GitHub & Import in Vercel (Recommended)

1. Initialize a git repository and commit your files:
   ```bash
   git add .
   git commit -m "Configure Groq API key placeholder and topic text box"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Import your repository and click **Deploy**. Your quiz app will be live within seconds!

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

Made with ❤️ by Pranil
