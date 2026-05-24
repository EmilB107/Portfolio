import type { Metadata } from "next";
import Link from "next/link";
import ArchiveCard, { type ArchiveProject } from "@/components/ArchiveCard";

export const metadata: Metadata = {
  title: "Project Archive — John Emil Bragais",
  description: "A complete archive of projects by John Emil Bragais, frontend developer.",
};

const projects: ArchiveProject[] = [
  {
    name: "Expense Tracker",
    year: "2025",
    description:
      "A full-featured expense tracking web app built as an internship technical assessment. Features real-time search, weekly ISO 8601 aggregation, confirmation modals, and automatic localStorage persistence — structured with a composable-based architecture separating UI from business logic.",
    tech: ["Vue 3", "Vite", "Tailwind CSS", "Composition API", "localStorage"],
    github: "https://github.com/EmilB107/ExpenseTracker",
    live: "https://emilb107.github.io/ExpenseTracker/",
    desktop: "/assets/imgs/emilb107.github.io_ExpenseTracker_(XX-Large).png",
    mobile: "/assets/imgs/emilb107.github.io_ExpenseTracker_(Extra Small).png",
  },
  {
    name: "Arf & Meow Co.",
    year: "2025",
    description:
      "A product catalog management system with role-based access control for Super Admins, Admins, and Project Managers. Includes inventory tracking, SKU and price management, image uploads, and a full test suite of 61 tests across auth, CRUD, and access control.",
    note: "Hosted on Render's free tier — may take 30–60 seconds to load if the server has spun down from inactivity.",
    tech: ["Laravel 12", "PHP", "MySQL", "Blade", "Docker", "Render"],
    github: "https://github.com/EmilB107/Arf-Meow-Co.",
    live: "https://arf-meow-catalog.onrender.com",
    desktop: "/assets/imgs/arf-meow-catalog.onrender.com_(XX-Large).png",
    mobile: "/assets/imgs/arf-meow-catalog.onrender.com_(Extra Small).png",
  },
  {
    name: "NIGHT-QUEST",
    year: "2025",
    description:
      "A themed quiz application built with vanilla HTML, CSS, and JavaScript. Features custom animations, a dark theme, and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EmilB107/NIGHT-QUEST",
    live: "https://emilb107.github.io/NIGHT-QUEST/",
    desktop: "/assets/imgs/emilb107.github.io_NIGHT-QUEST_(XX-Large).png",
    mobile: "/assets/imgs/emilb107.github.io_NIGHT-QUEST_(Extra Small).png",
  },
  {
    name: "Namnam",
    year: "2025",
    description:
      "A responsive restaurant website featuring a menu, reservations, and contact page. Forked from the original group project to apply personal improvements in UI consistency, code quality, and design standards.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EmilB107/Namnam",
    live: "https://emilb107.github.io/Namnam/",
    desktop: "/assets/imgs/emilb107.github.io_Namnam_(XX-Large).png",
    mobile: "/assets/imgs/emilb107.github.io_Namnam_(Extra Small).png",
  },
  {
    name: "FinalRep World 2025",
    year: "2025",
    description:
      "A website for FinalRep World 2025, a real organization and event. Built independently as a web development activity using vanilla HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EmilB107/FinalRep",
    live: "https://emilb107.github.io/FinalRep/",
    desktop: "/assets/imgs/emilb107.github.io_FinalRep_(XX-Large).png",
    mobile: "/assets/imgs/emilb107.github.io_FinalRep_(Extra Small).png",
  },
  {
    name: "Animalandia",
    year: "2025",
    description:
      "A C# web app built with ASP.NET MVC demonstrating OOP inheritance across animal category models, MVC routing, Razor views, and Bootstrap styling. Includes animal sound playback per category.",
    tech: ["C#", "ASP.NET MVC", ".NET Framework", "Bootstrap"],
    github: "https://github.com/EmilB107/Animalandia",
    live: null,
    desktop: null,
    mobile: null,
  },
];

export default function ArchivePage() {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-full max-w-[1280px] px-6 py-12 md:px-12 md:py-16">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-200 font-medium text-sm hover:text-teal-300 transition-colors duration-200 mb-12 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
            aria-hidden="true"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          John Emil Bragais
        </Link>

        <h1 className="text-slate-200 text-3xl font-bold tracking-tight mb-2">All Projects</h1>
        <p className="text-slate-400 mb-10">A full archive of things I&apos;ve built.</p>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <ArchiveCard key={project.name} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
}
