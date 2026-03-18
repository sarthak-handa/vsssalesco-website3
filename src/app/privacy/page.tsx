import type { Metadata } from "next";
import { FadeIn } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for VSS Salesco website.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container-wide max-w-3xl">
        <FadeIn>
          <h1 className="heading-xl text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-10">Last updated: June 2024</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="prose prose-gray max-w-none">
            <h2>Information We Collect</h2>
            <p>When you fill out our contact form, we collect your name, phone number, email address, and project details. This information is used solely to respond to your enquiry.</p>
            <h2>How We Use Your Information</h2>
            <p>We use the information you provide to contact you about your project enquiry. We do not sell, trade, or share your personal data with third parties for marketing purposes.</p>
            <h2>Cookies</h2>
            <p>Our website may use essential cookies to ensure proper functionality. We do not use third-party advertising cookies.</p>
            <h2>Contact</h2>
            <p>If you have any questions about this privacy policy, please contact us at info@vsssalesco.in or call +91 99906 96111.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
