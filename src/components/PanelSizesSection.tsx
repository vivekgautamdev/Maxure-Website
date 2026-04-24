import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const sizes = [
  {
    inch: '55"',
    label: "Compact",
    ideal: "Small classrooms, meeting rooms",
    specs: { res: "4K UHD", touch: "40-pt", brightness: "350 nit" },
    accent: "#00D4FF",
  },
  {
    inch: '65"',
    label: "Standard",
    ideal: "Mid-size classrooms, huddle rooms",
    specs: { res: "4K UHD", touch: "40-pt", brightness: "380 nit" },
    accent: "#2D4AFF",
  },
  {
    inch: '75"',
    label: "Professional",
    ideal: "Boardrooms, training centers",
    specs: { res: "4K UHD", touch: "40-pt", brightness: "400 nit" },
    accent: "#7B2FFF",
    popular: true,
  },
  {
    inch: '86"',
    label: "Large",
    ideal: "Large classrooms, seminar halls",
    specs: { res: "4K UHD", touch: "40-pt", brightness: "420 nit" },
    accent: "#2D4AFF",
  },
  {
    inch: '98"',
    label: "Flagship",
    ideal: "Auditoriums, large venues",
    specs: { res: "4K UHD", touch: "40-pt", brightness: "450 nit" },
    accent: "#00D4FF",
  },
];

export default function PanelSizesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { isDark } = useTheme();

  return (
    <section
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#0D1330]" : "bg-[#F4F6FB]"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(26,47,191,0.3), transparent)" }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-4 font-jakarta text-xs font-medium tracking-widest uppercase text-[#1A2FBF]"
            style={{ background: "rgba(26,47,191,0.1)", border: "1px solid rgba(26,47,191,0.2)" }}
          >
            Size Options
          </div>
          <h2 className={`font-syne font-bold text-4xl lg:text-5xl mb-4 ${isDark ? "text-white" : "text-[#1C2340]"}`}>
            Right Size{" "}
            <span className="text-gradient-purple">for Every Room</span>
          </h2>
          <p className={`font-jakarta text-lg max-w-2xl mx-auto ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>
            From intimate meeting rooms to grand auditoriums — we have the perfect size.
          </p>
        </motion.div>

        {/* Size Cards — isolated container to prevent bg bleed on hover */}
        <div className="flex gap-5 overflow-x-auto pb-6" style={{ scrollbarWidth: "none" }}>
          {sizes.map((size, i) => (
            <motion.div
              key={size.inch}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex-shrink-0 w-52 rounded-2xl cursor-pointer group"
              style={{
                background: isDark ? "rgba(255,255,255,0.05)" : "white",
                border: size.popular
                  ? `2px solid ${size.accent}`
                  : isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(0,0,0,0.08)",
                boxShadow: size.popular
                  ? `0 8px 30px ${size.accent}30`
                  : isDark
                  ? "0 4px 20px rgba(0,0,0,0.3)"
                  : "0 4px 20px rgba(0,0,0,0.06)",
                // Isolation prevents hover transform from revealing section bg
                isolation: "isolate",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 20px 50px ${size.accent}40, 0 0 0 2px ${size.accent}60`,
                zIndex: 10,
              }}
            >
              {size.popular && (
                <div
                  className="absolute top-0 left-0 right-0 text-center py-1.5 text-xs font-jakarta font-semibold text-white rounded-t-2xl"
                  style={{ background: size.accent }}
                >
                  Most Popular
                </div>
              )}

              <div
                className={`p-6 rounded-2xl ${
                  isDark ? "bg-[rgba(255,255,255,0.05)]" : "bg-white"
                } ${size.popular ? "pt-9" : ""}`}
              >
                {/* Size display */}
                <div className="text-center mb-4">
                  <div className={`font-syne font-bold text-5xl ${isDark ? "text-white" : "text-[#1C2340]"}`}>{size.inch}</div>
                  <div
                    className="font-jakarta font-semibold text-sm mt-1"
                    style={{ color: size.accent }}
                  >
                    {size.label} Series
                  </div>
                </div>

                {/* Visual panel representation */}
                <div
                  className="w-full mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:opacity-80"
                  style={{
                    height: `${48 + i * 8}px`,
                    background: `linear-gradient(135deg, ${size.accent}20, ${size.accent}08)`,
                    border: `1px solid ${size.accent}30`,
                  }}
                >
                  <span className="font-mono-jetbrains text-xs" style={{ color: size.accent }}>
                    {size.inch} Panel
                  </span>
                </div>

                {/* Ideal for */}
                <p className={`font-jakarta text-xs text-center mb-4 leading-relaxed ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>
                  {size.ideal}
                </p>

                {/* Specs */}
                <div
                  className="flex flex-col gap-1.5 pt-4"
                  style={{ borderTop: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)" }}
                >
                  {Object.entries(size.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className={`font-jakarta text-xs capitalize ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>{key}</span>
                      <span className="font-mono-jetbrains text-xs font-medium" style={{ color: size.accent }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom border glow on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${size.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Compare CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-jakarta font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #1A2FBF, #2D4AFF)", boxShadow: "0 0 30px rgba(45,74,255,0.3)" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(45,74,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            Compare All Sizes <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
