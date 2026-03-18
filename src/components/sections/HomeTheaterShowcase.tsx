"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Volume2, Film, Headphones } from "lucide-react";
import { FadeIn } from "@/components/ui";

function SoundWave() {
  return (
    <div className="flex items-end gap-1 h-16">
      {[0, 0.15, 0.3, 0.1, 0.25, 0.4, 0.2, 0.35, 0.05, 0.3, 0.15, 0.4, 0.1, 0.25, 0.35, 0.2].map((delay, i) => (
        <div
          key={i}
          className="soundwave-bar"
          style={{
            height: `${20 + Math.random() * 44}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${0.8 + Math.random() * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}

export function HomeTheaterShowcase() {
  return (
    <section className="relative py-24 md:py-32 bg-gray-950 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80"
          alt="Premium home theater with Dolby Atmos surround sound in Faridabad"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950/90" />
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-brand-red" />
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-red">
                  Home Theater
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
                Cinema.{" "}
                <span className="text-brand-red">In Your</span>
                <br />
                Living Room.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-lg">
                Experience Dolby Atmos surround sound, 4K laser projection, and 
                acoustic-engineered rooms that rival the finest multiplexes. 
                Every frame, every note — perfected.
              </p>
            </FadeIn>

            {/* Features */}
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Volume2, label: "Dolby Atmos", sub: "Immersive 3D Audio" },
                  { icon: Film, label: "4K / 8K", sub: "Laser Projection" },
                  { icon: Headphones, label: "Acoustic", sub: "Room Treatment" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="group">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:bg-brand-red/20 group-hover:border-brand-red/30 transition-all duration-500">
                        <Icon size={20} className="text-brand-red" />
                      </div>
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link href="/theater" className="btn-red text-sm">
                  Explore Theater Solutions <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-7 py-3.5 rounded-full text-sm font-medium hover:border-white/50 hover:text-white transition-all"
                >
                  Get Free Security Consultation Today
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right: Visual with soundwave */}
          <FadeIn direction="left" delay={0.2}>
            <div className="relative flex flex-col items-center">
              {/* Theater image */}
              <div className="relative rounded-3xl overflow-hidden w-full aspect-video border border-white/10 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
                  alt="Dolby Atmos home theater installation by VSS Salesco in Faridabad"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-red/90 flex items-center justify-center theater-glow cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Soundwave visualization */}
              <div className="mt-8 flex flex-col items-center">
                <SoundWave />
                <p className="text-white/30 text-xs tracking-widest uppercase mt-4 font-medium">
                  Premium Audio Experience
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
