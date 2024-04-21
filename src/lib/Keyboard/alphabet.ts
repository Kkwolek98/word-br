import type { AvailableLanguage } from "../types/availableLanguages";

export const BASE_LATIN_KEYBOARD = "QWERTYUIOPASDFGHJKLZXCVBNM";
export const ALPHABET: Record<AvailableLanguage, { base: string; special: string }> = {
  en: {
    base: BASE_LATIN_KEYBOARD,
    special: "",
  },
  pl: {
    base: BASE_LATIN_KEYBOARD,
    special: "ĄĆĘŁŃÓŚŹŻ",
  },
} as const;

export type Alphabet = (typeof ALPHABET)["en"];
