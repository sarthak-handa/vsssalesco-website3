import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Camera, Lock, Bell, DoorOpen, Wifi } from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Security Solutions – CCTV, Smart Digital Locks & Alarms in Faridabad",
  description:
    "Comprehensive security solutions for homes and offices in Faridabad and Delhi NCR. CCTV systems, smart digital locks, video door phones, fire alarms, and access control since 2010.",
};

const solutions = [
  {
    icon: Camera,
    title: "CCTV Systems",
    desc: "From 4-channel home setups to 128-channel commercial NVRs. We install Hikvision, Dahua, and CP Plus in 2MP, 4MP, and 4K configurations with remote viewing.",
    features: ["4K Ultra HD cameras", "Night vision up to 60m", "AI-based motion detection", "Remote mobile access", "Cloud & local storage", "30-day retention"],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900&q=80",
  },
  {
    icon: DoorOpen,
    title: "Video Door Phones (VDP)",
    desc: "See and speak with visitors before opening the door. HD video calling, two-way audio, night vision, and app-based remote unlock for modern homes.",
    features: ["HD video with wide angle", "Two-way audio", "Remote unlock via app", "Night vision built-in", "Multi-apartment support", "Recording capability"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=900&q=80",
  },
  {
    icon: Lock,
    title: "Smart Locks & Access Control",
    desc: "Fingerprint, PIN, RFID card, and app-based smart locks for homes and offices. No more lost keys — manage access remotely and set temporary codes.",
    features: ["Fingerprint + PIN + RFID", "Mobile app unlock", "Temporary access codes", "Auto-lock timer", "Forced entry alerts", "Access log history"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
  {
    icon: Bell,
    title: "Fire & Burglar Alarms",
    desc: "Addressable and conventional fire alarm systems, smoke detectors, heat sensors, and burglar alarm panels with GSM/PSTN diallers for immediate alerts.",
    features: ["Addressable fire panels", "Photoelectric smoke sensors", "Heat & CO detectors", "GSM/SMS alert diallers", "Strobe & siren outputs", "24/7 monitoring option"],
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=900&q=80",
  },
  {
    icon: Wifi,
    title: "Perimeter Security",
    desc: "Infrared beam detectors, electric fencing, and PIR motion sensors to secure the boundary of your property before intruders reach the door.",
    features: ["Active IR beam sensors", "Electric fence integration", "PIR boundary detection", "Video analytics triggers", "Zone-based alerts", "24V tamper protection"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80",
  },
  {
    icon: Shield,
    title: "Integrated Security Management",
    desc: "Unify all your security systems — CCTV, access control, alarms — into a single dashboard. Monitor, control, and respond from anywhere.",
    features: ["Unified control dashboard", "Mobile & web access", "Event correlation", "Scheduled arming/disarming", "Multi-site management", "Incident reporting"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
  },
];

const brands = ["Hikvision", "Dahua", "CP Plus", "Honeywell", "Bosch", "Napco", "Yale", "Godrej"];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8f9fc] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 via-transparent to-blue-50/40 pointer-events-none" />
        <div className="container-wide relative z-10">
          <FadeIn>
            <SectionLabel>Security Solutions</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-xl text-gray-900 mb-6 max-w-3xl">
              Protect What{" "}
              <span className="gradient-text">Matters Most</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-lg text-gray-500 max-w-2xl mb-10">
              Comprehensive, layered security systems designed for Faridabad and Delhi NCR homes,
              villas, and offices. From a single camera to enterprise-grade multi-site deployments.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-red">
            Get Free Security Consultation Today <ArrowRight size={16} />
              </Link>
              <Link href="/case-studies" className="btn-outline">
                View Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <h2 className="heading-lg text-gray-900 mb-4">
                Complete Security Ecosystem
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-500 body-lg">Every layer of your home or office, protected.</p>
            </FadeIn>
          </div>

          <div className="space-y-20">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              const isEven = i % 2 === 0;
              return (
                <FadeIn key={s.title} delay={0.1}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                    {/* Image */}
                    <div className={`relative rounded-3xl overflow-hidden h-80 ${isEven ? "" : "lg:col-start-2"}`}>
                      <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                          <Icon size={20} className="text-brand-red" />
                        </div>
                        <span className="tag">{s.title}</span>
                      </div>
                      <h3 className="heading-md text-gray-900 mb-4">{s.title}</h3>
                      <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                      <div className="grid grid-cols-2 gap-2.5">
                        {s.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                      <Link href="/contact" className="btn-primary mt-8 inline-flex text-sm">
                        Get Free Security Consultation Today <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-[#f8f9fc] border-t border-gray-100">
        <div className="container-wide">
          <FadeIn>
            <p className="text-center text-xs text-gray-400 tracking-widest uppercase font-semibold mb-8">
              Authorised Partners & Brands
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              {brands.map((b) => (
                <span key={b} className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-600 shadow-sm">
                  {b}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red px-4">
        <div className="container-wide text-center">
          <h2 className="font-display text-4xl text-white font-semibold mb-4">
            Get a Free Security Assessment
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Our experts will visit your home or office, identify vulnerabilities, and recommend the right security plan.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-red px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors">
            Get Free Security Consultation Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
