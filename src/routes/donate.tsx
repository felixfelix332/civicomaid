import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, Mail, MessageCircle, Sprout, Users } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/donate")({
  component: DonatePage,
  head: () => ({
    meta: [
      { title: "Donate | Civicom Aid" },
      {
        name: "description",
        content: "Support community-led education, sustainable agriculture, and entrepreneurship with Civicom Aid.",
      },
    ],
  }),
});

const programmes = [
  {
    title: "Education access",
    description: "Help children and young people access learning materials, safe classrooms, and the support to stay in school.",
    icon: Heart,
  },
  {
    title: "Sustainable farming",
    description: "Help farming families build healthier soils, grow food reliably, and strengthen their livelihoods.",
    icon: Sprout,
  },
  {
    title: "Entrepreneurship",
    description: "Help women and young entrepreneurs access skills, mentorship, and opportunities to grow an income.",
    icon: Users,
  },
];

function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary pb-20 pt-32 text-center lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Donate</p>
          <h1
            className="mt-4 text-4xl font-bold leading-tight text-primary-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Invest in a community&apos;s future
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85">
            Your support helps communities build pathways to education, food security, and sustainable incomes.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Where your support can help</p>
            <h2
              className="mt-4 text-3xl font-bold text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Choose the change you want to support
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {programmes.map((programme) => (
              <article key={programme.title} className="rounded-2xl border border-border bg-card p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <programme.icon className="h-5 w-5 text-primary" />
                </div>
                <h3
                  className="mt-5 text-xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {programme.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{programme.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8">
            <Mail className="h-6 w-6 text-primary" />
            <h2
              className="mt-5 text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Start a donation enquiry
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tell us how you would like to support the work. Our team can share the available giving options and next steps.
            </p>
            <a
              href="mailto:info@civicom.org?subject=Donation%20enquiry"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Email the team
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <MessageCircle className="h-6 w-6 text-primary" />
            <h2
              className="mt-5 text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ask on WhatsApp
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Prefer a quick conversation? Contact Civicom Aid directly on WhatsApp to discuss your intended gift.
            </p>
            <a
              href="https://wa.me/254797946000?text=Hello%20Civicom%20Aid%2C%20I%20would%20like%20to%20make%20a%20donation."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Message on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl px-6 text-center text-sm leading-relaxed text-muted-foreground lg:px-8">
          Online card processing is not connected to this website yet. Please use one of the options above so the team can provide a secure way to give.
        </p>
      </section>

      <Footer />
    </div>
  );
}
