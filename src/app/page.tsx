import { Header, Footer, Hero } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-lux-cream">
      <Header />

      {/* Main content with padding for fixed header */}
      <main>
        {/* Hero Section */}
        <Hero />

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
