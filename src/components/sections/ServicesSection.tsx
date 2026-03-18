"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Shield, Tv, GanttChart, Phone } from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/ui";

const services = [
  {
    icon: Cpu,
    label: "Home Automation",
    tagline: "Live smarter, effortlessly.",
    desc: "Smart switches, voice-controlled lighting, motorized curtains, and climate automation — all unified in a single app.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    href: "/automation",
    accent: "#1e3a5f",
  },
  {
    icon: Shield,
    label: "Security Solutions",
    tagline: "Protect what matters most.",
    desc: "4K CCTV networks, smart locks, access control, video door phones, fire and burglar alarms with 24/7 monitoring.",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
    href: "/security",
    accent: "#c0392b",
  },
  {
    icon: Tv,
    label: "Home Theater",
    tagline: "Cinema. In your living room.",
    desc: "Dolby Atmos surround sound, 4K/8K projectors, acoustic treatment, and bespoke AV integration for the ultimate experience.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    href: "/theater",
    accent: "#2d5fa8",
  },
  {
    icon: GanttChart,
    label: "Gate Automation",
    tagline: "Seamless access control.",
    desc: "Sliding gate motors, boom barriers, intercom-linked entry systems, and remote-operated access for homes and offices.",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80",
    href: "/automation#gate",
    accent: "#163870",
  },
  {
    icon: Phone,
    label: "EPABX Systems",
    tagline: "Crystal-clear office comms.",
    desc: "IP-PBX, digital EPABX, auto-attendant, call recording, and scalable enterprise communication setups.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    href: "/automation#epabx",
    accent: "#0f2240",
  },
];

export function ServicesSection() {
  return (
    <section className="section-pad bg-white" id="services">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <SectionLabel>What We Do</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-lg text-gray-900 mb-5">
              Complete Smart Solutions<br />
              <span className="gradient-text">Under One Roof</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-lg text-gray-500">
              From the moment you wake up to the moment you sleep — every system in your home,
              working in harmony.
            </p>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.label} delay={i * 0.08} className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
                <Link href={service.href} className="service-card group flex flex-col h-full block overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 rounded-xl overflow-hidden mb-6 -mx-2 -mt-2">
                    <Image
                      src={service.image}
                      alt={service.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shrink-0"
                    style={{ backgroundColor: service.accent + "18" }}
                  >
                    <Icon size={20} style={{ color: service.accent }} />
                  </div>

                  {/* Text */}
                  <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">
                    {service.tagline}
                  </p>
                  <h3 className="heading-md text-gray-900 mb-3 text-xl">{service.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.desc}</p>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 mt-5 text-brand-navy text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Explore <ArrowUpRight size={15} />
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
