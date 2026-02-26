import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../logo/image.png';
import { useLanguage } from '../contexts/LanguageContext';
import { languageOptions } from '../i18n/translations';
import { useThemeMode } from '../contexts/ThemeModeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { mode } = useThemeMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.group'), to: '/groupe' },
    { label: t('nav.poles'), to: '/poles' },
    { label: t('nav.projects'), to: '/projets' },
    { label: t('nav.contact'), to: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? mode === 'clear'
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200'
            : 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3 text-white">
            <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="INOV AFRIK" className="w-10 h-10 rounded-full bg-white/5 p-1" />
            <div className="leading-tight">
              <div className="text-xl font-bold">INOV AFRIK</div>
              <div className="text-xs text-emerald-300 uppercase tracking-widest">{t('header.brandSubtitle')}</div>
            </div>
            </Link>
          </motion.div>

          <nav
            className={`hidden lg:flex items-center gap-2 p-1.5 rounded-full border backdrop-blur-md ${
              mode === 'clear' ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-700/80'
            }`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? mode === 'clear'
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                      : mode === 'clear'
                      ? 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
                      : 'text-gray-300 hover:text-emerald-300 hover:bg-slate-800/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as typeof language)}
              className={`text-xs rounded-full px-3 py-2 border transition-colors ${
                mode === 'clear'
                  ? 'bg-white border-slate-300 text-slate-700'
                  : 'bg-slate-900/90 border-slate-700 text-gray-200'
              }`}
              aria-label={t('header.language')}
            >
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-300 text-sm font-medium shadow-sm"
            >
              {t('header.contactCta')}
            </motion.a>
          </nav>

          <button
            className={`lg:hidden ${mode === 'clear' ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden backdrop-blur-md ${
              mode === 'clear' ? 'bg-white/95 border-t border-slate-200 shadow-sm' : 'bg-slate-900/95 border-t border-slate-700/70'
            }`}
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? mode === 'clear'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-emerald-500/15 text-emerald-300'
                        : mode === 'clear'
                        ? 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/70'
                        : 'text-gray-300 hover:text-emerald-300 hover:bg-slate-800/60'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-1">
                <label className={`block text-xs mb-2 ${mode === 'clear' ? 'text-slate-500' : 'text-gray-400'}`}>{t('header.language')}</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as typeof language)}
                  className={`w-full text-sm rounded-lg px-3 py-2 border ${
                    mode === 'clear'
                      ? 'bg-white border-slate-300 text-slate-700'
                      : 'bg-slate-900 border-slate-700 text-gray-200'
                  }`}
                >
                  {languageOptions.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-6 py-2 rounded-full text-center transition-colors duration-300 ${
                    isActive ? 'bg-emerald-600 text-white' : 'bg-emerald-500 text-white hover:bg-emerald-600'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('header.contactCta')}
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
