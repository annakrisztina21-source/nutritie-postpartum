'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
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

    setTimeout(() => {
      setSubmitMessage(siteConfig.contactForm.successMessage);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge-elegant mb-6 inline-block">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[rgb(30,30,32)] mb-6">
            {siteConfig.contactForm.title}
          </h2>
          <div className="accent-line-h mx-auto mb-6"></div>
          <p className="text-lg text-[rgb(115,115,115)] leading-relaxed">
            {siteConfig.contactForm.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium tracking-widest uppercase text-[rgb(30,30,32)] mb-3">
                    {siteConfig.contactForm.fields.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-elegant"
                    placeholder="Numele tău"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium tracking-widest uppercase text-[rgb(30,30,32)] mb-3">
                    {siteConfig.contactForm.fields.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-elegant"
                    placeholder="email@exemplu.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium tracking-widest uppercase text-[rgb(30,30,32)] mb-3">
                    {siteConfig.contactForm.fields.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-elegant"
                    placeholder="07XX XXX XXX"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium tracking-widest uppercase text-[rgb(30,30,32)] mb-3">
                    {siteConfig.contactForm.fields.service}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-elegant bg-transparent cursor-pointer"
                  >
                    <option value="">Selectează un serviciu</option>
                    {siteConfig.contactForm.serviceOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium tracking-widest uppercase text-[rgb(30,30,32)] mb-3">
                  {siteConfig.contactForm.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="input-elegant resize-none"
                  placeholder="Spune-mi puțin despre situația ta..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-rose group disabled:opacity-50"
              >
                {isSubmitting ? 'Se trimite...' : siteConfig.contactForm.submitButton}
                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
              </button>

              {/* Success Message */}
              {submitMessage && (
                <div className="p-4 border-l-2 border-green-500 bg-green-50">
                  <p className="text-green-800">{submitMessage}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-[rgb(253,251,247)] p-8 lg:p-10 h-full">
              <h3 className="text-xl font-medium text-[rgb(30,30,32)] mb-8">
                Informații de contact
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium tracking-widest uppercase text-[rgb(30,30,32)] mb-1">
                      Telefon
                    </div>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-[rgb(115,115,115)] hover:text-rose-500 transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium tracking-widest uppercase text-[rgb(30,30,32)] mb-1">
                      Email
                    </div>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-[rgb(115,115,115)] hover:text-rose-500 transition-colors break-all">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium tracking-widest uppercase text-[rgb(30,30,32)] mb-1">
                      Locație
                    </div>
                    <p className="text-[rgb(115,115,115)]">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium tracking-widest uppercase text-[rgb(30,30,32)] mb-1">
                      Program
                    </div>
                    <p className="text-[rgb(115,115,115)]">{siteConfig.contact.schedule}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
