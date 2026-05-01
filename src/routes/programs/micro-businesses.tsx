import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Users } from "lucide-react";

export const Route = createFileRoute("/programs/micro-businesses")({
  component: MicroBusinessesPage,
  head: () => ({
    meta: [
      { title: "Micro Businesses — Civicom Aid" },
      { name: "description", content: "Helping small businesses thrive and prosper across East Africa through hubs in Likoni and Kinango." },
    ],
  }),
});

const projects = [
  {
    name: "Likoni Small Businesses Hub",
    location: "Likoni, Mombasa County",
    description:
      "Based in the densely populated Likoni ferry corridor, this hub provides women and youth entrepreneurs with seed capital, business skills training, and access to wider Mombasa markets — turning informal trades into sustainable livelihoods.",
    image: "https://placehold.co/800x500/7c4a6e/ffffff?text=Likoni+Small+Businesses+Hub",
    alt: "Entrepreneurs at the Likoni Small Businesses Hub",
  },
  {
    name: "Kinango Small Businesses Hub",
    location: "Kinango, Kwale County",
    description:
      "In rural Kwale County, the Kinango hub equips smallholder traders and artisans with mentorship, group savings structures, and cooperative purchasing power — helping micro-enterprises grow beyond subsistence and into thriving local businesses.",
    image: "https://placehold.co/800x500/8a5a3e/ffffff?text=Kinango+Small+Businesses+Hub",
    alt: "Entrepreneurs at the Kinango Small Businesses Hub",
  },
];

function MicroBusinessesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10">
              <Users className="h-4 w-4 text-primary" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Programs / Micro Businesses
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Helping small businesses thrive and prosper
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Our small business hubs give entrepreneurs the capital, skills, and networks to turn ideas into income — and income into lasting economic independence for entire communities.
          </p>
        </div>
      </section>

      {/* Project Cards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    {project.location}
                  </p>
                  <h2
                    className="text-xl font-bold text-foreground mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.name}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-primary-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Invest in an entrepreneur today
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Your support funds training, seed capital, and the ongoing mentorship that helps small businesses grow into engines of community prosperity.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-background/90 transition-colors"
            >
              Donate Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
