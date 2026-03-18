import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HomeTheaterShowcase } from "@/components/sections/HomeTheaterShowcase";
import { TrustBanner } from "@/components/sections/TrustBanner";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "VSS Salesco | Smart Digital Locks & Security Systems in Faridabad – Delhi NCR",
  description:
    "Faridabad's trusted provider of smart digital locks, CCTV security systems, home automation, and premium home theater solutions since 2010. Serving Delhi NCR.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBanner />
      <ServicesSection />
      <WhyUsSection />
      <HomeTheaterShowcase />
      <ProjectsSection />
      <TestimonialsSection />

      {/* Mid-page CTA */}
      <section className="py-16 bg-[#f8f9fc]">
        <div className="container-wide text-center">
          <p className="text-xs text-brand-red font-semibold tracking-widest uppercase mb-4">
            Don&apos;t Wait — Secure Your Space
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-gray-900 font-semibold mb-4">
            Your Home Deserves Smarter Protection
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
            Book a free site visit. Our experts will design a custom security and automation
            plan tailored to your home and lifestyle.
          </p>
          <Link href="/contact" className="btn-red text-sm px-8 py-4 inline-flex items-center gap-2">
            Get Free Security Consultation Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-navy py-20 px-4">
        <div className="container-wide text-center">
          <p className="text-white/50 text-xs tracking-widest uppercase font-semibold mb-4">
            Ready to upgrade your space?
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-semibold mb-6">
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Book a free home visit. Our experts will design a custom automation and security plan
            tailored to your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-red text-sm px-8 py-4 inline-flex items-center gap-2">
              Get Free Security Consultation Today <ArrowRight size={16} />
            </Link>
            <a href="tel:+919990696111" className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white hover:text-brand-navy text-sm px-8 py-4 rounded-full font-medium transition-all duration-300">
              <Phone size={16} /> +91 99906 96111
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
