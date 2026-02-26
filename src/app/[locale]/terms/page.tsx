import { Header, Footer } from '@/components';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Termini di Servizio | LUX' : 'Terms of Service | LUX',
    description: locale === 'it'
      ? 'Termini di servizio di LUX Charter'
      : 'Terms of Service for LUX Charter',
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: February 2024',
      intro: 'Welcome to LUX Charter. By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.',
      sections: [
        {
          title: 'Services',
          content: 'LUX Charter provides luxury RIB charter services in the La Maddalena Archipelago, Costa Smeralda, and Bonifacio areas. Our services include boat rentals with experienced local crew.',
        },
        {
          title: 'Bookings and Reservations',
          content: 'All bookings are subject to availability and confirmation. We reserve the right to refuse or cancel bookings at our discretion. Prices are subject to change without notice.',
        },
        {
          title: 'Cancellation Policy',
          content: 'Cancellations made more than 48 hours before the scheduled departure will receive a full refund. Cancellations within 48 hours may be subject to a cancellation fee. Weather-related cancellations by LUX Charter will be fully refunded or rescheduled.',
        },
        {
          title: 'Liability',
          content: 'LUX Charter maintains appropriate insurance coverage for our vessels and operations. We are not liable for any personal injury, loss, or damage to personal belongings during the charter.',
        },
        {
          title: 'Contact',
          content: 'For questions about these terms, please contact us at: info@lux-charter.com',
        },
      ],
    },
    it: {
      title: 'Termini di Servizio',
      lastUpdated: 'Ultimo aggiornamento: Febbraio 2024',
      intro: 'Benvenuto in LUX Charter. Accedendo al nostro sito web e utilizzando i nostri servizi, accetti di essere vincolato da questi Termini di Servizio e da tutte le leggi e i regolamenti applicabili.',
      sections: [
        {
          title: 'Servizi',
          content: 'LUX Charter fornisce servizi di noleggio RIB di lusso nelle aree dell\'Arcipelago della Maddalena, Costa Smeralda e Bonifacio. I nostri servizi includono noleggio barche con equipaggio locale esperto.',
        },
        {
          title: 'Prenotazioni',
          content: 'Tutte le prenotazioni sono soggette a disponibilità e conferma. Ci riserviamo il diritto di rifiutare o annullare prenotazioni a nostra discrezione. I prezzi sono soggetti a modifiche senza preavviso.',
        },
        {
          title: 'Politica di Cancellazione',
          content: 'Le cancellazioni effettuate più di 48 ore prima della partenza programmata riceveranno un rimborso completo. Le cancellazioni entro 48 ore possono essere soggette a una tariffa di cancellazione. Le cancellazioni dovute al meteo da parte di LUX Charter saranno completamente rimborsate o riprogrammate.',
        },
        {
          title: 'Responsabilità',
          content: 'LUX Charter mantiene una copertura assicurativa appropriata per le nostre imbarcazioni e operazioni. Non siamo responsabili per eventuali lesioni personali, perdite o danni agli effetti personali durante il noleggio.',
        },
        {
          title: 'Contatti',
          content: 'Per domande su questi termini, contattaci a: info@lux-charter.com',
        },
      ],
    },
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-lux-cream">
      <Header locale={locale} />
      <main className="pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1
            className="text-4xl md:text-5xl text-lux-navy mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.title}
          </h1>
          <p className="text-lux-gold text-sm mb-8">{t.lastUpdated}</p>

          <div className="prose prose-lg text-lux-navy/80">
            <p className="lead">{t.intro}</p>

            {t.sections.map((section, index) => (
              <section key={index} className="mt-8">
                <h2 className="text-2xl text-lux-navy mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {section.title}
                </h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-lux-sand">
            <a
              href={`/${locale}`}
              className="text-lux-ocean hover:text-lux-navy transition-colors"
            >
              ← Torna alla Home
            </a>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
