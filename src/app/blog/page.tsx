import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog – Smart Home Guides, Security Tips & Automation Insights",
  description:
    "Expert guides on home automation, CCTV security systems, home theater setup, and smart living. VSS Salesco's knowledge hub for Delhi NCR homeowners.",
};

const posts = [
  {
    slug: "complete-guide-home-automation-faridabad",
    title: "The Complete Guide to Home Automation in Faridabad (2024)",
    excerpt: "Everything you need to know before automating your home — protocols, costs, brands, and what to ask your installer.",
    category: "Home Automation",
    readTime: "8 min read",
    date: "June 12, 2024",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    featured: true,
  },
  {
    slug: "cctv-vs-ip-camera-which-is-better",
    title: "CCTV vs IP Cameras: Which Is Better for Your Home in 2024?",
    excerpt: "Analog CCTV vs IP NVR — a clear comparison of resolution, cost, remote access, and scalability to help you choose right.",
    category: "Security",
    readTime: "6 min read",
    date: "May 28, 2024",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    featured: false,
  },
  {
    slug: "dolby-atmos-home-theater-guide",
    title: "Building a Dolby Atmos Home Theater: What You Really Need",
    excerpt: "Speaker placement, receiver specs, screen size, and acoustic treatment — a practical guide for first-time home theater buyers.",
    category: "Home Theater",
    readTime: "10 min read",
    date: "May 15, 2024",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    featured: false,
  },
  {
    slug: "smart-locks-worth-it-india",
    title: "Are Smart Locks Worth It in India? An Honest Review",
    excerpt: "We've installed hundreds of smart locks. Here's what actually works, what breaks, and what to buy for Indian homes.",
    category: "Security",
    readTime: "7 min read",
    date: "April 30, 2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    featured: false,
  },
  {
    slug: "knx-vs-modbus-vs-zigbee-home-automation",
    title: "KNX vs Modbus vs Zigbee: Which Automation Protocol Is Best?",
    excerpt: "A deep dive into the three most popular home automation protocols — wired vs wireless, cost, reliability, and scalability.",
    category: "Home Automation",
    readTime: "9 min read",
    date: "April 18, 2024",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    featured: false,
  },
  {
    slug: "gate-automation-buyers-guide-india",
    title: "Gate Automation Buyer's Guide for Indian Homes",
    excerpt: "Swing vs sliding, motor brands, intercom integration, power backup — everything the smart gate buyer needs to know.",
    category: "Gate Automation",
    readTime: "5 min read",
    date: "March 22, 2024",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80",
    featured: false,
  },
  {
    slug: "epabx-vs-ip-pbx-for-small-office",
    title: "EPABX vs IP-PBX: What Should Your Small Office Choose?",
    excerpt: "Confused between traditional EPABX and modern IP-PBX? We break down the real differences, costs, and upgrade paths.",
    category: "EPABX",
    readTime: "6 min read",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    featured: false,
  },
  {
    slug: "home-theater-room-size-guide",
    title: "How to Pick the Right Room for Your Home Theater",
    excerpt: "Dimensions, aspect ratios, door placement, HVAC noise — the factors that make or break a home cinema before a single speaker is placed.",
    category: "Home Theater",
    readTime: "7 min read",
    date: "February 18, 2024",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Home Automation": "bg-blue-50 text-blue-700 border-blue-100",
  "Security":        "bg-red-50 text-red-700 border-red-100",
  "Home Theater":    "bg-purple-50 text-purple-700 border-purple-100",
  "Gate Automation": "bg-green-50 text-green-700 border-green-100",
  "EPABX":           "bg-amber-50 text-amber-700 border-amber-100",
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f8f9fc]">
        <div className="container-wide">
          <FadeIn><SectionLabel>Knowledge Hub</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="heading-xl text-gray-900 mb-6 max-w-3xl">
              Smart Living,{" "}
              <span className="gradient-text">Explained Simply</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-lg text-gray-500 max-w-2xl">
              Expert guides, comparison articles, and installation tips for homeowners navigating
              the world of automation and security.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-0 bg-white">
        <div className="container-wide">
          <FadeIn>
            <Link href={`/blog/${featured.slug}`} className="group grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-card-hover transition-all duration-500 mb-8">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold bg-brand-red text-white px-3 py-1 rounded-full">Featured</span>
                </div>
              </div>
              <div className="p-10 flex flex-col justify-center bg-white">
                <span className={`inline-block text-xs font-semibold border px-3 py-1 rounded-full mb-4 self-start ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-brand-navy transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-red group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-8">All Articles</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.07}>
                <Link href={`/blog/${post.slug}`} className="group service-card flex flex-col h-full block">
                  <div className="relative h-48 rounded-xl overflow-hidden mb-5 -mx-2 -mt-2">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <span className={`inline-block text-xs font-semibold border px-2.5 py-1 rounded-full mb-3 self-start ${categoryColors[post.category] || "bg-gray-50 text-gray-600 border-gray-100"}`}>
                    <Tag size={10} className="inline mr-1" />{post.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-2 leading-snug flex-1 group-hover:text-brand-navy transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-400 mt-auto">
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
