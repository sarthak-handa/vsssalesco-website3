import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tv, Volume2, Monitor, Lightbulb, Layers } from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Home Theater & AV Solutions – Dolby Atmos, 4K Projection | VSS Salesco Faridabad",
  description:
    "Premium home theater design and installation in Faridabad & Delhi NCR. Dolby Atmos surround sound, 4K laser projectors, acoustic treatment, and cinema-grade AV systems since 2010.",
};

const features = [
  { icon: Volume2,   title: "Dolby Atmos & DTS:X",  desc: "Immersive 3D audio with overhead speakers and precision acoustic placement for true cinematic sound." },
  { icon: Monitor,   title: "4K / 8K Projection",    desc: "Laser projectors with 4,000–20,000 lumen output, motorised screens, and 4K/8K signal processing." },
  { icon: Layers,    title: "Acoustic Treatment",    desc: "Custom bass traps, diffusers, and absorption panels engineered for your room dimensions and usage." },
  { icon: Lightbulb, title: "Cinematic Lighting",    desc: "Bias lighting, dimmable scene presets, and LED ambient strips that react to content automatically." },
  { icon: Tv,        title: "4K Media Servers",      desc: "Apple TV, NVIDIA Shield, or NAS-based media servers with universal remote and voice control." },
  { icon: Monitor,   title: "Video Conferencing",    desc: "Polycom, Cisco, or Logitech VC systems with 4K cameras, boundary microphones, and one-touch join." },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80", alt: "Luxury home theater with Dolby Atmos surround sound in Faridabad" },
  { src: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80", alt: "4K laser projector home cinema installation by VSS Salesco" },
  { src: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80", alt: "Acoustic treated home theater room in Delhi NCR" },
  { src: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop", alt: "Premium home theater seating with ambient lighting" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Smart home theater control system integration" },
  { src: "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=800&q=80", alt: "Professional AV equipment rack for home cinema setup" },
];

export default function TheaterPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-0 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80"
            alt="Premium home theater with immersive Dolby Atmos audio in Faridabad"
            fill className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/50" />
        </div>
        <div className="container-wide relative z-10 pb-24">
          <FadeIn>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-red bg-red-950/50 border border-red-900/40 px-3 py-1 rounded-full mb-6">
              Home Theater Solutions
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-xl text-white mb-6 max-w-3xl">
              Cinema. In{" "}
              <span className="text-brand-red">Your</span>{" "}
              Living Room.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-lg text-white/60 max-w-2xl mb-10">
              We design and build bespoke home cinemas — from compact media rooms to full
              THX-certified dedicated theaters — with Dolby Atmos audio and 4K/8K projection.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-red">Get Free Security Consultation Today <ArrowRight size={16} /></Link>
              <Link href="#gallery" className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-7 py-3.5 rounded-full text-sm font-medium hover:border-white/50 hover:text-white transition-all">
                View Our Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn><SectionLabel>What We Offer</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg text-gray-900">Every Element. Engineered.</h2>
            </FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeIn key={f.title} delay={i * 0.08}>
                  <div className="service-card h-full">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-brand-navy" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-3">{f.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-[#f8f9fc]" id="gallery">
        <div className="container-wide">
          <FadeIn>
            <h2 className="heading-lg text-gray-900 mb-10 text-center">Our Theater Installations</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="relative rounded-2xl overflow-hidden aspect-video group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (replaces pricing) */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-[100px]" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">
              Design Your Dream Theater
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-white font-semibold mb-5">
              Every Theater Is Unique.
              <br />
              <span className="text-white/50">Let&apos;s Design Yours.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              Our AV consultants will visit your space, understand your vision, and design
              a custom theater experience — from acoustic planning to final calibration.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-red text-sm px-8 py-4">
                Get Free Security Consultation Today <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+919990696111"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-7 py-3.5 rounded-full text-sm font-medium hover:border-white/50 hover:text-white transition-all"
              >
                Call +91 99906 96111
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
