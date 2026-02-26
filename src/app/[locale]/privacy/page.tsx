import { getTranslations } from 'next-intl/server';
import { Header, Footer } from '@/components';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Privacy Policy | LUX' : 'Privacy Policy | LUX',
    description: locale === 'it'
      ? 'Informativa sulla privacy di LUX Charter'
      : 'Privacy Policy for LUX Charter',
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: February 2024',
      intro: 'At LUX Charter, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
      sections: [
        {
          title: 'Information We Collect',
          content: 'We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.',
        },
        {
          title: 'Personal Information',
          content: 'The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. This may include: name, email address, phone number, and booking preferences.',
        },
        {
          title: 'How We Use Your Information',
          content: 'We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes based on our legitimate business interests, in order to enter into or perform a contract with you, or with your consent.',
        },
        {
          title: 'Contact Us',
          content: 'If you have questions or comments about this privacy policy, please contact us at: info@lux-charter.com',
        },
      ],
    },
    it: {
      title: 'Privacy Policy',
      lastUpdated: 'Ultimo aggiornamento: Febbraio 2024',
      intro: 'In LUX Charter prendiamo sul serio la tua privacy. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulgiamo e proteggiamo le tue informazioni quando visiti il nostro sito web o utilizzi i nostri servizi.',
      sections: [
        {
          title: 'Informazioni che Raccogliamo',
          content: 'Possiamo raccogliere informazioni personali che ci fornisci volontariamente quando esprimi interesse a ottenere informazioni su di noi o sui nostri prodotti e servizi, quando partecipi ad attività sul sito web, o quando ci contatti.',
        },
        {
          title: 'Informazioni Personali',
          content: 'Le informazioni personali che raccogliamo dipendono dal contesto delle tue interazioni con noi e dal sito web, dalle scelte che fai e dai prodotti e funzionalità che utilizzi. Questo può includere: nome, indirizzo email, numero di telefono e preferenze di prenotazione.',
        },
        {
          title: 'Come Utilizziamo le Tue Informazioni',
          content: 'Utilizziamo le informazioni personali raccolte tramite il nostro sito web per una varietà di scopi commerciali descritti di seguito. Elaboriamo le tue informazioni personali per questi scopi sulla base dei nostri legittimi interessi commerciali.',
        },
        {
          title: 'Contattaci',
          content: 'Se hai domande o commenti su questa informativa sulla privacy, contattaci a: info@lux-charter.com',
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
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
