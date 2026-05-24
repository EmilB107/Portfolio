type Job = {
  dates: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  tech: string[];
};

import { ExternalLinkIcon } from "@/components/ui/Icons";

const jobs: Job[] = [
  {
    dates: "Nov 2025 — May 2026",
    title: "Frontend Developer Intern",
    company: "Countable Web Productions",
    companyUrl: "https://countable.ca/",
    description:
      "Interned at Countable, contributing to Cortico — a Canadian healthcare patient engagement platform serving thousands of healthcare professionals across Canada. Worked across the full frontend lifecycle through a ticket-based Scrum workflow, translating design mockups from Figma or Adobe XD into responsive UI, as well as building features and fixing bugs from spec-only tickets. Stack included Riot.js, Next.js, and Django templates on the frontend, with exposure to Django's backend layer via Django REST Framework.",
    tech: ["Next.js", "Riot.js", "Django", "Django REST Framework", "REST APIs", "Git", "Docker", "Debugging"],
  },
  {
    dates: "Jul 2025 — Sep 2025",
    title: "Information Technology Intern",
    company: "Cerebro",
    companyUrl: "https://cerebro.ph/",
    description:
      "Provided hands-on support for the Learning Management System (LMS) and Student Information System, assisting staff with account creation, password resets, fee assignment, and course management. Worked extensively on Moodle — creating and assigning categories, fixing broken courses, and deploying updated educational content.",
    tech: ["IT Service Management", "Learning Management Systems", "Student Information System", "Educational Technology", "Moodle"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="mb-6 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>
      <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div
              key={job.title + job.company}
              className="group rounded-lg md:p-5 border border-transparent md:hover:bg-slate-800/50 md:hover:shadow-lg md:hover:border-slate-700 transition-all duration-300"
            >
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">{job.dates}</p>
              <h3 className="text-slate-200 font-medium mb-2 flex items-center gap-1 flex-wrap">
                {job.title} ·{" "}
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-teal-300 inline-flex items-center gap-1"
                >
                  {job.company}
                  <ExternalLinkIcon />
                </a>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{job.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tech.map((tag) => (
                  <span
                    key={tag}
                    className="bg-teal-400/10 text-teal-300 text-xs rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
