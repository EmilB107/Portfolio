"use client";

import { useState, useEffect } from "react";
import { GitHubIcon, ExternalLinkIcon } from "@/components/ui/Icons";

export type ArchiveProject = {
  name: string;
  year: string;
  description: string;
  note?: string;
  tech: string[];
  github: string;
  live: string | null;
  desktop: string | null;
  mobile: string | null;
};

export default function ArchiveCard({ project }: { project: ArchiveProject }) {
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const currentImage = view === "desktop" ? project.desktop : project.mobile;
  const hasImages = !!(project.desktop || project.mobile);
  const hasToggle = !!(project.desktop && project.mobile);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  return (
    <>
      <div className="group rounded-lg border border-transparent hover:bg-slate-800/50 hover:shadow-lg hover:border-slate-700 transition-all duration-300 overflow-hidden">
        <div className="flex flex-col md:flex-row md:h-[280px]">

          {/* Image column */}
          <div className="md:w-[38%] shrink-0 flex flex-col">
            {hasImages ? (
              <>
                <div
                  className="relative h-48 md:flex-1 cursor-zoom-in overflow-hidden bg-slate-800"
                  onClick={() => { if (currentImage) { setLightboxOpen(true); setZoomed(false); } }}
                >
                  <img
                    src={currentImage ?? project.desktop ?? ""}
                    alt={`${project.name} ${view} screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {hasToggle && (
                  <div className="flex gap-1 px-3 py-2 border-t border-slate-700/30">
                    <button
                      onClick={(e) => { e.stopPropagation(); setView("desktop"); }}
                      className={`text-xs px-2 py-0.5 rounded-full transition-colors duration-200 ${
                        view === "desktop"
                          ? "bg-teal-400/20 text-teal-300"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      Desktop
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setView("mobile"); }}
                      className={`text-xs px-2 py-0.5 rounded-full transition-colors duration-200 ${
                        view === "mobile"
                          ? "bg-teal-400/20 text-teal-300"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      Mobile
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="h-48 md:flex-1 bg-slate-800/40 border-b md:border-b-0 md:border-r border-slate-700/40 flex items-center justify-center">
                <span className="text-slate-600 text-sm">No preview</span>
              </div>
            )}
          </div>

          {/* Details column */}
          <div className="p-5 flex-1 flex flex-col justify-between gap-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-slate-200 font-medium">{project.name}</h3>
                  <span className="text-slate-500 text-xs font-mono">{project.year}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                {project.note && (
                  <p className="mt-2 text-xs text-amber-400/70">⚠ {project.note}</p>
                )}
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
                    className="hover:text-teal-300 transition-colors duration-200"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span key={tag} className="bg-teal-400/10 text-teal-300 text-xs rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className={`relative ${zoomed ? "overflow-auto max-w-[95vw] max-h-[95vh]" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {!zoomed && (
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-4 -right-4 z-10 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200 text-sm leading-none"
                aria-label="Close lightbox"
              >
                ✕
              </button>
            )}
            <img
              src={currentImage}
              alt={`${project.name} full ${view} screenshot`}
              onClick={() => setZoomed((z) => !z)}
              className={`rounded-lg transition-all duration-200 ${
                zoomed
                  ? "w-auto h-auto max-w-none max-h-none cursor-zoom-out"
                  : "max-w-[90vw] max-h-[90vh] object-contain cursor-zoom-in"
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
}
