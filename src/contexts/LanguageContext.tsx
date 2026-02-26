import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LanguageCode, translations } from '../i18n/translations';

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('inov_lang') as LanguageCode | null;
    return saved ?? 'fr';
  });

  useEffect(() => {
    localStorage.setItem('inov_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = useMemo(() => {
    return (key: string) => translations[language][key] ?? translations.fr[key] ?? key;
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
