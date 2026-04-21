import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Users, Sprout, GraduationCap, Heart } from "lucide-react";
import heroCommunity from "@/assets/IMG_20190312_105602.jpg";
import programFarming from "@/assets/program-farming.jpg";
import programBusiness from "@/assets/program-business.jpg";
import programChild from "@/assets/program-child.jpg";
import programSchools from "@/assets/program-schools.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Civicom Aid — Community-Led Development in East Africa" },
      { name: "description", content: "Civicom Aid works across East Africa in remote villages, drylands, and urban slums. Community-designed, community-led, and community-owned programs that create lasting change." },
      { property: "og:title", content: "Civicom Aid — Community-Led Development in East Africa" },
      { property: "og:description", content: "Community-designed, community-led, and community-owned programs helping ultra-poor households move out of extreme poverty across East Africa." },
    ],
  }),
});

const programs = [
  {
    title: "Farming",
    description: "Equipping families with sustainable agriculture techniques, drought-resistant seeds, and irrigation systems to achieve year-round food security.",
    image: programFarming,
    icon: Sprout,
    href: "/programs/farming",
  },
  {
    title: "Micro Businesses",
    description: "Seed capital, mentorship, and market access for women and youth entrepreneurs building livelihoods that sustain entire communities.",
    image: programBusiness,
    icon: Users,
    href: "/programs/micro-businesses",
  },
  {
    title: "Sponsor a Child",
    description: "Comprehensive support — school fees, uniforms, meals, and mentorship — ensuring every sponsored child thrives, not just survives.",
    image: programChild,
    icon: Heart,
    href: "/programs/sponsor-a-child",
  },
  {
    title: "Schools",
    description: "Building classrooms, training teachers, and providing learning materials to bring out-of-school learners back and keep at-risk students enrolled.",
    image: programSchools,
    icon: GraduationCap,
    href: "/programs/schools",
  },
];

const stats = [
  { value: "12,000+", label: "Households reached" },
  { value: "48", label: "Communities served" },
  { value: "3,200+", label: "Children sponsored" },
  { value: "96%", label: "Of funds reach the field" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-[85vh] min-h-[500px] overflow-hidden">
          <img
            src={heroCommunity}
            alt="Aerial view of an East African village with farm plots and community members"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16 lg:pb-24 w-full">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/70 mb-4">
                Dispatches from East Africa
              </p>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.05] max-w-3xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Growth rooted in dignity
              </h1>
              <p className="mt-5 text-lg md:text-xl text-background/85 max-w-xl leading-relaxed">
                Across remote villages, arid drylands, and urban slums, communities are writing their own story of transformation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/donate"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Support Our Work
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-3 text-sm font-semibold text-background hover:bg-background/10 transition-colors"
                >
                  Our Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Field Report</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Community-designed. Community-led. Community-owned.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We don't arrive with a blueprint. We listen first. Every project begins with the community itself — their priorities, their knowledge, their leadership. The result: programs that last because the people who built them stay to run them.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Programs</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Four pathways out of poverty
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <a
                key={program.title}
                href={program.href}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10">
                      <program.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Impact</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Numbers from the field
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-4xl md:text-5xl font-bold text-primary"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
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
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Every contribution writes the next chapter
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Join thousands of supporters helping communities across East Africa build their own future.
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
