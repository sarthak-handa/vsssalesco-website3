import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Sun, Wind, Music, GanttChart, Phone as PhoneIcon, Zap } from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Home Automation, Gate Automation & EPABX Systems in Faridabad",
  description:
    "Smart home automation, gate & barrier systems, and EPABX communication systems for homes and businesses in Faridabad and Delhi NCR. Since 2010.",
};

const homeAutomation = [
  { icon: Sun,   title: "Smart Lighting",     desc: "Scene-based, voice-controlled, and scheduled lighting with dimmers and color tuning." },
  { icon: Wind,  title: "Climate Control",    desc: "Automated AC and HVAC control based on occupancy, time, and temperature presets." },
  { icon: Music, title: "Multi-Room Audio",   desc: "Whole-home music streaming with zone control and app-based playlist management." },
  { icon: Cpu,   title: "Motorised Curtains", desc: "Timed, sensor-triggered, or app-controlled blinds and curtains for privacy and ambience." },
  { icon: Zap,   title: "Energy Monitoring",  desc: "Real-time power consumption tracking and smart scheduling to cut your electricity bill." },
  { icon: Cpu,   title: "One-Touch Scenes",   desc: "\"Good Morning\", \"Movie Mode\", \"Goodnight\" — press one button, and your home responds." },
];

export default function AutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8f9fc] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-transparent to-transparent pointer-events-none" />
        <div className="container-wide relative z-10">
          <FadeIn><SectionLabel>Automation Solutions</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-xl text-gray-900 mb-6 max-w-3xl">
              Your Home, Thinking{" "}
              <span className="gradient-text">For Itself</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-lg text-gray-500 max-w-2xl mb-10">
              Intelligent home automation that learns your routines, adapts to your preferences,
              and gives you total control from anywhere in the world.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Get Free Security Consultation Today <ArrowRight size={16} /></Link>
              <Link href="/case-studies" className="btn-outline">View Projects</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Home Automation Grid */}
      <section className="section-pad bg-white" id="home">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <FadeIn direction="right">
              <div className="relative rounded-3xl overflow-hidden h-96">
                <Image
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?w=1000&q=80"
                  alt="Smart home automation panel"
                  fill className="object-cover"
                />
              </div>
            </FadeIn>
            <div>
              <FadeIn><SectionLabel>Home Automation</SectionLabel></FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="heading-lg text-gray-900 mb-5">
                  Every Switch. Every Light.<br />
                  <span className="gradient-text">Fully Intelligent.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-500 leading-relaxed mb-8">
                  We replace your conventional wiring with a smart backbone — KNX, Zigbee, or
                  Z-Wave — and give you a single app to control lights, fans, ACs, curtains, and
                  music across every room.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {homeAutomation.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <FadeIn key={item.title} delay={0.1 + i * 0.05}>
                      <div className="flex gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-brand-navy/10 flex items-center justify-center shrink-0">
                          <Icon size={15} className="text-brand-navy" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Gate Automation */}
          <div id="gate" className="grid lg:grid-cols-2 gap-16 items-center mb-20 pt-20 border-t border-gray-100">
            <div>
              <FadeIn><SectionLabel>Gate & Barrier Automation</SectionLabel></FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="heading-lg text-gray-900 mb-5">
                  Seamless Entry.<br />
                  <span className="gradient-text">Total Control.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Motorised sliding gates, swing gates, boom barriers, and intercom-integrated
                  access — all managed remotely from your phone or a wall keypad.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="space-y-3">
                  {[
                    "Sliding & swing gate motors",
                    "Boom barriers for parking",
                    "Remote + app-based control",
                    "Intercom & VDP integration",
                    "Vehicle loop detectors",
                    "UPS backup for power cuts",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm text-gray-600">
                      <GanttChart size={14} className="text-brand-red shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Link href="/contact" className="btn-primary mt-8 inline-flex text-sm">
                Get Free Security Consultation Today <ArrowRight size={15} />
                </Link>
              </FadeIn>
            </div>
            <FadeIn direction="left">
              <div className="relative rounded-3xl overflow-hidden h-96">
                <Image
                  src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=1000&q=80"
                  alt="Gate automation"
                  fill className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* EPABX */}
          <div id="epabx" className="grid lg:grid-cols-2 gap-16 items-center pt-20 border-t border-gray-100">
            <FadeIn direction="right">
              <div className="relative rounded-3xl overflow-hidden h-96">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80"
                  alt="EPABX communication system"
                  fill className="object-cover"
                />
              </div>
            </FadeIn>
            <div>
              <FadeIn><SectionLabel>EPABX Communication</SectionLabel></FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="heading-lg text-gray-900 mb-5">
                  Enterprise Comms.<br />
                  <span className="gradient-text">Simplified.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Digital and IP EPABX systems for offices, hospitals, schools, and hotels.
                  Auto-attendant, call recording, IVR, voicemail, and scalable multi-site configurations.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "IP-PBX & Digital EPABX",
                    "IVR & Auto-attendant",
                    "Call recording",
                    "Voicemail to email",
                    "Multi-site trunking",
                    "40+ extension support",
                    "SIP trunk integration",
                    "CRM call pop-up",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <PhoneIcon size={13} className="text-brand-red shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Link href="/contact" className="btn-primary mt-8 inline-flex text-sm">
                Get Free Security Consultation Today <ArrowRight size={15} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy px-4 text-center">
        <div className="container-wide">
          <h2 className="font-display text-4xl text-white font-semibold mb-4">
            Start Your Automation Journey
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Our consultants will visit your home, understand your lifestyle, and design a custom automation plan.
          </p>
          <Link href="/contact" className="btn-red inline-flex">
            Get Free Security Consultation Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
