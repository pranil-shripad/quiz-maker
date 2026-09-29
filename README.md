# QuizCraft - Single-Page Quiz Web App

A lightweight, distraction-free single-page quiz application designed for interview preparation and study sessions. Built with plain HTML, modern CSS, and vanilla JavaScript in a single self-contained `index.html` file. Works completely offline, opens locally with a double-click, and deploys effortlessly to Vercel as a static site.

---

## Features

- **Zero Dependencies & Single File**: Everything is bundled in `index.html` without external fonts, scripts, or build steps.
- **Robust JSON Ingestion**: Paste interview questions generated from ChatGPT or any LLM. Automatically strips code fences (` ``` `), extracts JSON, and cleans up prefixes like `A.`, `B)`.
- **Flexible Answer Formats**: Recognizes letters (`A`, `B`, `C`, `D`), numeric indices (`0`, `1`, `2`), or the full answer text.
- **Active Quiz Experience**: Clean one-question-at-a-time interface with progress bar, question jump bar, easy option switching, and confirmation before submitting with unanswered questions.
- **In-Depth Results & Explanations**:
  - Detailed score breakdown and visual progress.
  - Review cards showing all options with correct answer indicators.
  - **Red Box**: Explains why your chosen option was wrong (`why_wrong`).
  - **Green Box**: Detailed step-by-step working and solution (`explanation`).
  - **Blue Box**: Strategy and methodology (`approach`).
- **Targeted Practice**: "Retry only the ones I got wrong" lets you drill down on mistakes until mastered.
- **Save as PDF**: Export your full results, review questions, your selected answers, correct answers, and all step-by-step explanations directly to a clean, professionally formatted PDF.
- **shadcn/ui Dark Theme**: Minimalist, eye-soothing dark aesthetic inspired by shadcn/ui (zinc dark mode) with clean 1px borders, matte `#09090b` canvas, `#fafafa` black-and-white accents, and refined typography.
- **Local Persistence**: Saves your last pasted questions and records your last 5 quiz scores using `localStorage`.

---

## How to Use the App

### 1. Opening Locally
Simply double-click `index.html` in your file explorer / Finder to launch it directly in any modern browser (`file://`), or run a simple local web server:

```bash
# Python 3
python3 -m http.server 3000

# or npx serve
npx serve .
```
Then visit `http://localhost:3000`.

### 2. Pasting Questions
Generate questions in ChatGPT using the JSON schema below and paste the entire output into the app:

```json
[
  {
    "question": "A shirt costs 500 rupees. It is sold at a 20% discount. What is the selling price?",
    "options": ["400", "450", "480", "420"],
    "answer": "A",
    "explanation": "Step 1: 20% of 500 = 100.\nStep 2: 500 - 100 = 400.",
    "approach": "For discount questions: find the discount amount, then subtract it from the price.",
    "why_wrong": {
      "B": "450 comes from taking 10% off instead of 20%.",
      "C": "480 comes from taking 20 off, not 20 percent.",
      "D": "420 comes from subtracting 80."
    }
  }
]
```

- You can also click **"Load Sample"** on the setup screen to try out pre-configured interview questions immediately.
- Toggle **"Shuffle questions"** if you want randomized question order.
- Click **"Start Quiz"** to begin.

---

## Deployment to Vercel

The app is completely static and pre-configured with `vercel.json` (`cleanUrls: true`). It requires no build command or output directory configuration.

### Method 1: Push to GitHub & Import in Vercel (Recommended)

1. Initialize a git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Quiz web app"
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

1. Install the Vercel CLI if you haven't already:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command in the project directory:
   ```bash
   vercel
   ```
   Follow the prompts (accept default settings for static project).
3. To deploy to production with your custom domain or production URL:
   ```bash
   vercel --prod
   ```

---

## Privacy & Offline Use

- All quizzes run 100% on the client side in your browser.
- No question data or scores are transmitted to external servers.
- History is saved locally in your browser's `localStorage` and can be cleared at any time with the **"Clear saved data"** button.

---

Made with ❤️ by Pranil
