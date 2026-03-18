"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Shield, Zap, Tv, Lock } from "lucide-react";
import * as THREE from "three";

// ─── 3D Scene ────────────────────────────────────────────────────────────────
function FloatingSphere({ position, color, speed, distort }: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere ref={mesh} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}

function HeroScene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c0392b" />
      <pointLight position={[10, 5, 5]} intensity={0.8} color="#1e3a5f" />
      <FloatingSphere position={[3.5, 0.5, -2]} color="#1e3a5f" speed={0.8} distort={0.4} />
      <FloatingSphere position={[-3, -1, -3]} color="#c0392b" speed={1.1} distort={0.6} />
      <FloatingSphere position={[0.5, 2, -4]} color="#2d5fa8" speed={0.6} distort={0.3} />
      <Stars radius={80} depth={50} count={800} factor={2} saturation={0} fade speed={0.5} />
    </>
  );
}

function Badge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-full shadow-glass px-4 py-2.5 text-xs font-semibold text-brand-navy">
      <Icon size={14} className="text-brand-red" />
      {text}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f8f9fc]">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-50/60 via-transparent to-transparent pointer-events-none" />

      {/* 3D Canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
          <Suspense fallback={null}>
            <HeroScene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <Badge icon={Lock} text="Smart Digital Locks" />
            <Badge icon={Shield} text="Security Systems" />
            <Badge icon={Zap} text="Home Automation" />
            <Badge icon={Tv} text="Home Theater" />
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Smart Digital Locks &{" "}
            <span className="gradient-text">Advanced Security</span>
            <br />
            Systems in Faridabad
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl leading-relaxed font-light text-gray-600 mb-4 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Upgrade to intelligent security, seamless home automation, and cinematic 
            entertainment. Designed for modern living across Faridabad &amp; Delhi NCR.
          </motion.p>

          <motion.p
            className="text-sm font-medium text-brand-red mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            ⚡ Protect your home before it&apos;s too late
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link href="/contact" className="btn-red gap-2 text-sm px-8 py-4">
              Get Free Security Consultation Today <ArrowRight size={16} />
            </Link>
            <Link href="/case-studies" className="btn-outline gap-2 text-sm px-7 py-3.5 group">
              <Play size={14} className="group-hover:text-brand-red transition-colors" />
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-8 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "Since 2010", label: "Trusted Experience" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "NCR", label: "Coverage Area" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-brand-navy">{stat.value}</span>
                <span className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-xs text-gray-400 tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
