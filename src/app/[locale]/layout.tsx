import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: 'LUX | Luxury RIB Charter Sardinia',
      template: '%s | LUX Charter',
    },
    description: t('description') || 'Exclusive RIB charter experience in La Maddalena Archipelago, Costa Smeralda and Bonifacio. Premium boat rentals with local experts.',
    keywords: ['RIB charter', 'Sardinia', 'La Maddalena', 'Costa Smeralda', 'boat rental', 'luxury charter', 'Italy'],
    authors: [{ name: 'LUX Charter' }],
    creator: 'LUX Charter',
    publisher: 'LUX Charter',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      alternateLocale: locale === 'it' ? 'en_US' : 'it_IT',
      title: 'LUX | Luxury RIB Charter Sardinia',
      description: t('description') || 'Exclusive RIB charter experience in La Maddalena Archipelago.',
      siteName: 'LUX Charter',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'LUX Charter - Premium RIB Experience',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'LUX | Luxury RIB Charter Sardinia',
      description: t('description') || 'Exclusive RIB charter experience in La Maddalena Archipelago.',
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en-US': '/en',
        'it-IT': '/it',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  // Ensure valid locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
