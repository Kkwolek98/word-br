export const AVAILABLE_LANGUAGES = ["pl", "en"] as const;
export type AvailableLanguage = (typeof AVAILABLE_LANGUAGES)[number];
