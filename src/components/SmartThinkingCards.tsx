import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Brain, Presentation, Wifi } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const cards = [
  {
    icon: Users,
    title: "Collaborate",
    description: "Up to 4 users write simultaneously with zero lag on the 40-point multi-touch surface.",
    gradient: "from-[#00D4FF] to-[#2D4AFF]",
    glow: "rgba(0,212,255,0.3)",
  },
  {
    icon: Brain,
    title: "Teach Smarter",
    description: "AI-powered lesson tools, annotation overlay, and integrated quiz builder for engaged classrooms.",
    gradient: "from-[#2D4AFF] to-[#7B2FFF]",
    glow: "rgba(45,74,255,0.3)",
  },
  {
    icon: Presentation,
    title: "Present Better",
    description: "Cast from any device wirelessly. Split screen. 4K crisp visuals for any audience size.",
    gradient: "from-[#7B2FFF] to-[#00D4FF]",
    glow: "rgba(123,47,255,0.3)",
  },
  {
    icon: Wifi,
    title: "Connect Wirelessly",
    description: "AirPlay, Miracast, and Google Cast built-in. No cables, no dongles, no frustration.",
    gradient: "from-[#00D4FF] to-[#7B2FFF]",
    glow: "rgba(0,212,255,0.3)",
  },
];

export default function SmartThinkingCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isDark } = useTheme();

  return (
    <section
      id="features"
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-mesh-dark" : "bg-white"
      }`}
    >
      {/* Section background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-4 font-jakarta text-xs font-medium tracking-widest uppercase text-[#00D4FF]"
            style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
          >
            Smart Technology
          </div>
          <h2 className={`font-syne font-bold text-4xl lg:text-5xl mb-4 ${isDark ? "text-white" : "text-[#1C2340]"}`}>
            Designed for{" "}
            <span className="text-gradient-cyan">Smart Thinking</span>
          </h2>
          <p className={`font-jakarta text-lg max-w-2xl mx-auto ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>
            Every feature engineered to empower educators, presenters, and collaborators.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`group relative rounded-2xl p-6 cursor-default overflow-hidden ${
                isDark
                  ? "glass-card"
                  : "bg-white border border-gray-100 shadow-md hover:shadow-xl"
              }`}
              whileHover={{
                y: -8,
                boxShadow: isDark
                  ? `0 20px 60px ${card.glow}, 0 0 0 1px rgba(0,212,255,0.3)`
                  : `0 20px 60px ${card.glow}, 0 4px 20px rgba(0,0,0,0.08)`,
              }}
              style={{ boxShadow: isDark ? `0 8px 30px rgba(0,0,0,0.3)` : undefined }}
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                style={{ background: `linear-gradient(135deg, ${card.glow}, transparent)` }}
              />

              {/* Icon */}
              <motion.div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 relative`}
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                style={{ boxShadow: `0 0 20px ${card.glow}` }}
              >
                <card.icon size={22} className="text-white" />
              </motion.div>

              <h3 className={`font-syne font-bold text-lg mb-3 ${isDark ? "text-white" : "text-[#1C2340]"}`}>{card.title}</h3>
              <p className={`font-jakarta text-sm leading-relaxed ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>{card.description}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${card.glow}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
