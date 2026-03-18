"use client";
import React from "react";

import { motion } from "framer-motion";
import { useRef } from "react";

// ─── FadeIn wrapper ──────────────────────────────────────────────────────────
interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({ children, className = "", delay = 0, direction = "up" }: FadeInProps) {
  const initial = {
    opacity: 0,
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
  };
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Section Label ───────────────────────────────────────────────────────────
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-px bg-brand-red" />
      <span className="tag">{children}</span>
    </div>
  );
}

// ─── Magnetic Button ─────────────────────────────────────────────────────────
interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className = "", href, onClick }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
    el.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)";
  };

  const Tag = href ? "a" : "button";

  return (
    <div
      ref={ref}
      style={{ transition: "transform 0.15s ease" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Tag href={href} onClick={onClick} className={className}>
        {children}
      </Tag>
    </div>
  );
}

// ─── Stats Counter ───────────────────────────────────────────────────────────
interface StatProps {
  value: string;
  label: string;
  color?: "navy" | "red";
}

export function StatCard({ value, label, color = "navy" }: StatProps) {
  return (
    <div className="text-center">
      <p className={`font-display text-4xl md:text-5xl font-semibold mb-1 ${color === "red" ? "text-brand-red" : "text-brand-navy"}`}>
        {value}
      </p>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </div>
  );
}
