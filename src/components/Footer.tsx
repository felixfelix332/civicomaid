export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Civicom Aid
            </h3>
            <p className="mt-3 text-sm text-background/70 leading-relaxed">
              Community-designed. Community-led. Community-owned. Working across East Africa to build lasting change.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-background/50 mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/programs/agriculture" className="hover:text-background transition-colors">Agriculture</a></li>
              <li><a href="/programs/micro-businesses" className="hover:text-background transition-colors">Micro Businesses</a></li>
              <li><a href="/programs/sponsor-a-child" className="hover:text-background transition-colors">Sponsor a Child</a></li>
              <li><a href="/programs/education" className="hover:text-background transition-colors">Education</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-background/50 mb-4">Organization</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="https://civicom.org" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">civicom.org</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-background/50 mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/donate" className="hover:text-background transition-colors">Donate</a></li>
              <li><a href="/contact" className="hover:text-background transition-colors">Partner With Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background/10 text-center text-xs text-background/40">
          © {new Date().getFullYear()} Civicom Aid. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
