import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Direct imports for Turbopack compatibility
import en from '../messages/en.json';
import it from '../messages/it.json';

const allMessages = { en, it };

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure valid locale
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: allMessages[locale as keyof typeof allMessages] || allMessages.en,
  };
});
