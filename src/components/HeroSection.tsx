import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download, Play } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

function PanelMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow effect behind panel */}
      <div
        className="absolute inset-0 rounded-2xl blur-3xl opacity-40"
        style={{
          background: "radial-gradient(ellipse, #2D4AFF 0%, #00D4FF 50%, transparent 70%)",
          transform: "scale(0.9) translateY(20px)",
        }}
      />

      {/* Panel Frame */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #1a2040, #0d1330)",
          border: "2px solid rgba(0,212,255,0.4)",
          boxShadow:
            "0 0 60px rgba(0,212,255,0.2), 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
          aspectRatio: "16/10",
        }}
      >
        {/* Screen Content */}
        <div
          className="absolute inset-2 rounded-xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0a1628 0%, #0d2044 100%)",
          }}
        >
          {/* Simulated UI on screen */}
          <div className="w-full h-full p-6 flex flex-col gap-3">
            {/* Top bar */}
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <div className="h-2 w-24 rounded-full bg-[rgba(0,212,255,0.3)]" />
              <div className="h-2 w-16 rounded-full bg-[rgba(255,255,255,0.1)] ml-auto" />
              <div className="h-2 w-8 rounded-full bg-[rgba(255,255,255,0.1)]" />
            </div>

            {/* Whiteboard simulation */}
            <div
              className="flex-1 rounded-xl p-4 relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,212,255,0.15)" }}
            >
              {/* Animated stroke lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                <motion.path
                  d="M 30 80 Q 80 40 140 70 Q 200 100 260 50 Q 320 20 370 60"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="400"
                  initial={{ strokeDashoffset: 400 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 3, delay: 1, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 }}
                  opacity={0.7}
                />
                <motion.path
                  d="M 50 140 Q 120 110 180 130 Q 240 150 300 120 Q 350 100 380 130"
                  stroke="#7B2FFF"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="400"
                  initial={{ strokeDashoffset: 400 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 3, delay: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 }}
                  opacity={0.6}
                />
                {/* Annotation dot */}
                <motion.circle
                  cx="200"
                  cy="70"
                  r="4"
                  fill="#00D4FF"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 1] }}
                  transition={{ duration: 0.5, delay: 2.5, repeat: Infinity, repeatDelay: 4 }}
                />
              </svg>

              {/* Floating UI cards on screen */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                {["Whiteboard", "Annotate", "Share"].map((label, i) => (
                  <motion.div
                    key={label}
                    className="px-3 py-1 rounded-lg text-xs font-jakarta font-medium text-white"
                    style={{
                      background: "rgba(0,212,255,0.15)",
                      border: "1px solid rgba(0,212,255,0.3)",
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                  >
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 flex-1 rounded-md"
                  style={{
                    background: i === 2 ? "rgba(0,212,255,0.3)" : "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Panel bezel details */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-t-full bg-[rgba(0,212,255,0.3)]" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.5)] to-transparent" />
      </div>

      {/* Stand */}
      <div className="flex justify-center mt-2">
        <div
          className="w-24 h-4 rounded-b-xl"
          style={{
            background: "linear-gradient(180deg, rgba(26,32,64,1) 0%, rgba(13,19,48,1) 100%)",
            border: "1px solid rgba(0,212,255,0.2)",
            borderTop: "none",
          }}
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [8, -8]);
  const rotateY = useTransform(springX, [-300, 300], [-8, 8]);
  const { isDark } = useTheme();

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center overflow-hidden noise-overlay transition-colors duration-500 ${
        isDark ? "bg-mesh-dark" : "bg-gradient-to-br from-[#EDF0FF] via-[#F4F6FB] to-[#E8EDFF]"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-bg-pulse"
          style={{ background: "radial-gradient(circle, #2D4AFF, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 animate-bg-pulse"
          style={{ background: "radial-gradient(circle, #00D4FF, transparent)", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-5"
          style={{ background: "radial-gradient(circle, #7B2FFF, transparent)" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(0,212,255,0.1)",
                border: "1px solid rgba(0,212,255,0.3)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="font-jakarta text-xs font-medium text-[#00D4FF] tracking-widest uppercase">
                Next-Gen Interactive Technology
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-syne text-5xl lg:text-7xl font-bold leading-tight mb-6 ${
                isDark ? "text-white" : "text-[#1C2340]"
              }`}
            >
              The Future of{" "}
              <span className="text-gradient-cyan">Interactive</span>{" "}
              Learning
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`font-jakarta text-lg leading-relaxed mb-8 max-w-lg ${
                isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"
              }`}
            >
              Maxure Interactive Panels redefine collaboration in classrooms,
              boardrooms, and training centers. Experience 4K precision, 40-point
              multi-touch, and seamless wireless connectivity.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-jakarta font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #1A2FBF, #2D4AFF)",
                  boxShadow: "0 0 30px rgba(45,74,255,0.4)",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(45,74,255,0.6)" }}
                whileTap={{ scale: 0.97 }}
              >
                Book a Demo <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#brochure"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-jakarta font-semibold ${
                  isDark
                    ? "glass-card text-white"
                    : "bg-white text-[#1C2340] border border-gray-200 shadow-sm hover:shadow-md"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} /> Download Brochure
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8"
            >
              {[
                { value: "5000+", label: "Installations" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "40pt", label: "Multi-Touch" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className={`font-syne font-bold text-2xl ${isDark ? "text-white" : "text-[#1C2340]"}`}>{stat.value}</div>
                  <div className={`font-jakarta text-xs mt-0.5 ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Panel Mockup */}
          <motion.div
            ref={containerRef}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="animate-float"
              style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
            >
              <PanelMockup />
            </motion.div>

            {/* Floating specs badges */}
            <motion.div
              className={`absolute -left-4 top-1/4 px-3 py-2 rounded-xl ${isDark ? "glass-card" : "bg-white border border-gray-200 shadow-lg"}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
            >
              <div className="font-mono-jetbrains text-xs text-[#00D4FF]">4K UHD</div>
              <div className={`font-jakarta text-xs ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>3840 × 2160</div>
            </motion.div>

            <motion.div
              className={`absolute -right-4 bottom-1/4 px-3 py-2 rounded-xl ${isDark ? "glass-card" : "bg-white border border-gray-200 shadow-lg"}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="font-mono-jetbrains text-xs text-[#00D4FF]">20ms</div>
              <div className={`font-jakarta text-xs ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>Touch Latency</div>
            </motion.div>

            <motion.div
              className={`absolute top-0 left-1/2 -translate-x-1/2 px-3 py-2 rounded-xl ${isDark ? "glass-card" : "bg-white border border-gray-200 shadow-lg"}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="font-mono-jetbrains text-xs text-[#00D4FF]">Android 13</div>
              <div className={`font-jakarta text-xs ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>Built-in OS</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className={`font-jakarta text-xs tracking-widest uppercase ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-gradient-to-b from-[#00D4FF] to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
