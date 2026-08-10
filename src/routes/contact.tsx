import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Civicom Aid" },
      {
        name: "description",
        content: "Get in touch with Civicom Aid about partnerships, volunteering, and community-led development.",
      },
    ],
  }),
});

const contactMethods = [
  {
    title: "Email us",
    detail: "info@civicom.org",
    href: "mailto:info@civicom.org",
    icon: Mail,
  },
  {
    title: "Call or WhatsApp",
    detail: "+254 797 946 000",
    href: "https://wa.me/254797946000",
    icon: MessageCircle,
  },
  {
    title: "Call us",
    detail: "+254 797 946 000",
    href: "tel:+254797946000",
    icon: Phone,
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-secondary pb-16 pt-32 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1
            className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Start a conversation
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Ask about partnerships, volunteering, programme support, or ways to get involved with Civicom Aid.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Reach our team directly
            </h2>
            <div className="mt-8 space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("https") ? "_blank" : undefined}
                  rel={method.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <method.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{method.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{method.detail}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p>Working alongside communities across Kenya and Uganda.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Send an enquiry
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Submitting this form opens your email app with your enquiry ready to send to our team.
            </p>
            <form action="mailto:info@civicom.org" method="post" encType="text/plain" className="mt-7 space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground">Your name</label>
                <input id="name" name="name" required autoComplete="name" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none ring-ring focus:ring-2" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email address</label>
                <input id="email" name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none ring-ring focus:ring-2" />
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium text-foreground">How can we help?</label>
                <select id="subject" name="subject" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none ring-ring focus:ring-2">
                  <option>Partnership enquiry</option>
                  <option>Volunteer or get involved</option>
                  <option>Donation enquiry</option>
                  <option>General enquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea id="message" name="message" required rows={5} className="mt-2 w-full resize-y rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none ring-ring focus:ring-2" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Open email to send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
