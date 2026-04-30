import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, Monitor, Cloud, Layers, Cpu } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const features = [
  {
    icon: Monitor,
    title: "4K UHD Display",
    description: "Crystal-clear 3840×2160 resolution with 400-nit brightness and anti-glare coating.",
  },
  {
    icon: Zap,
    title: "20ms Touch Response",
    description: "Industry-leading latency with 40-point capacitive multi-touch technology.",
  },
  {
    icon: Cpu,
    title: "Android 13 OS",
    description: "Built-in Octa-core processor with 8GB RAM for smooth, lag-free performance.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Native support for Google Workspace, Microsoft 365, and OneDrive sync.",
  },
  {
    icon: Layers,
    title: "Dual-Window Mode",
    description: "Split-screen and multi-task with up to dual apps simultaneously.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "MDM support, WPA3 encryption, and role-based access control built in.",
  },
];

export default function WhyMaxureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { isDark } = useTheme();

  return (
    <section
      id="why-maxure"
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-mesh-dark" : "bg-white"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)" }} />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #2D4AFF, transparent)" }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Feature List */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-block px-4 py-1.5 rounded-full mb-4 font-jakarta text-xs font-medium tracking-widest uppercase text-[#00D4FF]"
                style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
              >
                Why Maxure
              </div>
              <h2 className={`font-syne font-bold text-4xl lg:text-5xl mb-4 leading-tight ${isDark ? "text-white" : "text-[#1C2340]"}`}>
                Built Different.{" "}
                <span className="text-gradient-cyan">Performs Different.</span>
              </h2>
              <p className={`font-jakarta text-lg mb-10 ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>
                Every component chosen for reliability. Every feature refined for real-world use.
              </p>
            </motion.div>

            <div className="flex flex-col gap-5">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: isDark ? "rgba(0,212,255,0.1)" : "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      boxShadow: "0 0 20px rgba(0,212,255,0.1)",
                    }}
                  >
                    <feat.icon size={18} className="text-[#00D4FF]" />
                  </div>
                  <div>
                    <h3 className={`font-jakarta font-semibold mb-1 ${isDark ? "text-white" : "text-[#1C2340]"}`}>{feat.title}</h3>
                    <p className={`font-jakarta text-sm leading-relaxed ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>{feat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Panel Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow rings */}
            <div
              className="absolute w-80 h-80 rounded-full border opacity-20 animate-spin-slow"
              style={{ borderColor: "rgba(0,212,255,0.4)", borderStyle: "dashed" }}
            />
            <div
              className="absolute w-64 h-64 rounded-full border opacity-15"
              style={{
                borderColor: "rgba(45,74,255,0.4)",
                borderStyle: "dashed",
                animation: "spin-slow 15s linear infinite reverse",
              }}
            />

            {/* Main panel visual */}
            <div
              className="relative w-72 h-72 rounded-3xl flex items-center justify-center animate-float"
              style={{
                background: isDark
                  ? "linear-gradient(145deg, rgba(26,47,191,0.3), rgba(0,212,255,0.1))"
                  : "linear-gradient(145deg, rgba(26,47,191,0.08), rgba(0,212,255,0.05))",
                border: isDark ? "1px solid rgba(0,212,255,0.3)" : "1px solid rgba(0,212,255,0.2)",
                boxShadow: isDark
                  ? "0 0 60px rgba(0,212,255,0.2), 0 0 120px rgba(45,74,255,0.1)"
                  : "0 0 40px rgba(0,212,255,0.1), 0 20px 60px rgba(45,74,255,0.08)",
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-4 rounded-2xl"
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(45,74,255,0.05))"
                    : "linear-gradient(135deg, rgba(0,212,255,0.04), rgba(45,74,255,0.02))",
                  border: "1px solid rgba(0,212,255,0.15)",
                }}
              />

              {/* Center icon */}
              <div className="relative z-10 text-center">
                <div
                  className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #1A2FBF, #00D4FF)",
                    boxShadow: "0 0 40px rgba(0,212,255,0.4)",
                  }}
                >
                  <Monitor size={36} className="text-white" />
                </div>
                <div className={`font-syne font-bold text-3xl ${isDark ? "text-white" : "text-[#1C2340]"}`}>MAXURE</div>
                <div className="font-jakarta text-sm text-[#00D4FF] mt-1">Interactive Panel</div>
              </div>

              {/* Floating spec tags around the panel */}
              {[
                { label: "4K HDR", pos: "top-4 left-4" },
                { label: "40-Touch", pos: "top-4 right-4" },
                { label: "Android 13", pos: "bottom-4 left-4" },
                { label: "< 20ms", pos: "bottom-4 right-4" },
              ].map((tag) => (
                <div
                  key={tag.label}
                  className={`absolute ${tag.pos} px-2 py-1 rounded-lg ${
                    isDark
                      ? "glass-card"
                      : "bg-white border border-gray-200 shadow-sm"
                  }`}
                >
                  <span className="font-mono-jetbrains text-xs text-[#00D4FF]">{tag.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
