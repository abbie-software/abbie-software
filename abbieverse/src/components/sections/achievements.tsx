import { Trophy, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/src/components/scroll-reveal";
import { ACHIEVEMENTS } from "@/src/data/achievements";

function resultStyles(result: string) {
  if (result.toLowerCase().includes("place")) {
    return "bg-abbie-pink/15 text-abbie-pink border-abbie-pink/30";
  }
  return "bg-abbie-purple/15 text-abbie-purple border-abbie-purple/30";
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="w-full px-6 py-28 md:px-16">
      <ScrollReveal>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-abbie-purple">Achievements</p>
        <h2 className="mb-14 text-3xl font-bold text-abbie-text sm:text-4xl">
          Hackathons & competitions
        </h2>
      </ScrollReveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((item, i) => (
          <ScrollReveal key={`${item.title}-${item.event}`} delay={i * 0.08}>
            <div className="group flex h-full flex-col justify-between rounded-2xl border border-abbie-purple/20 bg-abbie-purple/5 p-6 transition-colors hover:border-abbie-pink/40">
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-abbie-pink/10 text-abbie-pink">
                  <Trophy size={20} />
                </div>
                <h3 className="text-lg font-semibold text-abbie-text">{item.title}</h3>
                <p className="mt-1 text-sm text-abbie-text/60">{item.event}</p>
                <p className="mt-2 text-sm text-abbie-text/50">{item.role}</p>

                <span
                  className={`mt-4 inline-block rounded-full border px-3 py-1 text-xs font-medium ${resultStyles(item.result)}`}
                >
                  {item.result}
                </span>
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-1 text-sm text-abbie-pink hover:underline"
                >
                  View on Devpost <ExternalLink size={14} />
                </a>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}