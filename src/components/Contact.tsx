import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Briefcase, Users, Building2 } from 'lucide-react';
import { useState } from 'react';
import { useThemeMode } from '../contexts/ThemeModeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const { mode } = useThemeMode();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@inovafrikagroup.com',
      link: 'mailto:contact@inovafrikagroup.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+228 70 66 28 21',
      link: 'tel:+22870662821',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      content: 'Lomé, Togo · Afrique de l\'Ouest',
      link: '/contact',
    },
  ];

  const institutionalChannels = [
    {
      icon: Briefcase,
      title: 'Service Partenariats ',
      detail: 'Montage de partenariats publics/privés, consortiums et co-traitance.',
    },
    {
      icon: Users,
      title: 'Recrutement & Talents',
      detail: 'Profils ingénierie, IT, énergie, HSE et gestion de projets.',
    },
    {
      icon: Building2,
      title: 'Relations Institutionnelles',
      detail: 'Coordination avec ministères, agences, bailleurs et organisations.',
    },
  ];

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden ${mode === 'clear' ? 'bg-slate-50' : 'bg-slate-900'}`}
    >
      <div className={`absolute inset-0 ${mode === 'clear' ? 'opacity-60' : 'opacity-5'}`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              mode === 'clear'
                ? 'radial-gradient(circle at 2px 2px, rgba(52, 211, 153, 0.16) 1px, transparent 0)'
                : 'radial-gradient(circle at 2px 2px, rgba(52, 211, 153, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}
          >
            Contactez-<span className={mode === 'clear' ? 'text-emerald-600' : 'text-emerald-400'}>Nous</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}>
            Discutons de votre projet et explorons ensemble les solutions adaptées à vos besoins
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors duration-300 ${
                    mode === 'clear'
                      ? 'bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400'
                      : 'bg-slate-950/50 border border-slate-800 text-white placeholder:text-gray-500'
                  }`}
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors duration-300 ${
                    mode === 'clear'
                      ? 'bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400'
                      : 'bg-slate-950/50 border border-slate-800 text-white placeholder:text-gray-500'
                  }`}
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className={`block text-sm font-medium mb-2 ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}
                >
                  Entreprise / Organisation
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors duration-300 ${
                    mode === 'clear'
                      ? 'bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400'
                      : 'bg-slate-950/50 border border-slate-800 text-white placeholder:text-gray-500'
                  }`}
                  placeholder="Nom de votre organisation"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors duration-300 resize-none ${
                    mode === 'clear'
                      ? 'bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400'
                      : 'bg-slate-950/50 border border-slate-800 text-white placeholder:text-gray-500'
                  }`}
                  placeholder="Décrivez votre projet ou votre besoin..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-300 font-medium flex items-center justify-center gap-2"
              >
                <span>Envoyer le message</span>
                <Send size={20} />
              </motion.button>

              <p className="text-xs text-gray-500 text-center">
                Vos données sont traitées conformément à notre politique de confidentialité et au RGPD.
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
              <h3 className={`text-2xl font-bold mb-8 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>
                Informations de contact
              </h3>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className={`flex items-start gap-4 p-6 backdrop-blur-sm rounded-xl transition-all duration-300 group border ${
                  mode === 'clear'
                    ? 'bg-white border-slate-200 hover:border-emerald-300 shadow-sm'
                    : 'bg-slate-950/50 border-slate-800 hover:border-emerald-500/50'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    mode === 'clear'
                      ? 'bg-emerald-50 group-hover:bg-emerald-100'
                      : 'bg-emerald-500/10 group-hover:bg-emerald-500/20'
                  }`}
                >
                  <info.icon className={mode === 'clear' ? 'text-emerald-700' : 'text-emerald-400'} size={24} />
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-1 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>
                    {info.title}
                  </h4>
                  <p className={mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}>{info.content}</p>
                </div>
              </motion.a>
            ))}

            <div
              className={`mt-12 p-8 rounded-2xl border ${
                mode === 'clear'
                  ? 'bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-100'
                  : 'bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-emerald-500/20'
              }`}
            >
              <h4 className={`text-xl font-bold mb-4 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>
                Besoin d'un devis ?
              </h4>
              <p className={`${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'} mb-6`}>
                Contactez-nous pour obtenir une estimation gratuite et personnalisée pour votre projet.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-300 font-medium"
              >
                Demander un devis
              </motion.button>
            </div>

            <div className="space-y-4">
              <h4 className={`text-xl font-bold ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>
                Contact & Relations Institutionnelles
              </h4>
              {institutionalChannels.map((channel) => (
                <div
                  key={channel.title}
                  className={`p-5 rounded-xl border ${
                    mode === 'clear'
                      ? 'bg-white border-slate-200 shadow-sm'
                      : 'bg-slate-950/50 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <channel.icon className={mode === 'clear' ? 'text-emerald-700' : 'text-emerald-400'} size={18} />
                    <span className={`font-semibold ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>
                      {channel.title}
                    </span>
                  </div>
                  <p className={`text-sm ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}>{channel.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
