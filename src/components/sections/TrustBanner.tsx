"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, MapPin } from "lucide-react";

const trustItems = [
  { icon: Award, value: "Since 2010", label: "Trusted Experience", color: "text-brand-red" },
  { icon: Users, value: "500+", label: "Installations Completed", color: "text-brand-navy" },
  { icon: Shield, value: "50+", label: "Brand Partners", color: "text-brand-red" },
  { icon: MapPin, value: "NCR-Wide", label: "Faridabad, Delhi, Gurugram, Noida", color: "text-brand-navy" },
];

const brandPartners = [
  "Hikvision", "Dahua", "CP Plus", "Honeywell", "Yale", "Godrej",
  "Lutron", "BFT", "Somfy", "Bose", "Denon", "Panasonic",
];

export function TrustBanner() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 group-hover:bg-brand-navy group-hover:border-brand-navy transition-all duration-300">
                  <Icon size={20} className={`${item.color} group-hover:text-white transition-colors`} />
                </div>
                <span className="font-display text-2xl md:text-3xl font-semibold text-gray-900">{item.value}</span>
                <span className="text-xs text-gray-500 font-medium mt-1">{item.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Brand partners */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-6">
            Authorised Brand Partners
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {brandPartners.map((brand) => (
              <span
                key={brand}
                className="px-5 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-300 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
