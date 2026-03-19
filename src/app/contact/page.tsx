"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Instagram, Clock, Mail, CheckCircle, Send } from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/ui";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 99906 96111",
    href: "tel:+919990696111",
    action: "Call or WhatsApp",
  },
  {
    icon: Mail,
    label: "Email",
    value: "vsssalesco12@gmail.com",
    href: "mailto:vsssalesco12@gmail.com",
    action: "Send Email",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "Sector 87, Faridabad, Haryana 121002",
    href: "https://maps.google.com/?q=Sector+87+Faridabad+Haryana",
    action: "Get Directions",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat: 9:00 AM – 7:00 PM",
    href: null,
    action: null,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@vsssalesco",
    href: "https://instagram.com/vsssalesco",
    action: "Follow Us",
  },
];

const services = [
  "Home Automation",
  "CCTV / Security",
  "Home Theater",
  "Gate Automation",
  "EPABX System",
  "Video Door Phone",
  "Smart Locks",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call — replace with actual form endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8f9fc]">
        <div className="container-wide">
          <FadeIn><SectionLabel>Contact Us</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-xl text-gray-900 mb-6 max-w-2xl">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Together</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-lg text-gray-500 max-w-xl">
              Tell us about your project. We&apos;ll visit your space, understand your needs, and
              design a custom solution — absolutely free.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-gray-900 mb-8">
                  Reach Us Directly
                </h2>
              </FadeIn>
              <div className="space-y-5">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <FadeIn key={item.label} delay={i * 0.07}>
                      <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group">
                        <div className="w-10 h-10 rounded-xl bg-brand-navy/10 flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-white transition-all">
                          <Icon size={18} className="text-brand-navy group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                          <p className="text-gray-900 font-medium text-sm">{item.value}</p>
                          {item.href && item.action && (
                            <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                              className="text-xs text-brand-red font-semibold hover:underline mt-1 inline-block">
                              {item.action} →
                            </a>
                          )}
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <FadeIn delay={0.4}>
                <a
                  href="https://wa.me/919990696111?text=Hi%20VSS%20Salesco%2C%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-all w-full"
                >
                  <span className="text-base">💬</span> Chat on WhatsApp
                </a>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn direction="left">
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-card">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                        <CheckCircle size={32} className="text-green-500" />
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3">Message Sent!</h3>
                      <p className="text-gray-500 mb-6 max-w-sm">
                        Thank you for reaching out. We&apos;ll call you back within 2 hours during business hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn-outline text-sm"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="font-display text-2xl font-semibold text-gray-900 mb-6">
                        Book a Free Consultation
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Full Name *</label>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="Your name"
                              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Phone *</label>
                            <input
                              type="tel"
                              required
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder="+91 XXXXX XXXXX"
                              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Email</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="your@email.com"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Service Interested In</label>
                          <select
                            value={form.service}
                            onChange={(e) => setForm({ ...form, service: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-white"
                          >
                            <option value="">Select a service...</option>
                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">Message</label>
                          <textarea
                            rows={4}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Tell us about your project, location, and requirements..."
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors resize-none"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-primary w-full justify-center text-sm py-4 disabled:opacity-60"
                        >
                          {loading ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2"><Send size={16} /> Send Message</span>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map embed */}
      <section className="bg-[#f8f9fc] pb-0">
        <div className="container-wide pb-20">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-6">Find Us</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-card h-80">
              <iframe
                title="VSS Salesco Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.4!2d77.3!3d28.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector+87%2C+Faridabad%2C+Haryana+121002!5e0!3m2!1sen!2sin!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
