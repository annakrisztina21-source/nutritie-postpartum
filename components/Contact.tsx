'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Send, Sparkles, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulare trimitere formular - înlocuiește cu logica ta de backend
    setTimeout(() => {
      setSubmitMessage(siteConfig.contactForm.successMessage);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });

      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex mb-6">
            <div className="badge-modern shimmer">
              <Sparkles className="w-4 h-4" />
              <span>Programare consultație</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {siteConfig.contactForm.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.contactForm.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="perspective-1000">
            <div className="card-3d transform-3d">
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                    {siteConfig.contactForm.fields.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 focus:outline-none transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="Numele tău complet"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                    {siteConfig.contactForm.fields.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 focus:outline-none transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="adresa@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">
                    {siteConfig.contactForm.fields.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 focus:outline-none transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="07XX XXX XXX"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-900 mb-2">
                    {siteConfig.contactForm.fields.service}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 focus:outline-none transition-all bg-white/50 backdrop-blur-sm"
                  >
                    <option value="">Selectează un serviciu</option>
                    {siteConfig.contactForm.serviceOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                    {siteConfig.contactForm.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 focus:outline-none transition-all resize-none bg-white/50 backdrop-blur-sm"
                    placeholder="Spune-mi puțin despre situația ta..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-modern w-full disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? 'Se trimite...' : siteConfig.contactForm.submitButton}
                    {!isSubmitting && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>

                {/* Success Message */}
                {submitMessage && (
                  <div className="glass-modern px-6 py-4 flex items-center gap-3 shimmer">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-slate-900 font-medium">{submitMessage}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {/* Contact Cards */}
            <div className="bento-card group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="text-pink-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">Telefon</h4>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-slate-600 hover:text-gradient transition-all font-medium">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bento-card group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="text-purple-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">Email</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-600 hover:text-gradient transition-all break-all font-medium">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bento-card group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">Adresă</h4>
                  <p className="text-slate-600 font-medium">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="bento-card group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="text-amber-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">Program</h4>
                  <p className="text-slate-600 font-medium">{siteConfig.contact.schedule}</p>
                </div>
              </div>
            </div>

            {/* Calendly Link (if available) */}
            {siteConfig.contact.calendlyLink && (
              <div className="card-3d p-6 bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">Programare online</h4>
                    <a
                      href={siteConfig.contact.calendlyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all text-sm group"
                    >
                      Alege data și ora
                      <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
