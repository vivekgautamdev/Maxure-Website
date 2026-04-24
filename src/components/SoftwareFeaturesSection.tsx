import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Edit3, Share2, Layers, PenTool, Cloud } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const features = [
  { icon: Edit3, label: "Whiteboard", desc: "Infinite canvas whiteboarding with smart shapes and pen pressure." },
  { icon: Share2, label: "Screen Share", desc: "Wireless casting from any device in under 2 seconds." },
  { icon: Layers, label: "Multi-Window", desc: "Run 4 apps side-by-side without any external hardware." },
  { icon: PenTool, label: "Annotation", desc: "Annotate over any content and save notes to cloud instantly." },
  { icon: Cloud, label: "Cloud Storage", desc: "Auto-sync to Google Drive, OneDrive, or Dropbox." },
];

export default function SoftwareFeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { isDark } = useTheme();

  return (
    <section id="software" className={`relative py-24 overflow-hidden transition-colors duration-500 ${isDark ? "bg-mesh-dark" : "bg-white"}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)" }} />
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #7B2FFF, transparent)" }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-4 font-jakarta text-xs font-medium tracking-widest uppercase text-[#7B2FFF]"
            style={{ background: "rgba(123,47,255,0.1)", border: "1px solid rgba(123,47,255,0.2)" }}
          >
            Software Suite
          </div>
          <h2 className={`font-syne font-bold text-4xl lg:text-5xl mb-4 ${isDark ? "text-white" : "text-[#1C2340]"}`}>
            Powerful Software,{" "}
            <span className="text-gradient-purple">Built In</span>
          </h2>
          <p className={`font-jakarta text-lg max-w-2xl mx-auto ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>
            No subscription needed. All premium tools come pre-installed and ready to use.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Panel with orbiting cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
            style={{ height: "450px" }}
          >
            {/* Central panel mockup */}
            <div
              className="absolute w-64 h-44 rounded-2xl z-10"
              style={{
                background: "linear-gradient(145deg, #0d1330, #1a2040)",
                border: "2px solid rgba(0,212,255,0.35)",
                boxShadow: "0 0 60px rgba(0,212,255,0.2), 0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Screen content */}
              <div className="absolute inset-2 rounded-xl overflow-hidden" style={{ background: "rgba(10,16,32,0.9)" }}>
                <div className="w-full h-full p-3 flex flex-col gap-2">
                  <div className="flex gap-1.5">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full ${i === 0 ? "flex-1 bg-[rgba(0,212,255,0.4)]" : "w-8 bg-[rgba(255,255,255,0.1)]"}`} />
                    ))}
                  </div>
                  <div className="flex-1 rounded-lg" style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.1)" }}>
                    <svg className="w-full h-full" viewBox="0 0 200 100">
                      <motion.path
                        d="M 10 60 Q 50 20 90 50 Q 130 80 170 30"
                        stroke="#00D4FF"
                        strokeWidth="1.5"
                        fill="none"
                        strokeDasharray="200"
                        initial={{ strokeDashoffset: 200 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </svg>
                  </div>
                  <div className="flex gap-1.5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex-1 h-5 rounded-md" style={{ background: i === 1 ? "rgba(0,212,255,0.2)" : "rgba(255,255,255,0.05)" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting feature cards */}
            {features.map((feat, i) => {
              const angle = (i / features.length) * 360;
              const rad = (angle * Math.PI) / 180;
              const radius = 170;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <motion.div
                  key={feat.label}
                className={`absolute rounded-xl px-3 py-2 flex items-center gap-2 z-20 ${
                    isDark ? "glass-card" : "bg-white border border-gray-100 shadow-md"
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,212,255,0.3)" }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,212,255,0.15)", border: "1px solid rgba(0,212,255,0.3)" }}
                  >
                    <feat.icon size={13} className="text-[#00D4FF]" />
                  </div>
                  <span className={`font-jakarta text-xs font-medium whitespace-nowrap ${isDark ? "text-white" : "text-[#1C2340]"}`}>{feat.label}</span>
                </motion.div>
              );
            })}

            {/* Connection lines from center to cards */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              {features.map((feat, i) => {
                const angle = (i / features.length) * 360;
                const rad = (angle * Math.PI) / 180;
                const radius = 170;
                const x2 = 50 + (Math.cos(rad) * radius / 450) * 100;
                const y2 = 50 + (Math.sin(rad) * radius / 450) * 100;
                return (
                  <motion.line
                    key={feat.label}
                    x1="50%"
                    y1="50%"
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="rgba(0,212,255,0.2)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  />
                );
              })}
            </svg>
          </motion.div>

          {/* Right: Feature details */}
          <div className="flex flex-col gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`flex items-start gap-4 group cursor-default p-4 rounded-xl transition-all duration-300 ${
                  isDark ? "hover:glass-card" : "hover:bg-[#F4F6FB] hover:shadow-sm"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{
                    background: "rgba(0,212,255,0.1)",
                    border: "1px solid rgba(0,212,255,0.2)",
                  }}
                >
                  <feat.icon size={18} className="text-[#00D4FF]" />
                </div>
                <div>
                  <h3 className={`font-jakarta font-semibold mb-1 ${isDark ? "text-white" : "text-[#1C2340]"}`}>{feat.label}</h3>
                  <p className={`font-jakarta text-sm ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
