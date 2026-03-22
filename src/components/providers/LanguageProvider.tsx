"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import siteDictionary from "@/locales/messages.json";

export type Language = "tr" | "en" | "de";

type Dictionary = (typeof siteDictionary)["tr"];

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  dictionary: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function resolveInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "tr";
  }

  const langFromUrl = new URLSearchParams(window.location.search).get("lang");
  if (langFromUrl === "tr" || langFromUrl === "en" || langFromUrl === "de") {
    return langFromUrl;
  }

  const stored = window.localStorage.getItem("optona-lang");
  if (stored === "tr" || stored === "en" || stored === "de") {
    return stored;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("de")) {
    return "de";
  }
  if (browserLanguage.startsWith("en")) {
    return "en";
  }

  return "tr";
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

  useEffect(() => {
    setLanguage(resolveInitialLanguage());
  }, []);

  useEffect(() => {
    window.localStorage.setItem("optona-lang", language);
    document.documentElement.lang = language;

    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState(null, "", url.toString());
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      dictionary: siteDictionary[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider.");
  }

  return context;
}
