# Chhan Philip — Internship Portfolio

A modern, recruiter-friendly React portfolio tailored for an Information Technology Engineering student applying for internship opportunities.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Personalize it

Open `src/App.jsx` and edit the `portfolio` object at the top of the file. You can update:

- Name, role, location, email, phone, and social links
- Intro and About copy
- Skills, education, and experience
- Projects, descriptions, highlights, tech stacks, and links

The navbar switches between Home, Projects, About, Resume, and Contact views using URL hashes. For example, `#projects` opens the Projects view directly.

The current CV is included at `public/Chhan-Philip-Resume.pdf` and is available from the Resume page. Replace that file if you later update your CV.

## Build for production

```bash
npm run build
```

The production files will be created in `dist/`.

## Recruiter-friendly details included

- Clear role and availability above the fold
- Scannable project types and outcomes
- Experience timeline
- Skills and measurable stats
- Direct email and social links
- Responsive navigation and layout