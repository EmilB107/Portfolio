export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="mb-6 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-slate-400 leading-relaxed">
          I'm a{" "}
          <span className="text-teal-300">Computer Science graduate</span> based in the Philippines
          who enjoys building clean, responsive web experiences. I've worked across different
          environments, from supporting educational platforms at{" "}
          <span className="text-teal-300">Cerebro</span>, a Philippines-based ed-tech company, to
          shipping production frontend work at{" "}
          <span className="text-teal-300">Countable Web Productions</span>, a Canada-based agency.
        </p>
        <p className="text-slate-400 leading-relaxed">
          I like working where design meets engineering: turning Figma mocks into{" "}
          <span className="text-teal-300">pixel-perfect, accessible interfaces</span> and building
          features that feel polished end-to-end. My day-to-day stack is{" "}
          <span className="text-teal-300">Next.js, React, and Tailwind CSS</span>, and I've been
          going deeper into the backend too, building a full-stack wallet app with{" "}
          <span className="text-teal-300">Spring Boot, Angular, and PostgreSQL</span> that handles
          authentication, ledger-based transfers, and automated testing.
        </p>
      </div>
    </section>
  );
}
