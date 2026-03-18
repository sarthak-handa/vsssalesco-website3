"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/ui";

const projects = [
  {
    id: 1,
    title: "Luxury Villa Automation – Sector 50, Faridabad",
    category: "Home Automation + Security",
    desc: "Full KNX-based home automation with Lutron lighting, motorized curtains, multi-room audio, and a 32-camera 4K security grid.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1000&q=80",
    tags: ["KNX Automation", "Lutron", "4K CCTV"],
    result: "₹18L project | 6-week delivery",
  },
  {
    id: 2,
    title: "Home Cinema Suite – DLF Phase 4, Gurugram",
    category: "Home Theater",
    desc: "Dolby Atmos 9.2 setup with 4K laser projector, motorized acoustics, calibrated lighting, and dedicated 20A power distribution.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1000&q=80",
    tags: ["Dolby Atmos", "4K Laser", "Acoustic Design"],
    result: "₹12L project | 3-week delivery",
  },
  {
    id: 3,
    title: "Office Security Overhaul – Sector 63, Noida",
    category: "Security + EPABX",
    desc: "64-channel NVR security system, biometric access control for 5 zones, IP-EPABX with 40 extensions, and video door phone integration.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&q=80",
    tags: ["64Ch NVR", "Biometric Access", "IP EPABX"],
    result: "₹9L project | 4-week delivery",
  },
];

export function ProjectsSection() {
  return (
    <section className="section-pad bg-white" id="projects">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <FadeIn>
              <SectionLabel>Case Studies</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg text-gray-900">
                Projects That Speak<br />
                <span className="gradient-text">For Themselves</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Link href="/case-studies" className="btn-outline shrink-0">
              View All Projects <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <Link href={`/case-studies/${p.id}`}
                className="group grid md:grid-cols-2 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-card-hover transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-60 md:h-auto lg:col-span-2 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8 flex flex-col justify-between bg-white">
                  <div>
                    <p className="tag mb-3">{p.category}</p>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-brand-navy transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-50 text-gray-600 border border-gray-200 px-3 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                    <span className="text-sm font-semibold text-brand-navy">{p.result}</span>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-red group-hover:gap-3 transition-all duration-300">
                      Read Case Study <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
