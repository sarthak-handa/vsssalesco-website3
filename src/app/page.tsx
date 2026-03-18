import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "VSS Salesco | Smart Home Automation & Security Solutions – Faridabad NCR",
  description:
    "Faridabad's premier smart home partner. Home automation, CCTV security, home theater, gate automation, and EPABX systems for villas and offices across Delhi NCR.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <TestimonialsSection />

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
            tailored to your space and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-red text-sm px-8 py-4 inline-flex items-center gap-2">
              Book Free Consultation <ArrowRight size={16} />
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
