
/// Languages Actives
const LANGUAGES_ACTIVES = {
  SPANISH: "es",
  ENGLISH: "en",
  PORTUGUESE: "pt",
};

// Home Page Internationalization
import HomeSpanish from "@i18n/home/es.json";
import HomeEnglish from "@i18n/home/en.json";
import HomePortuguese from "@i18n/home/pt.json";

const { SPANISH, ENGLISH, PORTUGUESE } = LANGUAGES_ACTIVES;

/**
 * Get the home data according to the language
 * @param currentLocale
 */
export const getHomeDataInternational = ({ currentLocale }: { currentLocale: string | undefined }) => {
  if (currentLocale === SPANISH) return HomeSpanish;
  if (currentLocale === ENGLISH) return HomeEnglish;
  if (currentLocale === PORTUGUESE) return HomePortuguese;
  return HomeSpanish;
};
