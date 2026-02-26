import { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'clear' | 'night';

type ThemeModeContextType = {
  mode: ThemeMode;
  toggleMode: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(undefined);

export const ThemeModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('inov_mode') as ThemeMode | null;
    return saved ?? 'clear';
  });

  useEffect(() => {
    localStorage.setItem('inov_mode', mode);
    document.body.classList.toggle('mode-clear', mode === 'clear');
    document.body.classList.toggle('mode-night', mode === 'night');
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'clear' ? 'night' : 'clear'));
  };

  return <ThemeModeContext.Provider value={{ mode, toggleMode }}>{children}</ThemeModeContext.Provider>;
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeModeProvider');
  }
  return context;
};
