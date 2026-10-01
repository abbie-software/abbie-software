import { Award, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/src/components/scroll-reveal";
import { CERTIFICATIONS } from "@/src/data/certifications";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="w-full px-6 py-28 md:px-16">
      <ScrollReveal>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-abbie-purple">
          Certifications
        </p>
        <h2 className="mb-14 text-3xl font-bold text-abbie-text sm:text-4xl">
          Continuous learning
        </h2>
      </ScrollReveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert, i) => (
          <ScrollReveal key={cert.title} delay={i * 0.08}>
            <div className="group flex h-full flex-col justify-between rounded-2xl border border-abbie-purple/20 bg-abbie-purple/5 p-6 transition-colors hover:border-abbie-pink/40">
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-abbie-pink/10 text-abbie-pink">
                  <Award size={20} />
                </div>
                <h3 className="text-lg font-semibold text-abbie-text">{cert.title}</h3>
                <p className="mt-1 text-sm text-abbie-text/60">{cert.issuer}</p>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-abbie-text/50">
                {cert.date && <span>{cert.date}</span>}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-abbie-pink hover:underline"
                  >
                    Verify <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}