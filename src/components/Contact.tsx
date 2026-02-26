import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Briefcase, Users, Building2 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

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
      title: 'Service Partenariats',
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
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(52, 211, 153, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-<span className="text-emerald-400">Nous</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
            <h3 className="text-2xl font-bold text-white mb-8">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                  Entreprise / Organisation
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                  placeholder="Nom de votre organisation"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300 resize-none"
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
            <h3 className="text-2xl font-bold text-white mb-8">Informations de contact</h3>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <info.icon className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                  <p className="text-gray-400">{info.content}</p>
                </div>
              </motion.a>
            ))}

            <div className="mt-12 p-8 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-4">Besoin d'un devis ?</h4>
              <p className="text-gray-400 mb-6">
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
              <h4 className="text-xl font-bold text-white">Contact & Relations Institutionnelles</h4>
              {institutionalChannels.map((channel) => (
                <div key={channel.title} className="p-5 bg-slate-950/50 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <channel.icon className="text-emerald-400" size={18} />
                    <span className="text-white font-semibold">{channel.title}</span>
                  </div>
                  <p className="text-sm text-gray-400">{channel.detail}</p>
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
