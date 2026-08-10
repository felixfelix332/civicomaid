import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpenCheck, Heart, Shirt, Utensils } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import programChild from "@/assets/program-child.jpg";

export const Route = createFileRoute("/programs/sponsor-a-child")({
  component: SponsorAChildPage,
  head: () => ({
    meta: [
      { title: "Sponsor a Child | Civicom Aid" },
      {
        name: "description",
        content: "Help children access education, daily care, and the support they need to thrive through Civicom Aid.",
      },
    ],
  }),
});

const supportAreas = [
  {
    title: "Education access",
    description: "Support can help with school-related costs, learning materials, and the care that keeps children engaged in school.",
    icon: BookOpenCheck,
  },
  {
    title: "Everyday essentials",
    description: "Children need the practical essentials that help them arrive at school ready to learn and participate.",
    icon: Shirt,
  },
  {
    title: "Care and encouragement",
    description: "Lasting progress includes trusted adults, encouragement, and support for a child's wellbeing alongside learning.",
    icon: Heart,
  },
  {
    title: "Nutrition and wellbeing",
    description: "Community support can help address the everyday barriers that make it harder for children to learn and thrive.",
    icon: Utensils,
  },
];

function SponsorAChildPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-16">
        <div className="grid min-h-[560px] lg:grid-cols-2">
          <div className="order-2 flex items-center bg-secondary px-6 py-16 lg:order-1 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl lg:mx-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Sponsor a child</p>
              <h1
                className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Help a child stay on the path to learning
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Every child deserves the opportunity to learn, grow, and imagine a future full of possibility. Your support can help remove the barriers that keep children out of school.
              </p>
              <a
                href="/donate"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Support a child
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="order-1 min-h-[300px] overflow-hidden lg:order-2 lg:min-h-0">
            <img
              src={programChild}
              alt="Children participating in a learning activity"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What sponsorship can support</p>
            <h2
              className="mt-4 text-3xl font-bold text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Support that sees the whole child
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Learning is stronger when children have the tools, care, and encouragement to stay present and keep progressing.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {supportAreas.map((area) => (
              <article key={area.title} className="rounded-2xl border border-border bg-card p-7">
                <area.icon className="h-6 w-6 text-primary" />
                <h3
                  className="mt-5 text-xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
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
            Start with a conversation
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            Contact the Civicom Aid team to learn about the current opportunities to support children&apos;s education and wellbeing.
          </p>
          <a
            href="mailto:info@civicom.org?subject=Sponsor%20a%20child%20enquiry"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
          >
            Email the team
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
