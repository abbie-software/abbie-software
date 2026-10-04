import { GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/src/components/scroll-reveal";
import { EDUCATION } from "@/src/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="w-full px-6 py-28 md:px-16">
      <ScrollReveal>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-abbie-purple">Education</p>
        <h2 className="mb-14 text-3xl font-bold text-abbie-text sm:text-4xl">Academic background</h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-col gap-8 rounded-2xl border border-abbie-purple/20 bg-abbie-purple/5 p-8 md:flex-row md:items-start">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-abbie-pink/10 text-abbie-pink">
            <GraduationCap size={26} />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-abbie-text">{EDUCATION.degree}</h3>
              <span className="text-sm text-abbie-text/50">
                {EDUCATION.startYear} — {EDUCATION.endYear}
              </span>
            </div>
            <p className="mt-1 text-abbie-text/60">
              {EDUCATION.institution}, {EDUCATION.location}
            </p>

            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-abbie-text/50">
              Relevant coursework
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {EDUCATION.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-abbie-pink/30 bg-abbie-pink/10 px-4 py-1.5 text-sm text-abbie-text/80"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}