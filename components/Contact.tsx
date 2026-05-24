import { ExternalLinkIcon } from "@/components/ui/Icons";

const EMAIL = "johnemilbragais@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-0 lg:scroll-mt-24">
      <div className="mb-6 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Contact</h2>
      </div>
      <div className="flex flex-col gap-4 max-w-md">
      <p className="text-slate-400 leading-relaxed">
        I'm currently open to work and internship opportunities! Whether you have a question,
        a project idea, or just want to connect, my inbox is always open and I'll do my best
        to get back to you.
      </p>
      <a
        href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-300 hover:underline font-medium"
      >
        {EMAIL}
      </a>
      <a
        href="#"
        className="text-slate-200 text-sm font-medium hover:text-teal-300 transition-colors duration-300 group inline-flex items-center gap-1 mt-2"
      >
        View Full Résumé
        <ExternalLinkIcon />
      </a>
      </div>
    </section>
  );
}
