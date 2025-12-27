'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Send } from 'lucide-react';
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary font-poppins mb-4">
            {siteConfig.contactForm.title}
          </h2>
          <p className="text-lg text-textSecondary font-inter max-w-3xl mx-auto">
            {siteConfig.contactForm.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-textPrimary font-inter mb-2">
                  {siteConfig.contactForm.fields.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-secondary/20 focus:border-secondary focus:outline-none transition-colors font-inter"
                  placeholder="Numele tău complet"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-textPrimary font-inter mb-2">
                  {siteConfig.contactForm.fields.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-secondary/20 focus:border-secondary focus:outline-none transition-colors font-inter"
                  placeholder="adresa@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-textPrimary font-inter mb-2">
                  {siteConfig.contactForm.fields.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-secondary/20 focus:border-secondary focus:outline-none transition-colors font-inter"
                  placeholder="07XX XXX XXX"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-textPrimary font-inter mb-2">
                  {siteConfig.contactForm.fields.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-secondary/20 focus:border-secondary focus:outline-none transition-colors font-inter"
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
                <label htmlFor="message" className="block text-sm font-semibold text-textPrimary font-inter mb-2">
                  {siteConfig.contactForm.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-secondary/20 focus:border-secondary focus:outline-none transition-colors font-inter resize-none"
                  placeholder="Spune-mi puțin despre situația ta..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
              >
                {isSubmitting ? 'Se trimite...' : siteConfig.contactForm.submitButton}
                {!isSubmitting && <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />}
              </button>

              {/* Success Message */}
              {submitMessage && (
                <div className="bg-accent/20 text-textPrimary px-6 py-4 rounded-xl text-center font-inter">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            {/* Contact Cards */}
            <div className="bg-background p-6 rounded-2xl border-2 border-secondary/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-textPrimary font-poppins mb-1">Telefon</h4>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-textSecondary font-inter hover:text-primary transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl border-2 border-secondary/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-textPrimary font-poppins mb-1">Email</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-textSecondary font-inter hover:text-primary transition-colors break-all">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl border-2 border-secondary/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-textPrimary font-poppins mb-1">Adresă</h4>
                  <p className="text-textSecondary font-inter">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl border-2 border-secondary/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-textPrimary font-poppins mb-1">Program</h4>
                  <p className="text-textSecondary font-inter">{siteConfig.contact.schedule}</p>
                </div>
              </div>
            </div>

            {/* Calendly Link (if available) */}
            {siteConfig.contact.calendlyLink && (
              <div className="bg-accent/20 p-6 rounded-2xl border-2 border-accent/30">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-textPrimary font-poppins mb-2">Programare online</h4>
                    <a
                      href={siteConfig.contact.calendlyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-accent text-textPrimary px-6 py-2 rounded-full font-inter font-semibold hover:bg-accent/80 transition-all text-sm"
                    >
                      Alege data și ora
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
