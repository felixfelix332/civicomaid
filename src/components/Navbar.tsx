import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const programs = [
  { name: "Agriculture", href: "/programs/agriculture", description: "Sustainable agriculture for food security" },
  { name: "Micro Businesses", href: "/programs/micro-businesses", description: "Economic empowerment through enterprise" },
  { name: "Sponsor a Child", href: "/programs/sponsor-a-child", description: "Education and care for every child" },
  { name: "Schools", href: "/programs/schools", description: "Keeping learners in the classroom" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Civicom Aid
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>

            {/* Programs Dropdown */}
            <div className="relative" onMouseEnter={() => setProgramsOpen(true)} onMouseLeave={() => setProgramsOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Programs
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {programsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="w-64 rounded-lg bg-card border border-border shadow-lg p-2">
                    {programs.map((program) => (
                      <a
                        key={program.name}
                        href={program.href}
                        className="block rounded-md px-3 py-2.5 hover:bg-secondary transition-colors"
                      >
                        <div className="text-sm font-medium text-foreground">{program.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{program.description}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <a
              href="/donate"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Donate
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          <Link to="/" className="block text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Home</Link>
          <div className="space-y-1">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Programs</div>
            {programs.map((p) => (
              <a key={p.name} href={p.href} className="block pl-3 text-sm text-foreground py-1">{p.name}</a>
            ))}
          </div>
          <a href="/about" className="block text-sm font-medium text-foreground">About</a>
          <a href="/contact" className="block text-sm font-medium text-foreground">Contact</a>
          <a href="/donate" className="block text-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Donate</a>
        </div>
      )}
    </nav>
  );
}
