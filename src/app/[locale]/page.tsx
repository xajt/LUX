import {
  Header,
  Footer,
  Hero,
  ChiSiamo,
  IlMezzo,
  PrezziOpzioni,
  EveningCharter,
  PuntiDiPartenza,
  SupportoRistoranti,
  CostruitoPerQuesteAcque,
  CTASection,
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-lux-cream">
      <Header />

      <main>
        <Hero />
        <ChiSiamo />
        <IlMezzo />
        <PrezziOpzioni />
        <EveningCharter />
        <PuntiDiPartenza />
        <SupportoRistoranti />
        <CostruitoPerQuesteAcque />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
