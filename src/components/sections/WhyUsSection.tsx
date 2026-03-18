"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Award, Clock, Headphones, Wrench, Star } from "lucide-react";
import { FadeIn, SectionLabel, StatCard } from "@/components/ui";

const reasons = [
  {
    icon: Award,
    title: "12+ Years Experience",
    desc: "Over a decade serving Delhi NCR homeowners and businesses with smart technology solutions.",
  },
  {
    icon: Wrench,
    title: "End-to-End Installation",
    desc: "We handle everything — consultation, design, supply, installation, and commissioning.",
  },
  {
    icon: Headphones,
    title: "Post-Sale AMC Support",
    desc: "Annual maintenance contracts and priority support ensure your systems run flawlessly year-round.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect your schedule. Every project is delivered on the promised date with no surprises.",
  },
  {
    icon: Star,
    title: "Premium Brands Only",
    desc: "We partner exclusively with globally trusted brands — Hikvision, Honeywell, Bose, Lutron, and more.",
  },
  {
    icon: CheckCircle,
    title: "Certified Engineers",
    desc: "Our team holds certified expertise across automation, AV, and security domains.",
  },
];

export function WhyUsSection() {
  return (
    <section className="section-pad bg-[#f8f9fc] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-50/80 to-transparent pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden h-52">
                    <Image
                      src="https://images.unsplash.com/photo-1586953208270-f3e7b4d4cc77?w=600&q=80"
                      alt="Smart home installation"
                      fill className="object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-36">
                    <Image
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                      alt="CCTV installation"
                      fill className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative rounded-2xl overflow-hidden h-36">
                    <Image
                      src="https://images.unsplash.com/photo-1615361200141-f45040f367be?w=600&q=80"
                      alt="Home theater"
                      fill className="object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-52">
                    <Image
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                      alt="Smart interior"
                      fill className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass-card px-6 py-4 rounded-2xl shadow-glass"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <p className="font-display text-3xl font-semibold text-brand-navy">500+</p>
                <p className="text-xs text-gray-500 font-medium">Happy Clients</p>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <div>
            <FadeIn>
              <SectionLabel>Why VSS Salesco</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg text-gray-900 mb-5">
                The Standard for<br />
                <span className="gradient-text">Smart Living in NCR</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="body-lg text-gray-500 mb-10">
                We don&apos;t just install technology — we engineer experiences. Every project is
                designed for reliability, elegance, and lasting performance.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <FadeIn key={r.title} delay={0.1 + i * 0.06}>
                    <div className="flex gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-[#1e3a5f]/8 flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                        <Icon size={16} className="text-brand-navy group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{r.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <FadeIn delay={0.2}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-gray-200">
            <StatCard value="500+" label="Projects Delivered" />
            <StatCard value="12+" label="Years in Business" color="red" />
            <StatCard value="50+" label="Brand Partners" />
            <StatCard value="98%" label="Client Retention" color="red" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
