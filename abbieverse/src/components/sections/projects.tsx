import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import { ScrollReveal } from "@/src/components/scroll-reveal";
import { PROJECTS } from "@/src/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full px-6 py-28 md:px-16">
      <ScrollReveal>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-abbie-purple">Projects</p>
        <h2 className="mb-14 text-3xl font-bold text-abbie-text sm:text-4xl">Things I&apos;ve built</h2>
      </ScrollReveal>

      <div className="flex flex-col gap-16">
        {PROJECTS.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.1}>
            <div className="grid gap-8 rounded-2xl border border-abbie-purple/20 bg-abbie-purple/5 p-6 md:grid-cols-2 md:p-8">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-abbie-purple/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-abbie-text">{project.title}</h3>
                <p className="mt-2 text-abbie-text/70">{project.description}</p>

                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-abbie-text/50">
                    Problem it solves
                  </h4>
                  <p className="mt-1 text-sm text-abbie-text/70">{project.problem}</p>
                </div>

                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-abbie-text/50">
                    My role
                  </h4>
                  <p className="mt-1 text-sm text-abbie-text/70">{project.role}</p>
                </div>

                {project.techStack.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-abbie-pink/30 bg-abbie-pink/10 px-3 py-1 text-xs text-abbie-text/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.features.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-abbie-text/50">
                      Key features
                    </h4>
                    <ul className="mt-1 list-inside list-disc text-sm text-abbie-text/70">
                      {project.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.challenges && (
                  <div className="mt-4">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-abbie-text/50">
                      Challenges
                    </h4>
                    <p className="mt-1 text-sm text-abbie-text/70">{project.challenges}</p>
                  </div>
                )}

                <div className="mt-6 flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-abbie-purple/40 px-4 py-2 text-sm text-abbie-text transition-colors hover:bg-abbie-purple/10"
                    >
                      <Code2 size={16} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-abbie-pink px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}