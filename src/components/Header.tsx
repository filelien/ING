import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../logo/image.png';
import { useLanguage } from '../contexts/LanguageContext';
import { useThemeMode } from '../contexts/ThemeModeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
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
          <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="INOV AFRIK" className="w-10 h-10 rounded-full bg-white/5 p-1" />
            <div className="leading-tight">
              <div className={`text-xl font-bold ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>INOV AFRIK</div>
              <div className="text-xs text-emerald-300 uppercase tracking-widest">{t('header.brandSubtitle')}</div>
            </div>
            </Link>
          </motion.div>

          <nav
            className={`hidden lg:flex items-center gap-2 p-2 rounded-full border backdrop-blur-xl ${
              mode === 'clear' ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-700/80'
            }`}
          >
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="relative px-4 py-2.5 rounded-full overflow-hidden">
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="active-nav"
                        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                        className={`absolute inset-0 ${mode === 'clear' ? 'bg-emerald-500' : 'bg-emerald-500/20 border border-emerald-400/30'}`}
                      />
                    )}
                    <motion.span
                      whileHover={{ y: -1 }}
                      className={`relative z-10 text-base xl:text-[17px] font-semibold transition-colors duration-300 ${
                        isActive
                          ? mode === 'clear'
                            ? 'text-white'
                            : 'text-emerald-300'
                          : mode === 'clear'
                          ? 'text-slate-700 hover:text-emerald-600'
                          : 'text-gray-300 hover:text-emerald-300'
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  </>
                )}
              </NavLink>
            ))}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-300 text-base font-semibold shadow-sm"
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
            className={`lg:hidden backdrop-blur-xl ${
              mode === 'clear' ? 'bg-white/95 border-t border-slate-200 shadow-sm' : 'bg-slate-900/95 border-t border-slate-700/70'
            }`}
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-lg font-semibold transition-all duration-300 ${
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
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-6 py-2.5 rounded-full text-center text-lg font-semibold transition-colors duration-300 ${
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
