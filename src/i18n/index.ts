import HomeSpanish from "@i18n/home/es.json";
import HomeEnglish from "@i18n/home/en.json";
import HomePortuguese from "@i18n/home/pt.json";

const LANGUAGES_ACTIVES = {
  SPANISH: "es",
  ENGLISH: "en",
  PORTUGUESE: "pt",
};

export const getHomeDataInternational = ({ currentLocale }: { currentLocale: string | undefined }) => {
  if (currentLocale === LANGUAGES_ACTIVES.SPANISH) return HomeSpanish;
  if (currentLocale === LANGUAGES_ACTIVES.ENGLISH) return HomeEnglish;
  if (currentLocale === LANGUAGES_ACTIVES.PORTUGUESE) return HomePortuguese;
  return HomeSpanish;
};
