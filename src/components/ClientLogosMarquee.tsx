import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const logos = [
  "Delhi Public School",
  "IIT Bombay",
  "Wipro",
  "Tata Consultancy",
  "Amity University",
  "HDFC Bank",
  "St. Xavier's",
  "Infosys",
  "NIT Delhi",
  "Reliance",
  "DAV College",
  "Deloitte",
];

export default function ClientLogosMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { isDark } = useTheme();

  const bgFade = isDark ? "#0A0F1E" : "#F4F6FB";

  return (
    <section
      ref={ref}
      className={`relative py-16 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-mesh-dark" : "bg-[#F4F6FB]"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)" }} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <p className={`font-jakarta text-sm tracking-widest uppercase ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>
          Trusted by 5000+ Institutions Across India
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: `linear-gradient(90deg, ${bgFade}, transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: `linear-gradient(-90deg, ${bgFade}, transparent)` }} />

        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className={`flex-shrink-0 px-8 py-4 rounded-xl flex items-center gap-3 group hover:border-[rgba(0,212,255,0.4)] transition-all duration-300 ${
                isDark
                  ? "glass-card"
                  : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", color: "#00D4FF" }}
              >
                {logo[0]}
              </div>
              <span className={`font-jakarta text-sm font-medium transition-colors ${isDark ? "text-[#A8B4D8] group-hover:text-white" : "text-[#4A5578] group-hover:text-[#1C2340]"}`}>
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
