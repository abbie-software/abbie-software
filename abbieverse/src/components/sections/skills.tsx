import { Sparkles } from "lucide-react";
import { ScrollReveal } from "@/src/components/scroll-reveal";
import { SKILL_CATEGORIES } from "@/src/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full px-6 py-28 md:px-16">
      <ScrollReveal>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-abbie-purple">Tech Stack</p>
        <h2 className="mb-14 text-3xl font-bold text-abbie-text sm:text-4xl">
          Tools I build with
        </h2>
      </ScrollReveal>

      <div className="flex flex-col gap-14">
        {SKILL_CATEGORIES.map((category, i) => (
          <ScrollReveal key={category.title} delay={i * 0.05}>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-abbie-text/50">
              {category.title}
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  style={{ "--skill": skill.color } as React.CSSProperties}
                  className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-abbie-purple/20 bg-abbie-purple/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--skill)] hover:shadow-[0_10px_40px_-12px_var(--skill)]"
                >
                  <span
                    aria-hidden
                    style={{ background: "var(--skill)" }}
                    className="pointer-events-none absolute -top-6 h-16 w-16 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-60"
                  />
                  {skill.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      loading="lazy"
                      className="relative size-9 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 md:size-10"
                    />
                  ) : (
                    <Sparkles className="relative size-9 text-abbie-pink md:size-10" />
                  )}
                  <span className="relative text-center text-xs font-medium text-abbie-text/80 transition-colors group-hover:text-abbie-text md:text-sm">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}