# Nawaraj Neupane | Portfolio

Personal portfolio website of Nawaraj, a .NET backend developer based in Kathmandu, Nepal.

Live site: https://neupanenawaraj.com.np

## Tech Stack

- React 19 with TypeScript
- Vite
- Tailwind CSS v4
- React Router (multi-page layout with a shared Navbar and Footer)
- EmailJS (contact form)

## Pages

- Home: introduction with photo, role, and links to projects and CV
- Skills: technical skills grouped by area (backend, data, architecture, tools)
- Experience: internship and traineeship timeline with key responsibilities
- Projects: project list with a detail page for each project
- Contact: contact form and social links


## Project Structure

```
src/
  components/
    layout/    Layout, Navbar, Footer, ScrollToTop
    ui/        Button and other reusable components
  data/        site details, projects, skills, experience
  pages/       Home, Experience, Skills, Projects, Contact
  App.tsx      route definitions
  main.tsx     app entry point
  index.css    Tailwind import and theme colors/fonts
public/        profile photo and CV PDF
```

Content lives in `src/data/`, so adding a project or changing personal details means editing a data file, not the components.

## Getting Started

Requirements: Node.js 18 or newer.

```bash
git clone <repository-url>
cd personal-resume
npm install
npm run dev
```

The site runs at http://localhost:5173.

## Environment Variables

Create a `.env` file in the project root (never commit it):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Scripts

- `npm run dev` starts the development server
- `npm run build` creates the production build in `dist/`
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Customization

- Personal details, links and CV path: `src/data/site.ts`
- Colors and fonts: the `@theme` block in `src/index.css`
- Profile photo: `public/profile.jpg`
- CV file: `public/Nawaraj_CV.pdf`

## Deployment

The site is deployed at https://neupanenawaraj.com.np.

It builds to static files in `dist/`. Because it is a single-page app with client-side routing, the host must redirect all routes to `index.html`, otherwise refreshing a page such as `/projects` returns a 404.

## License

All rights reserved. The source is shown for reference only.