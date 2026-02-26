import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../logo/image.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', to: '/' },
    { label: 'Le Groupe', to: '/groupe' },
    { label: 'Nos Entités', to: '/entites' },
    { label: 'Nos Pôles', to: '/poles' },
    { label: 'Synergie', to: '/synergie' },
    { label: 'Structure', to: '/structure' },
    { label: 'Institutionnel', to: '/institutionnel' },
    { label: 'Projets', to: '/projets' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 text-white">
            <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="INOV AFRIK" className="w-10 h-10 rounded-full bg-white/5 p-1" />
            <div className="leading-tight">
              <div className="text-xl font-bold">INOV AFRIK</div>
              <div className="text-xs text-emerald-300 uppercase tracking-widest">Entreprise & Holding</div>
            </div>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-300 text-sm font-medium"
            >
              Nous Contacter
            </motion.a>
          </nav>

          <button
            className="md:hidden text-white"
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
            className="md:hidden bg-slate-900/95 backdrop-blur-md"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-gray-300 transition-colors duration-300 ${
                      isActive ? 'text-emerald-400' : 'hover:text-emerald-400'
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
                  `px-6 py-2 rounded-full text-center transition-colors duration-300 ${
                    isActive ? 'bg-emerald-600 text-white' : 'bg-emerald-500 text-white hover:bg-emerald-600'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nous Contacter
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
