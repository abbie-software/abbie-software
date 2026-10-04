import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { ScrollReveal } from "@/src/components/scroll-reveal";
import ContactForm from "@/src/components/contact-form";
import { config } from "@/src/data/config";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full px-6 py-28 md:px-16">
      <ScrollReveal>
        <h2 className="mb-14 text-4xl font-bold leading-tight text-abbie-text sm:text-6xl">
          LET&apos;S WORK
          <br />
          TOGETHER
        </h2>
      </ScrollReveal>

      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-4">
            <p className="text-abbie-text/60">
              Prefer to reach out directly? Find me here:           </p>
            <a
              href={`mailto:${config.email}`}
              className="flex items-center gap-3 rounded-xl border border-abbie-purple/20 bg-abbie-purple/5 px-5 py-4 text-abbie-text transition-colors hover:border-abbie-pink/40"
            >
              <Mail size={20} className="text-abbie-pink" /> {config.email}
            </a>
            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-abbie-purple/20 bg-abbie-purple/5 px-5 py-4 text-abbie-text transition-colors hover:border-abbie-pink/40"
            >
              <SiGithub size={20} className="text-abbie-pink" /> GitHub
            </a>
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-abbie-purple/20 bg-abbie-purple/5 px-5 py-4 text-abbie-text transition-colors hover:border-abbie-pink/40"
            >
              <FaLinkedin size={20} className="text-abbie-pink" /> LinkedIn
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl border border-abbie-purple/20 bg-abbie-purple/5 p-6 md:p-8">
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}