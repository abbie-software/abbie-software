import { ScrollReveal } from "@/src/components/scroll-reveal";

const FOCUS_AREAS = ["Software Development", "Frontend", "React & TypeScript", "UI/UX", "Hackathons"];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full px-6 py-28 md:px-16">
      <ScrollReveal>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-abbie-purple">About Me</p>
      </ScrollReveal>

      <div className="grid gap-12 md:grid-cols-2">
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl font-bold text-abbie-text sm:text-4xl">
            A closer look at who I am
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-abbie-text/70">
            I&apos;m Abigail Gathoni, a software developer and a BSc Mathematics and Computer
            Science student at JKUAT in Nairobi, Kenya. I enjoy turning complex ideas into
            interfaces that feel simple and alive ~ most of my recent work has come out of
            hackathons and fast-moving team projects, where I&apos;ve led the frontend while
            picking up more backend and systems experience along the way. My goal is to grow into
            a full-stack developer who&apos;s just as comfortable shipping a polished UI as
            designing the system behind it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl border border-abbie-purple/20 bg-abbie-purple/5 p-8">
            <h3 className="text-sm uppercase tracking-[0.2em] text-abbie-purple">Focus areas</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {FOCUS_AREAS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-abbie-pink/30 bg-abbie-pink/10 px-4 py-1.5 text-sm text-abbie-text/80"
                >
                  {item}
                </span>
              ))}
            </div>

            <h3 className="mt-8 text-sm uppercase tracking-[0.2em] text-abbie-purple">
              Currently
            </h3>
            <p className="mt-3 text-abbie-text/70">
              Studying Mathematics and Computer Science at JKUAT, building projects that mix
              frontend craft with real-world problem solving.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}