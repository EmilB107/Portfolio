# Personal Portfolio

Personal portfolio — Frontend Developer based in the Philippines.

Built with Next.js, TypeScript, and Tailwind CSS. Features a split layout on desktop with a sticky sidebar and scrollable content sections, a full project archive with screenshot previews and a lightbox, and a cursor radial glow effect.

## Features

- Split layout with sticky sidebar (desktop) and responsive stacked layout (mobile)
- Scroll-based active nav indicator
- Project archive at `/archive` with desktop/mobile screenshot toggle and zoomable lightbox
- Cursor glow effect
- Hidden scrollbar with a scroll indicator

## Stack

- [Next.js](https://nextjs.org/) — framework
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [TypeScript](https://www.typescriptlang.org/) — language

## Project Structure

```
app/
  archive/        # /archive page
  layout.tsx      # root layout
  page.tsx        # home page
components/
  ui/             # shared utilities (icons, cursor glow, scroll indicator)
  About.tsx
  Contact.tsx
  Experience.tsx
  Projects.tsx
  Sidebar.tsx
  ArchiveCard.tsx
public/
  assets/imgs/
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Inspiration

- [Brittany Chiang](https://brittanychiang.com)
- [Yash Jangid](https://yash-jangid-portfolio.vercel.app)
