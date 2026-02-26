import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import { useLanguage } from '../contexts/LanguageContext';
import { useThemeMode } from '../contexts/ThemeModeContext';

const Hero = () => {
  const { t } = useLanguage();
  const { mode } = useThemeMode();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div
        className={`absolute inset-0 ${
          mode === 'clear'
            ? 'bg-gradient-to-b from-white/40 via-slate-100/50 to-slate-200/70'
            : 'bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/70'
        }`}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            className={`text-4xl md:text-6xl font-bold mb-8 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            className={`text-xl md:text-2xl mb-4 font-light max-w-4xl mx-auto ${
              mode === 'clear' ? 'text-slate-700' : 'text-gray-200'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            {t('hero.text1')}
          </motion.p>

          <motion.p
            className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto ${
              mode === 'clear' ? 'text-slate-600' : 'text-gray-400'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t('hero.text2')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projets"
                className="px-8 py-4 inline-flex bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-300 font-medium"
              >
                {t('hero.cta1')}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className={`px-8 py-4 inline-flex border-2 rounded-full transition-all duration-300 font-medium ${
                  mode === 'clear'
                    ? 'border-slate-700 text-slate-800 hover:bg-slate-800 hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-slate-900'
                }`}
              >
                {t('hero.cta2')}
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ChevronDown className="text-emerald-400" size={32} />
        </motion.div>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${
          mode === 'clear' ? 'from-slate-100 to-transparent' : 'from-slate-950 to-transparent'
        }`}
      />
    </section>
  );
};

export default Hero;
