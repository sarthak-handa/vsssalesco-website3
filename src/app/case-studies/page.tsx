import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, IndianRupee, Clock } from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case Studies – Real Smart Home Transformations",
  description:
    "See real projects delivered by VSS Salesco. Home automation, security, and theater installations across Faridabad, Gurugram, Noida, and Delhi NCR.",
};

const caseStudies = [
  {
    id: 1,
    title: "4BHK Villa Full Automation — Sector 50, Faridabad",
    category: "Home Automation + Security",
    client: "Private Villa Owner",
    location: "Sector 50, Faridabad",
    budget: "₹18 Lakhs",
    duration: "6 Weeks",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1000&q=80",
    challenge: "The client wanted a unified smart home that controlled every electrical circuit, while maintaining a clean aesthetic with no exposed conduit.",
    solution: "We installed a KNX bus-based automation backbone with Lutron Caseta dimmers, motorised Somfy blinds, Mitsubishi VRF climate control, and a 32-camera Hikvision 4K security grid — all accessible from a single iPad panel and smartphone app.",
    results: ["32 smart lighting zones", "8-zone multi-room audio", "32-camera 4K CCTV", "Motorised blinds throughout", "Single-app control", "50% energy saving"],
    tags: ["KNX", "Lutron", "Hikvision 4K", "Somfy", "Mitsubishi VRF"],
  },
  {
    id: 2,
    title: "Dolby Atmos Home Cinema — DLF Phase 4, Gurugram",
    category: "Home Theater",
    client: "Corporate Executive",
    location: "DLF Phase 4, Gurugram",
    budget: "₹12 Lakhs",
    duration: "3 Weeks",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1000&q=80",
    challenge: "An irregularly shaped basement room with significant parallel-wall flutter echo. The client required Dolby Atmos certification and a seating capacity of 8.",
    solution: "We carried out full acoustic design with custom bass traps and diffusers, installed a 9.2.4 Dolby Atmos speaker array, a 20,000-lumen laser projector on a 150″ motorised screen, and integrated Crestron control with automated lighting curtains.",
    results: ["Dolby Atmos 9.2.4 system", "150\" motorised screen", "20,000 lumen laser projection", "8-seat dedicated cinema", "THX-compliant acoustics", "One-touch scene control"],
    tags: ["Dolby Atmos", "Laser Projector", "Crestron", "Acoustic Design"],
  },
  {
    id: 3,
    title: "Office Security Overhaul — Sector 63, Noida",
    category: "Security + EPABX",
    client: "IT Services Company",
    location: "Sector 63, Noida",
    budget: "₹9 Lakhs",
    duration: "4 Weeks",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&q=80",
    challenge: "A 60-employee office needed complete surveillance coverage, biometric access control across 5 secure zones, and a scalable internal communication system.",
    solution: "We installed a 64-channel Hikvision NVR with 48 cameras (including LPR at entry), Zkteco biometric readers for 5 zones, a Panasonic IP-EPABX with 40 SIP extensions, and a Polycom video conferencing endpoint in the boardroom.",
    results: ["64-channel NVR system", "48 cameras including LPR", "5-zone biometric access", "40-extension IP EPABX", "4K boardroom VC system", "24/7 remote monitoring"],
    tags: ["Hikvision", "Zkteco Biometric", "Panasonic EPABX", "Polycom VC"],
  },
  {
    id: 4,
    title: "Builder Floor Smart Upgrade — Palam Vihar, Gurugram",
    category: "Home Automation",
    client: "Young Professional Family",
    location: "Palam Vihar, Gurugram",
    budget: "₹3.2 Lakhs",
    duration: "2 Weeks",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80",
    challenge: "A retrofit job on a 2-year-old builder floor. The challenge was implementing smart controls without breaking existing walls or rewiring.",
    solution: "We used Zigbee-based wireless smart switches from Orvibo installed over existing conventional switches, connected to a Broadlink hub for AC control, and set up an Alexa/Google Home integration with a 4-camera basic CCTV system.",
    results: ["Zero wall breakage", "8-room smart lighting", "6 AC units automated", "Alexa & Google Home enabled", "4-camera CCTV", "2-week delivery"],
    tags: ["Zigbee", "Wireless Retrofit", "Alexa Integration", "CP Plus CCTV"],
  },
  {
    id: 5,
    title: "Gate & Barrier Automation — Faridabad Township",
    category: "Gate Automation",
    client: "Residential Society (80 units)",
    location: "NIT, Faridabad",
    budget: "₹4.5 Lakhs",
    duration: "3 Weeks",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=1000&q=80",
    challenge: "An 80-unit society needed automated boom barriers at 2 entry points with ANPR, video intercom for residents, and a visitor management system.",
    solution: "We installed BFT boom barriers with ANPR cameras and integration into a cloud-based visitor management system, along with 2-wire video intercom for all 80 units and a guard monitoring station.",
    results: ["ANPR-enabled entry", "Cloud visitor management", "2-wire intercom to 80 flats", "24/7 guard monitoring station", "UPS-backed system", "Mobile app access for residents"],
    tags: ["BFT Barriers", "ANPR", "Video Intercom", "Visitor Management"],
  },
  {
    id: 6,
    title: "Luxury Hotel Room Automation — NH48, Faridabad",
    category: "Hospitality Automation",
    client: "Boutique Hotel (32 rooms)",
    location: "NH48, Faridabad",
    budget: "₹14 Lakhs",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1000&q=80",
    challenge: "Automate 32 hotel rooms with card-based energy control, Do Not Disturb integration, and IPTV — while keeping the system maintainable by non-technical hotel staff.",
    solution: "We deployed a KNX room controller per room with card key activation, fan coil unit control, DND/Make My Room panel, IPTV with 150+ channels, and a central hotel management dashboard for staff.",
    results: ["32 fully automated rooms", "Card-based energy cut-off", "IPTV with 150+ channels", "Central staff dashboard", "35% energy reduction", "Guest mobile control app"],
    tags: ["KNX", "IPTV", "Hospitality Automation", "Energy Management"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8f9fc]">
        <div className="container-wide">
          <FadeIn><SectionLabel>Case Studies</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-xl text-gray-900 mb-6 max-w-3xl">
              Projects That{" "}
              <span className="gradient-text">Prove the Work</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-lg text-gray-500 max-w-2xl">
              Real transformations. Real clients. Real results. Explore how we&apos;ve changed the way
              homes and businesses across Delhi NCR operate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <FadeIn key={cs.id} delay={i * 0.07}>
                <article className="group border border-gray-100 rounded-3xl overflow-hidden hover:shadow-card-hover transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-semibold tracking-widest uppercase text-white bg-brand-red px-3 py-1 rounded-full">
                        {cs.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-navy transition-colors leading-snug">
                      {cs.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">{cs.challenge}</p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-medium mb-5">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {cs.location}</span>
                      <span className="flex items-center gap-1"><IndianRupee size={12} /> {cs.budget}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {cs.duration}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-2 pt-5 border-t border-gray-100">
                      {cs.results.slice(0, 4).map((r) => (
                        <div key={r} className="flex items-center gap-1.5 text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy px-4 text-center">
        <div className="container-wide">
          <h2 className="font-display text-4xl text-white font-semibold mb-4">
            Ready to Be Our Next Case Study?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your space. We&apos;ll design a solution worth showcasing.
          </p>
          <Link href="/contact" className="btn-red inline-flex">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
