import Link from "next/link";
import { GitHubIcon, ExternalLinkIcon } from "@/components/ui/Icons";

type Project = {
  name: string;
  description: string;
  note?: string;
  tech: string[];
  github: string;
  live: string | null;
};

const projects: Project[] = [
  {
    name: "Expense Tracker",
    description:
      "A full-featured expense tracking web app built as an internship technical assessment. Features real-time search, weekly ISO 8601 aggregation, confirmation modals, and automatic localStorage persistence — structured with a composable-based architecture separating UI from business logic.",
    tech: ["Vue 3", "Vite", "Tailwind CSS", "Composition API", "localStorage"],
    github: "https://github.com/EmilB107/ExpenseTracker",
    live: "https://emilb107.github.io/ExpenseTracker/",
  },
  {
    name: "Arf & Meow Co.",
    description:
      "A product catalog management system with role-based access control for Super Admins, Admins, and Project Managers. Includes inventory tracking, SKU and price management, image uploads, and a full test suite of 61 tests across auth, CRUD, and access control.",
    note: "Hosted on Render's free tier — may take 30–60 seconds to load if the server has spun down from inactivity.",
    tech: ["Laravel 12", "PHP", "MySQL", "Blade", "Docker", "Render"],
    github: "https://github.com/EmilB107/Arf-Meow-Co.",
    live: "https://arf-meow-catalog.onrender.com",
  },
  {
    name: "NIGHT-QUEST",
    description:
      "A themed quiz application built with vanilla HTML, CSS, and JavaScript. Features custom animations, a dark theme, and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EmilB107/NIGHT-QUEST",
    live: "https://emilb107.github.io/NIGHT-QUEST/",
  },
  {
    name: "Animalandia",
    description:
      "A C# web app built with ASP.NET MVC demonstrating OOP inheritance across animal category models, MVC routing, Razor views, and Bootstrap styling. Includes animal sound playback per category.",
    tech: ["C#", "ASP.NET MVC", ".NET Framework", "Bootstrap"],
    github: "https://github.com/EmilB107/Animalandia",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="mb-6 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
        <div
          key={project.name}
          className="group rounded-lg md:p-5 border border-transparent md:hover:bg-slate-800/50 md:hover:shadow-lg md:hover:border-slate-700 transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-slate-200 font-medium mb-2">{project.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
              {project.note && (
                <p className="mt-2 text-xs text-amber-400/70">⚠ {project.note}</p>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="bg-teal-400/10 text-teal-300 text-xs rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 shrink-0 text-slate-400">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.name}`}
                className="hover:text-teal-300 transition-colors duration-200"
              >
                <GitHubIcon />
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo of ${project.name}`}
                  className="group"
                >
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          </div>
        </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/archive"
          className="inline-flex items-center gap-1 text-slate-200 font-medium text-sm group"
        >
          View Full Project Archive
          <ExternalLinkIcon />
        </Link>
      </div>

    </section>
  );
}
