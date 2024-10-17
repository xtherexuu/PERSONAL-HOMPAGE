import english from "../../resources/locales/en/common.json";
import polish from "../../resources/locales/pl/common.json";

const languages = ["en", "pl"] as const;
export const supportedLanguages = [...languages];
export type Language = (typeof languages)[number];

export type Resource = {
  common: typeof english;
};

export const resources: Record<Language, Resource> = {
  en: {
    common: english,
  },
  pl: {
    common: polish,
  },
};

export const returnLanguageIfSupported = (
  Lang?: string
): Language | undefined => {
  if (supportedLanguages.includes(Lang as Language)) {
    return Lang as Language;
  }
  return undefined;
};
