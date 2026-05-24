"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      timer = setTimeout(() => setVisible(false), 1000);
    };
    window.addEventListener("scroll", handleScroll, { once: true, passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden lg:flex fixed right-[max(1.5rem,calc((100vw-80rem)/2-1rem))] top-1/2 -translate-y-1/2 z-50 flex-col items-center transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-6 h-10 rounded-2xl border-2 border-slate-400 flex justify-center items-start pt-2">
        <span className="w-1 h-1 rounded-full bg-slate-400 animate-scroll-dot" />
      </div>
    </div>
  );
}
