# Amreek Singh — Data Analyst Portfolio

A responsive React + Vite portfolio with a premium dark analytics-inspired visual style, animated charts and floating dashboard cards, scroll-reveal transitions, project cards, skills, experience, certifications, and a contact form that opens the visitor's email app.

## Run locally

1. Install Node.js (LTS): https://nodejs.org/
2. Extract this folder and open a terminal in it.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for publishing

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Before publishing — important personalisation checklist

- Verify the contact email, LinkedIn, and GitHub links in `src/App.jsx`.
- Add your real resume PDF as `public/Amreek-Singh-Resume.pdf` so the resume path can be used if you add a resume button.
- Replace the illustrative dashboard visuals with screenshots of your actual Power BI reports. The current sample charts are design previews, not real business results.
- Check project descriptions and tool stacks carefully. Only list tools and results you genuinely used and can explain in an interview.
- Add actual GitHub repository links to each project when available.
- Update experience descriptions with the exact work you did; don't imply outcomes or responsibilities that you cannot verify.
- The contact form uses a `mailto:` action. It does not send messages through a server.
- Google Fonts are loaded from the web; system fonts will be used if offline.

## Deploy

You can deploy the repository on Vercel or Netlify. For Vercel, import the project repository and use the default Vite build settings (`npm run build`, output directory `dist`).
