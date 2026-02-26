import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../logo/image.png';
import { useLanguage } from '../contexts/LanguageContext';
import { useThemeMode } from '../contexts/ThemeModeContext';
import { languageOptions } from '../i18n/translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language, setLanguage, t } = useLanguage();
  const { mode } = useThemeMode();
  const currentLanguageLabel = languageOptions.find((option) => option.code === language)?.label ?? 'Français';

  const footerLinks = {
    Services: ['Conseil', 'Études', 'Réalisation', 'Maintenance'],
    Entreprise: ['À propos', 'Projets', 'Carrières', 'Contact'],
    Institutionnel: ["Politique de confidentialité", "Conditions d'utilisation", 'Mentions légales', 'RGPD'],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: 'mailto:contact@inovafrik.com', label: 'Email' },
  ];

  return (
    <footer className={`${mode === 'clear' ? 'bg-slate-100 border-t border-slate-300' : 'bg-slate-950 border-t border-slate-900'}`}>
      <div className="container mx-auto px-6 py-16 flex flex-col items-center text-center gap-12">
        <div className="flex flex-col items-center gap-5">
          <div className="relative">
            <motion.div
              aria-hidden
              animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.08, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-8 md:-inset-10 rounded-full bg-emerald-400/30 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -inset-4 md:-inset-5 rounded-full bg-cyan-400/20 blur-xl"
            />
            <img
              src={Logo}
              alt="INOV AFRIK"
              className="relative w-40 h-40 md:w-52 md:h-52 rounded-2xl shadow-2xl ring-2 ring-emerald-400/60 bg-white/10 backdrop-blur"
            />
          </div>
          <h3 className="text-2xl font-bold text-white">
            <span className="text-emerald-400">INOV</span> AFRIK
          </h3>
          <p className={`${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'} max-w-2xl leading-relaxed`}>
            INOV AFRIK conçoit, sécurise et réalise des projets technologiques, énergétiques et industriels adaptés aux réalités du terrain africain.
          </p>
          <p className={`${mode === 'clear' ? 'text-slate-500' : 'text-gray-500'} text-sm max-w-2xl leading-relaxed`}>
            Des références concrètes, une équipe certifiée (Oracle, AWS, Azure, ISO 27001, CISSP, CKA) et une gouvernance transparente (RCCM: TG-LFW-01-2023-A10-02858).
          </p>
          <div className="w-full max-w-xl">
            <label className={`block text-xs mb-2 ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}>{t('header.language')}</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as typeof language)}
              className={`w-full text-sm md:text-base rounded-xl px-4 py-3 border transition-colors ${
                mode === 'clear'
                  ? 'bg-white border-slate-300 text-slate-700'
                  : 'bg-slate-900 border-slate-700 text-gray-200'
              }`}
              aria-label={t('header.language')}
            >
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className={`flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.18em] ${mode === 'clear' ? 'text-emerald-700' : 'text-emerald-300'}`}>
            <span className={`px-3 py-1 border rounded-full ${mode === 'clear' ? 'border-emerald-500/40 bg-white/70' : 'border-emerald-500/50'}`}>Togo · Afrique de l'Ouest</span>
            <span className={`px-3 py-1 border rounded-full ${mode === 'clear' ? 'border-emerald-500/40 bg-white/70' : 'border-emerald-500/50'}`}>Présence 180+ pays</span>
            <span className={`px-3 py-1 border rounded-full ${mode === 'clear' ? 'border-emerald-500/40 bg-white/70' : 'border-emerald-500/50'}`}>{currentLanguageLabel}</span>
            <span className={`px-3 py-1 border rounded-full ${mode === 'clear' ? 'border-emerald-500/40 bg-white/70' : 'border-emerald-500/50'}`}>{mode === 'night' ? t('mode.night') : t('mode.clear')}</span>
          </div>
          <div className="flex gap-4 mt-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 border rounded-lg flex items-center justify-center transition-all duration-300 ${
                  mode === 'clear'
                    ? 'bg-white border-slate-300 text-slate-500 hover:text-emerald-600 hover:border-emerald-500/50'
                    : 'bg-slate-900 border-slate-800 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50'
                }`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 w-full text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:mx-auto"
          >
            <h4 className={`${mode === 'clear' ? 'text-slate-900' : 'text-white'} font-semibold mb-4`}>{t('footer.group')}</h4>
            <ul className="space-y-2">
              {footerLinks.Entreprise.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={link === 'Contact' ? '/contact' : '/groupe'}
                    className={`${mode === 'clear' ? 'text-slate-600 hover:text-emerald-600' : 'text-gray-400 hover:text-emerald-400'} transition-colors duration-300 text-sm`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:mx-auto"
          >
            <h4 className={`${mode === 'clear' ? 'text-slate-900' : 'text-white'} font-semibold mb-4`}>{t('footer.services')}</h4>
            <ul className="space-y-2">
              {footerLinks.Services.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={link === 'Conseil' ? '/contact' : '/poles'}
                    className={`${mode === 'clear' ? 'text-slate-600 hover:text-emerald-600' : 'text-gray-400 hover:text-emerald-400'} transition-colors duration-300 text-sm`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:mx-auto"
          >
            <h4 className={`${mode === 'clear' ? 'text-slate-900' : 'text-white'} font-semibold mb-4`}>{t('footer.institutional')}</h4>
            <ul className="space-y-2">
              {footerLinks.Institutionnel.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to="/institutionnel"
                    className={`${mode === 'clear' ? 'text-slate-600 hover:text-emerald-600' : 'text-gray-400 hover:text-emerald-400'} transition-colors duration-300 text-sm`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className={`pt-8 w-full ${mode === 'clear' ? 'border-t border-slate-300' : 'border-t border-slate-900'}`}>
          <div className="flex flex-col items-center gap-3 text-center">
            <p className={`${mode === 'clear' ? 'text-slate-500' : 'text-gray-500'} text-sm`}>
              © {currentYear} INOV AFRIK. {t('footer.copy')}
            </p>
            <p className={`${mode === 'clear' ? 'text-slate-500' : 'text-gray-500'} text-xs`}>
              {t('footer.langLine')} : {currentLanguageLabel} · {t('footer.modeLine')} : {mode === 'night' ? t('mode.night') : t('mode.clear')} · {t('footer.networkLine')} : 180+ pays
            </p>
            <div className={`flex flex-wrap justify-center md:items-center gap-3 text-sm ${mode === 'clear' ? 'text-slate-500' : 'text-gray-500'}`}>
              <span>RCCM: TG-LFW-01-2023-A10-02858</span>
              <span>NIF: 1001853268</span>
              <span>CNSS: 71430</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
