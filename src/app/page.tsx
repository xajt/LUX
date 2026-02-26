import { Header, Footer } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-lux-cream">
      <Header />

      {/* Main content with padding for fixed header */}
      <main className="pt-16 md:pt-20">
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

        {/* Placeholder sections for navigation targets */}
        <section id="about" className="py-20 px-6 bg-lux-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl text-lux-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Chi Siamo
            </h2>
            <p className="text-lux-navy/70 max-w-2xl mx-auto">
              Młody zespół z ponad 10-letnim doświadczeniem operacyjnym w sektorze nautycznym.
              Głęboka znajomość terenu Archipelagu La Maddalena, Costa Smeralda i Bonifacio.
            </p>
          </div>
        </section>

        <section id="boat" className="py-20 px-6 bg-lux-cream">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl text-lux-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Il Mezzo — LUX UNIT
            </h2>
            <p className="text-lux-navy/70 max-w-2xl mx-auto">
              Luksusowy RIB o wysokich osiągach: 400 HP, elektryczny stolik, prywatna kabina z łazienką,
              system audio HERTZ 1000W, lodówka, śruba dziobowa.
            </p>
          </div>
        </section>

        <section id="pricing" className="py-20 px-6 bg-lux-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl text-lux-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Prezzi & Opzioni
            </h2>
            <p className="text-lux-navy/70 max-w-2xl mx-auto">
              Half Day, Full Day, Evening Charter (od maja do sierpnia od 18:00).
              Wliczone: lokalny aperitif, 1 kieliszek wina na osobę, woda.
            </p>
          </div>
        </section>

        <section id="departure" className="py-20 px-6 bg-lux-cream">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl text-lux-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Punti di Partenza
            </h2>
            <p className="text-lux-navy/70 max-w-2xl mx-auto">
              La Maddalena, Palau, Cannigione, Baja Sardinia, Porto Cervo.
              Bezpośredni boarding z wybranych hoteli i marin prywatnych.
            </p>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-lux-sand/30">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl text-lux-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Contatti
            </h2>
            <p className="text-lux-navy/70 max-w-2xl mx-auto mb-8">
              Ready to experience the best of Sardinia by sea?
            </p>
            <a
              href="mailto:info@lux-charter.com"
              className="inline-block bg-lux-ocean text-lux-white px-8 py-3 rounded font-medium hover:bg-lux-navy transition-colors"
            >
              Request Your Charter
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
