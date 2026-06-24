export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="mb-6 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-slate-400 leading-relaxed">
          I'm a graduating{" "}
          <span className="text-teal-300">Computer Science student</span> based in the Philippines
          with a passion for building clean, responsive web experiences. I've had the opportunity to
          work across different environments — from supporting educational platforms at{" "}
          <span className="text-teal-300">Cerebro</span>, a Philippines-based ed-tech company, to
          shipping production frontend work at{" "}
          <span className="text-teal-300">Countable Web Productions</span>, a Canada-based agency.
        </p>
        <p className="text-slate-400 leading-relaxed">
          I enjoy working close to the intersection of design and engineering — translating Figma
          mocks into{" "}
          <span className="text-teal-300">pixel-perfect, accessible interfaces</span> and building
          features that feel polished end-to-end. My stack leans towards{" "}
          <span className="text-teal-300">Next.js, React, and Tailwind CSS</span>, though I'm
          comfortable picking up new tools as the project demands.
        </p>
      </div>
    </section>
  );
}
