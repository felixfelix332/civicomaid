import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Sprout } from "lucide-react";

export const Route = createFileRoute("/programs/agriculture")({
  component: AgriculturePage,
  head: () => ({
    meta: [
      { title: "Agriculture — Civicom Aid" },
      { name: "description", content: "Helping farmers thrive and prosper across East Africa through resilient farmer hubs in Budini, Kinango, and Turkana." },
    ],
  }),
});

const projects = [
  {
    name: "Budini Resilient Farmers Hub",
    location: "Budini, Kenya",
    description:
      "A community-led hub supporting smallholder farmers in Budini with drought-resistant seed varieties, irrigation support, and collective market access — giving families year-round food security and a steady income.",
    image: "https://placehold.co/800x500/4a7c59/ffffff?text=Budini+Resilient+Farmers+Hub",
    alt: "Farmers working in the Budini Resilient Farmers Hub",
  },
  {
    name: "Kinango Resilient Farmers Hub",
    location: "Kinango, Kwale County",
    description:
      "Serving the arid lowlands of Kwale County, the Kinango hub equips farming households with climate-smart agronomy training, storage solutions, and cooperative structures that reduce post-harvest loss.",
    image: "https://placehold.co/800x500/5a8a3e/ffffff?text=Kinango+Resilient+Farmers+Hub",
    alt: "Farmers working in the Kinango Resilient Farmers Hub",
  },
  {
    name: "Turkana Resilient Farmers Hub",
    location: "Turkana County, Kenya",
    description:
      "In one of Kenya's driest regions, the Turkana hub introduces solar-powered micro-irrigation, indigenous crop knowledge, and farmer field schools to help pastoralist communities diversify into sustainable food production.",
    image: "https://placehold.co/800x500/6b7c3a/ffffff?text=Turkana+Resilient+Farmers+Hub",
    alt: "Farmers working in the Turkana Resilient Farmers Hub",
  },
];

function AgriculturePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10">
              <Sprout className="h-4 w-4 text-primary" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Programs / Agriculture
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Helping farmers thrive and prosper
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Across East Africa's most challenging landscapes, our resilient farmer hubs put communities in control — with the tools, training, and market connections needed to build lasting food security.
          </p>
        </div>
      </section>

      {/* Project Cards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            Support a farming community today
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Your contribution funds seeds, irrigation, training, and the ongoing support that helps families feed themselves and their neighbours.
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
