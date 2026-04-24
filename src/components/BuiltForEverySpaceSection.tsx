import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const spaces = [
  {
    label: "Classrooms",
    icon: "🏫",
    desc: "K-12 and higher education environments",
    accent: "#00D4FF",
  },
  {
    label: "Boardrooms",
    icon: "🏢",
    desc: "Executive meetings and strategy sessions",
    accent: "#2D4AFF",
  },
  {
    label: "Training Rooms",
    icon: "🎯",
    desc: "Corporate L&D and skill development",
    accent: "#7B2FFF",
  },
  {
    label: "Seminar Halls",
    icon: "🎤",
    desc: "Academic and professional seminars",
    accent: "#00D4FF",
  },
  {
    label: "Auditoriums",
    icon: "🏛️",
    desc: "Large-scale presentations and events",
    accent: "#2D4AFF",
  },
];

const accessories = [
  { label: "Smart Stylus", icon: "✏️", desc: "4096 pressure levels, tilt recognition" },
  { label: "Wall Mount", icon: "📌", desc: "VESA-compatible, motorized height adjust" },
  { label: "OPS Module", icon: "💻", desc: "i7 Windows 11 embedded PC module" },
  { label: "4K Camera", icon: "📷", desc: "AI auto-tracking, 120° wide-angle" },
  { label: "Mobile Stand", icon: "🦺", desc: "Heavy-duty rolling stand, cable management" },
];

export default function BuiltForEverySpaceSection() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-80px" });
  const { isDark } = useTheme();

  return (
    <>
      {/* Spaces Section */}
      <section
        ref={ref}
        className={`relative py-24 overflow-hidden transition-colors duration-500 ${
          isDark ? "bg-mesh-dark" : "bg-white"
        }`}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div
              className="inline-block px-4 py-1.5 rounded-full mb-4 font-jakarta text-xs font-medium tracking-widest uppercase text-[#00D4FF]"
              style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
            >
              Versatile Deployment
            </div>
            <h2 className={`font-syne font-bold text-4xl lg:text-5xl mb-4 ${isDark ? "text-white" : "text-[#1C2340]"}`}>
              Built for{" "}
              <span className="text-gradient-cyan">Every Space</span>
            </h2>
            <p className={`font-jakarta text-lg max-w-2xl mx-auto ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>
              One ecosystem. Optimized for every environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {spaces.map((space, i) => (
              <motion.div
                key={space.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group rounded-2xl p-6 text-center cursor-default transition-all duration-300 ${
                  isDark
                    ? "glass-card hover:border-[rgba(0,212,255,0.4)]"
                    : "bg-[#F4F6FB] border border-gray-100 hover:border-[rgba(0,212,255,0.3)] hover:bg-white"
                }`}
                whileHover={{ y: -6, boxShadow: `0 20px 40px ${space.accent}20` }}
                style={{ isolation: "isolate" }}
              >
                <motion.div
                  className="text-4xl mb-3 block"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                >
                  {space.icon}
                </motion.div>
                <h3 className={`font-syne font-bold text-sm mb-2 ${isDark ? "text-white" : "text-[#1C2340]"}`}>{space.label}</h3>
                <p className={`font-jakarta text-xs leading-relaxed ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>{space.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section
        ref={ref2}
        className={`relative py-24 overflow-hidden transition-colors duration-500 ${
          isDark
            ? "bg-mesh-dark border-t border-[rgba(0,212,255,0.08)]"
            : "bg-[#F4F6FB] border-t border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div
              className="inline-block px-4 py-1.5 rounded-full mb-4 font-jakarta text-xs font-medium tracking-widest uppercase text-[#7B2FFF]"
              style={{ background: "rgba(123,47,255,0.1)", border: "1px solid rgba(123,47,255,0.2)" }}
            >
              Accessories
            </div>
            <h2 className={`font-syne font-bold text-4xl lg:text-5xl mb-4 ${isDark ? "text-white" : "text-[#1C2340]"}`}>
              Complete Your{" "}
              <span className="text-gradient-purple">Setup</span>
            </h2>
          </motion.div>

          {/* Horizontal scroll strip */}
          <div className="flex gap-5 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
            {accessories.map((acc, i) => (
              <motion.div
                key={acc.label}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex-shrink-0 w-52 rounded-2xl p-6 text-center cursor-pointer group ${
                  isDark
                    ? "glass-card"
                    : "bg-white border border-gray-100 shadow-sm"
                }`}
                style={{ isolation: "isolate" }}
                whileHover={{
                  y: -6,
                  boxShadow: isDark
                    ? "0 20px 50px rgba(0,212,255,0.2), 0 0 0 1px rgba(0,212,255,0.3)"
                    : "0 20px 50px rgba(0,212,255,0.12), 0 4px 20px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,212,255,0.2)",
                }}
              >
                <motion.div
                  className="text-4xl mb-4 block"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {acc.icon}
                </motion.div>
                <h3 className={`font-syne font-bold text-sm mb-2 ${isDark ? "text-white" : "text-[#1C2340]"}`}>{acc.label}</h3>
                <p className={`font-jakarta text-xs leading-relaxed ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>{acc.desc}</p>

                <div
                  className="mt-4 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                  style={{ background: "linear-gradient(90deg, transparent, #00D4FF, transparent)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
