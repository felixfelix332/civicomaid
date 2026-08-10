import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, HandHeart, Sprout, Users } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import heroCommunity from "@/assets/hero-community.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Civicom Aid" },
      {
        name: "description",
        content:
          "Learn how Civicom Aid partners with communities across Kenya and Uganda to create lasting pathways out of poverty.",
      },
    ],
  }),
});

const values = [
  {
    title: "Community-led",
    description:
      "People closest to the challenge lead the decisions, set priorities, and shape each project from the start.",
    icon: Users,
  },
  {
    title: "Built to last",
    description:
      "We pair practical tools with skills, local leadership, and partnerships that can continue long after a project begins.",
    icon: Sprout,
  },
  {
    title: "Rooted in dignity",
    description:
      "We work alongside communities, recognising their knowledge, resilience, and right to determine their own future.",
    icon: HandHeart,
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src={heroCommunity}
            alt="Community members gathered in an East African village"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/70">About Civicom Aid</p>
          <h1
            className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-background md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Communities together, designing their future
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/85">
            We partner with communities across Kenya and Uganda to expand access to education, sustainable agriculture, and income-generating opportunities.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our purpose</p>
            <h2
              className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Reducing poverty at its roots
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Poverty affects every part of a community. When children cannot access school, farmland loses its fertility, or parents lack a steady income, the effects can carry into the next generation.
            </p>
            <p>
              Civicom Aid works with families, farmers, educators, and entrepreneurs to address these connected challenges together. Each initiative is designed with the people it serves and strengthened by local ownership.
            </p>
            <p>
              Our vision is for thriving, self-reliant communities where every person can learn, farm, and earn.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How we work</p>
            <h2
              className="mt-4 text-3xl font-bold text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Change grows from within
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-border bg-card p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3
                  className="mt-5 text-xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-center lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-primary-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Be part of the work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            There are many ways to stand with communities creating lasting change.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
          >
            Contact us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
