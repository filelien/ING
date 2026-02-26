import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../logo/image.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6 py-16 flex flex-col items-center text-center gap-12">
        <div className="flex flex-col items-center gap-5">
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-emerald-500/20 rounded-full scale-125" aria-hidden />
            <img
              src={Logo}
              alt="INOV AFRIK"
              className="w-24 h-24 rounded-xl shadow-xl ring-2 ring-emerald-500/40 bg-white/5 backdrop-blur"
            />
          </div>
          <h3 className="text-2xl font-bold text-white">
            <span className="text-emerald-400">INOV</span> AFRIK
          </h3>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            INOV AFRIK conçoit, sécurise et réalise des projets technologiques, énergétiques et industriels adaptés aux réalités du terrain africain.
          </p>
          <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
            Des références concrètes, une équipe certifiée (Oracle, AWS, Azure, ISO 27001, CISSP, CKA) et une gouvernance transparente (RCCM: TG-LFW-01-2023-A10-02858).
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.18em] text-emerald-300">
            <span className="px-3 py-1 border border-emerald-500/50 rounded-full">Togo · Afrique de l'Ouest</span>
            <span className="px-3 py-1 border border-emerald-500/50 rounded-full">Présence 180+ pays</span>
            <span className="px-3 py-1 border border-emerald-500/50 rounded-full">Français</span>
            <span className="px-3 py-1 border border-emerald-500/50 rounded-full">Mode sombre</span>
          </div>
          <div className="flex gap-4 mt-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
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
            <h4 className="text-white font-semibold mb-4">Le Groupe</h4>
            <ul className="space-y-2">
              {footerLinks.Entreprise.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={link === 'Contact' ? '/contact' : '/groupe'}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
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
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.Services.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={link === 'Conseil' ? '/contact' : '/poles'}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
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
            <h4 className="text-white font-semibold mb-4">Institutionnel</h4>
            <ul className="space-y-2">
              {footerLinks.Institutionnel.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to="/institutionnel"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-slate-900 pt-8 w-full">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} INOV AFRIK. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-xs">Langue : Français · Mode : Sombre · Réseau : 180+ pays</p>
            <div className="flex flex-wrap justify-center md:items-center gap-3 text-sm text-gray-500">
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
