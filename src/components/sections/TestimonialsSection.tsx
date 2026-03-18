"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/ui";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Villa Owner, Sector 50 Faridabad",
    text: "VSS Salesco transformed our entire home. The automation is seamless — from voice-controlled lights to the security cameras that I can view on my phone. Absolutely recommend.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Interior Designer, Delhi",
    text: "I've worked with VSS on multiple client projects. Their team is professional, the equipment quality is top-notch, and the after-sale service is genuinely excellent.",
    rating: 5,
  },
  {
    name: "Amit Kapoor",
    role: "Business Owner, Noida Sector 63",
    text: "Our office security and EPABX installation was done flawlessly. The team completed it on time and even trained our staff. Best vendor experience we've had.",
    rating: 5,
  },
  {
    name: "Sunita & Vikram Joshi",
    role: "Homeowners, DLF Phase 2 Gurugram",
    text: "The home theater they built for us is just unbelievable. Dolby Atmos, 4K projection, perfect acoustics — it's better than any multiplex. Worth every rupee.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-[#f8f9fc]">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeIn>
            <SectionLabel>Testimonials</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-lg text-gray-900">
              Trusted by Homeowners<br />
              <span className="gradient-text">Across Delhi NCR</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <div className="glass-card p-6 rounded-2xl h-full flex flex-col">
                <Quote size={24} className="text-brand-red/30 mb-4 shrink-0" />
                <p className="text-sm text-gray-600 leading-relaxed flex-1 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
