import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tv, Volume2, Monitor, Lightbulb, Layers } from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Home Theater & AV Solutions – Dolby Atmos, 4K Projection",
  description:
    "Premium home theater design and installation. Dolby Atmos surround sound, 4K laser projectors, acoustic treatment, and video conferencing systems in Faridabad, Delhi NCR.",
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
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
  "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
  "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
  "https://images.unsplash.com/photo-1567359781514-81173b801d6a?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=800&q=80",
];

const packages = [
  {
    name: "Essential",
    price: "From ₹2.5L",
    desc: "Perfect for a dedicated media room",
    features: ["5.1 surround system", "75\" QLED display", "4K media player", "Basic acoustic treatment", "Universal remote control", "2-year warranty"],
    highlight: false,
  },
  {
    name: "Premiere",
    price: "From ₹8L",
    desc: "True home cinema experience",
    features: ["Dolby Atmos 7.1.4 system", "4K laser projector", "Motorised projection screen", "Full acoustic design", "Automated lighting scenes", "4K media server", "Calibration included", "3-year AMC"],
    highlight: true,
  },
  {
    name: "Signature",
    price: "Custom",
    desc: "Bespoke ultra-luxury installation",
    features: ["Dolby Atmos 9.2.6 system", "8K / dual-lens projection", "Custom designed room", "THX-certified acoustic build", "Motorised recliner integration", "Full AV rack & cabling", "Dedicated power circuit", "Lifetime support"],
    highlight: false,
  },
];

export default function TheaterPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-0 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80"
            alt="Luxury home theater"
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
              <Link href="/contact" className="btn-red">Design My Theater <ArrowRight size={16} /></Link>
              <Link href="#packages" className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-7 py-3.5 rounded-full text-sm font-medium hover:border-white/50 hover:text-white transition-all">
                View Packages
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
      <section className="section-pad bg-[#f8f9fc]">
        <div className="container-wide">
          <FadeIn>
            <h2 className="heading-lg text-gray-900 mb-10 text-center">Our Theater Installations</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="relative rounded-2xl overflow-hidden aspect-video group">
                  <Image
                    src={src}
                    alt={`Theater installation ${i + 1}`}
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

      {/* Packages */}
      <section className="section-pad bg-white" id="packages">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn><SectionLabel>Packages</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg text-gray-900">Choose Your Experience</h2>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <FadeIn key={pkg.name} delay={i * 0.1}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${
                  pkg.highlight
                    ? "bg-brand-navy text-white shadow-[0_20px_60px_rgba(30,58,95,0.4)]"
                    : "bg-white border border-gray-100 shadow-card"
                }`}>
                  {pkg.highlight && (
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-brand-red text-white px-3 py-1 rounded-full mb-4 self-start">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`font-display text-2xl font-semibold mb-1 ${pkg.highlight ? "text-white" : "text-gray-900"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-1 ${pkg.highlight ? "text-white/60" : "text-gray-400"}`}>{pkg.desc}</p>
                  <p className={`font-display text-3xl font-semibold mb-6 ${pkg.highlight ? "text-white" : "text-brand-navy"}`}>
                    {pkg.price}
                  </p>
                  <ul className="space-y-3 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2.5 text-sm ${pkg.highlight ? "text-white/80" : "text-gray-600"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${pkg.highlight ? "bg-brand-red" : "bg-brand-navy"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 text-center py-3 rounded-full text-sm font-semibold transition-all ${
                      pkg.highlight
                        ? "bg-brand-red text-white hover:bg-red-600"
                        : "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                    }`}
                  >
                    Get This Package
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
