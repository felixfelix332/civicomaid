import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/programs/education")({
  component: EducationPage,
  head: () => ({
    meta: [
      { title: "Education — Civicom Aid" },
      { name: "description", content: "Helping young learners thrive and succeed across East Africa through hubs in Kyani, Likoni, and beyond." },
    ],
  }),
});

const projects = [
  {
    name: "Kyani Learning Hub",
    location: "Kyani, Kenya",
    description:
      "The Kyani Learning Hub brings quality education to children in an underserved rural community — providing trained teachers, learning materials, and a safe school environment that keeps learners enrolled and progressing.",
    image: "https://placehold.co/800x500/3a5f8a/ffffff?text=Kyani+Learning+Hub",
    alt: "Students at the Kyani Learning Hub",
  },
  {
    name: "Likoni Youth Hub",
    location: "Likoni, Mombasa County",
    description:
      "Serving out-of-school youth in the Likoni corridor, this hub combines catch-up education, vocational skills, and mentorship — giving young people a second pathway into learning and a foundation for self-reliance.",
    image: "https://placehold.co/800x500/2e6b5e/ffffff?text=Likoni+Youth+Hub",
    alt: "Young people at the Likoni Youth Hub",
  },
  {
    name: "Child Education Hub",
    location: "East Africa",
    description:
      "A flagship initiative supporting sponsored children across multiple communities with school fees, uniforms, meals, and wrap-around care — ensuring every child not only attends school but thrives within it.",
    image: "https://placehold.co/800x500/5a3e7c/ffffff?text=Child+Education+Hub",
    alt: "Children at the Child Education Hub",
  },
];

function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Programs / Education
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Helping young learners thrive and succeed
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            From rural classrooms to urban youth hubs, we work alongside communities to keep children in school, support out-of-school learners, and build the foundations for a generation to lead their own futures.
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
            Give a child the gift of education
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Your support funds school fees, learning materials, trained teachers, and the daily care that keeps children in classrooms and on track for a brighter future.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-background/90 transition-colors"
            >
              Donate Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/programs/sponsor-a-child"
              className="inline-flex items-center rounded-full border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Sponsor a Child
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
