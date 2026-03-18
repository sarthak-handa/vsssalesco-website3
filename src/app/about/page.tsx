import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { FadeIn, SectionLabel, StatCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "About VSS Salesco – Our Story, Vision & Team",
  description:
    "Learn about VSS Salesco — Faridabad's trusted smart home automation and security solutions provider with 12+ years of experience across Delhi NCR.",
};

const milestones = [
  { year: "2012", event: "Founded in Faridabad with a focus on residential CCTV installation." },
  { year: "2015", event: "Expanded into home automation, bringing KNX-based systems to NCR villas." },
  { year: "2018", event: "Launched dedicated home theater division. First Dolby Atmos installation in the region." },
  { year: "2020", event: "Crossed 300 projects. Added EPABX and gate automation services." },
  { year: "2022", event: "Became authorised partners for Hikvision, Lutron, and BFT in Faridabad." },
  { year: "2024", event: "500+ completed projects. Serving homeowners, builders, and SMBs across Delhi NCR." },
];

const values = [
  { title: "Precision Engineering", desc: "Every wire, every connection, every configuration done to the highest standard. No shortcuts, ever." },
  { title: "Transparent Pricing", desc: "You receive a detailed itemised quotation before we start. No hidden costs, no surprise additions." },
  { title: "Long-Term Partnership", desc: "We don't disappear after installation. Our AMC plans and support team are here for the life of your system." },
  { title: "Premium Products Only", desc: "We exclusively source from global brands with proven track records. Your investment is protected." },
];

const brands = [
  "Hikvision", "Dahua", "CP Plus", "Lutron", "Honeywell", "Bosch", "Yale",
  "Godrej", "BFT", "Somfy", "Panasonic", "Bose", "Denon", "Sony", "LG",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8f9fc] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-50/60 to-transparent pointer-events-none" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn><SectionLabel>About VSS Salesco</SectionLabel></FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="heading-xl text-gray-900 mb-6">
                  12 Years of{" "}
                  <span className="gradient-text">Building Smarter Spaces</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="body-lg text-gray-500 mb-8">
                  VSS Salesco — Vision And Security Solution — was founded in Faridabad with a single
                  mission: to bring world-class smart technology to homes and businesses across Delhi NCR,
                  with the service quality they deserve.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "500+ projects delivered",
                    "12+ years in business",
                    "50+ brand partnerships",
                    "Serving all of Delhi NCR",
                    "Certified engineering team",
                    "AMC support available",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={15} className="text-brand-red shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Link href="/contact" className="btn-primary text-sm">
                  Work With Us <ArrowRight size={15} />
                </Link>
              </FadeIn>
            </div>

            <FadeIn direction="left">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative rounded-2xl overflow-hidden h-52">
                      <Image src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80" alt="Smart villa project" fill className="object-cover" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden h-36">
                      <Image src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80" alt="Home theater" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="relative rounded-2xl overflow-hidden h-36">
                      <Image src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80" alt="CCTV system" fill className="object-cover" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden h-52">
                      <Image src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80" alt="Home automation" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brand-navy">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "500+", label: "Projects Delivered", color: "red" as const },
              { value: "12+",  label: "Years Experience" },
              { value: "50+",  label: "Brand Partnerships", color: "red" as const },
              { value: "98%",  label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className={`font-display text-4xl md:text-5xl font-semibold mb-1 ${s.color === "red" ? "text-brand-red" : "text-white"}`}>
                  {s.value}
                </p>
                <p className="text-white/50 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <SectionLabel>Our Journey</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg text-gray-900 mb-12">A Decade of Growth</h2>
            </FadeIn>
            <div className="relative">
              <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gray-200" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <FadeIn key={m.year} delay={i * 0.07}>
                    <div className="relative flex gap-6">
                      <div className="relative z-10 flex flex-col items-center shrink-0">
                        <div className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">{m.year.slice(2)}</span>
                        </div>
                      </div>
                      <div className="pt-1.5 pb-2">
                        <p className="text-xs text-brand-red font-semibold uppercase tracking-wider mb-1">{m.year}</p>
                        <p className="text-gray-700 leading-relaxed">{m.event}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[#f8f9fc]">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn><SectionLabel>Our Values</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg text-gray-900">What We Stand For</h2>
            </FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="service-card h-full text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#1e3a5f]/8 flex items-center justify-center mx-auto mb-5">
                    <span className="text-brand-navy font-display font-semibold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-pad bg-white border-t border-gray-100">
        <div className="container-wide">
          <FadeIn>
            <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">
              Authorised Brands & Partners
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {brands.map((b) => (
                <span key={b} className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-600">
                  {b}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
