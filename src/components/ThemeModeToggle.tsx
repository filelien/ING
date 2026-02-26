import { motion } from 'framer-motion';
import { Moon, Stars } from 'lucide-react';
import { useThemeMode } from '../contexts/ThemeModeContext';
import { useLanguage } from '../contexts/LanguageContext';

const ThemeModeToggle = () => {
  const { mode, toggleMode } = useThemeMode();
  const { t } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.25 }}
      onClick={toggleMode}
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] px-4 py-3 rounded-full border backdrop-blur-md shadow-lg transition-colors inline-flex items-center gap-2 ${
        mode === 'clear'
          ? 'border-slate-300 bg-white/90 text-slate-700 hover:border-emerald-500/70'
          : 'border-emerald-500/40 bg-slate-900/90 text-emerald-300 hover:border-emerald-400/70'
      }`}
      aria-label={mode === 'clear' ? t('mode.switchToNight') : t('mode.switchToClear')}
      title={mode === 'clear' ? t('mode.switchToNight') : t('mode.switchToClear')}
    >
      {mode === 'clear' ? <Stars size={16} /> : <Moon size={16} />}
      <span className="text-sm font-medium">{mode === 'clear' ? t('mode.night') : t('mode.clear')}</span>
    </motion.button>
  );
};

export default ThemeModeToggle;
