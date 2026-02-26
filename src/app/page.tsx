export default function Home() {
  return (
    <div className="min-h-screen bg-lux-cream">
      {/* Header placeholder */}
      <header className="sticky top-0 z-50 bg-lux-white/80 backdrop-blur-md border-b border-lux-sand">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-lux-ocean" style={{ fontFamily: 'var(--font-heading)' }}>
            LUX
          </h1>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-lux-navy hover:text-lux-ocean transition-colors">About</a>
            <a href="#boat" className="text-lux-navy hover:text-lux-ocean transition-colors">The Boat</a>
            <a href="#pricing" className="text-lux-navy hover:text-lux-ocean transition-colors">Pricing</a>
            <button className="bg-lux-ocean text-lux-white px-6 py-2 rounded hover:bg-lux-navy transition-colors">
              Request Charter
            </button>
          </nav>
        </div>
      </header>

      {/* Hero placeholder */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-lux-ocean to-lux-navy">
        <div className="text-center text-lux-white px-6">
          <h2 className="text-5xl md:text-7xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            LUX
          </h2>
          <p className="text-xl md:text-2xl font-light mb-4 text-lux-sand">
            Luxury RIB Charter Sardinia
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            Discover the pristine waters of La Maddalena Archipelago with our premium charter experience.
          </p>
          <button className="bg-lux-gold text-lux-navy px-8 py-3 text-lg font-medium rounded hover:bg-lux-sand transition-colors">
            Request Your Charter
          </button>
        </div>
      </section>

      {/* Design System Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl text-center mb-12 text-lux-navy" style={{ fontFamily: 'var(--font-heading)' }}>
            Design System Preview
          </h3>

          {/* Colors */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-lux-ocean mb-2"></div>
              <p className="text-sm text-lux-navy">Ocean</p>
              <p className="text-xs text-lux-navy/60">#1E3A5F</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-lux-sand mb-2"></div>
              <p className="text-sm text-lux-navy">Sand</p>
              <p className="text-xs text-lux-navy/60">#F5E6D3</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-lux-gold mb-2"></div>
              <p className="text-sm text-lux-navy">Gold</p>
              <p className="text-xs text-lux-navy/60">#C9A962</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-lux-cream border border-lux-sand mb-2"></div>
              <p className="text-sm text-lux-navy">Cream</p>
              <p className="text-xs text-lux-navy/60">#FAF8F5</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-lux-navy mb-2"></div>
              <p className="text-sm text-lux-navy">Navy</p>
              <p className="text-xs text-lux-navy/60">#0A1628</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-lux-white border border-lux-sand mb-2"></div>
              <p className="text-sm text-lux-navy">White</p>
              <p className="text-xs text-lux-navy/60">#FFFFFF</p>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-6 text-center">
            <div>
              <h1 className="text-5xl text-lux-navy" style={{ fontFamily: 'var(--font-heading)' }}>
                Heading: Cormorant
              </h1>
              <p className="text-sm text-lux-navy/60 mt-2">Elegant serif for headings</p>
            </div>
            <div>
              <p className="text-2xl text-lux-navy">
                Body: Outfit — Clean, modern sans-serif for body text
              </p>
              <p className="text-sm text-lux-navy/60 mt-2">Warm and readable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="bg-lux-navy text-lux-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>LUX</h2>
          <p className="text-lux-sand mb-6">Luxury RIB Charter Sardinia</p>
          <div className="flex justify-center gap-6 mb-6">
            <span>info@lux-charter.com</span>
            <span>@luxcharter</span>
            <span>+39 xxx xxx xxxx</span>
          </div>
          <p className="text-sm opacity-60">&copy; 2024 LUX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
