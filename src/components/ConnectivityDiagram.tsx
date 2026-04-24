import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

// SVG viewBox: 0 0 800 500, center = (400, 250)
const CENTER_X = 400;
const CENTER_Y = 250;

const devices = [
  { label: "Laptop",           icon: "💻", sx: -200, sy: -100 },
  { label: "Mobile",           icon: "📱", sx: 200,  sy: -100 },
  { label: "Tablet",           icon: "📟", sx: -200, sy: 100  },
  { label: "Cloud",            icon: "☁️", sx: 200,  sy: 100  },
  { label: "Google Workspace", icon: "🔧", sx: 0,    sy: -185 },
  { label: "Windows OPS",      icon: "🖥️", sx: 0,    sy: 185  },
];

export default function ConnectivityDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { isDark } = useTheme();

  return (
    <section
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-mesh-dark" : "bg-[#F4F6FB]"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)" }} />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #00D4FF, transparent)" }}
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
            className="inline-block px-4 py-1.5 rounded-full mb-4 font-jakarta text-xs font-medium tracking-widest uppercase text-[#00D4FF]"
            style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
          >
            Seamless Connectivity
          </div>
          <h2 className={`font-syne font-bold text-4xl lg:text-5xl mb-4 ${isDark ? "text-white" : "text-[#1C2340]"}`}>
            Everything{" "}
            <span className="text-gradient-cyan">Connected</span>
          </h2>
          <p className={`font-jakarta text-lg max-w-2xl mx-auto ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>
            One panel. Every device. No friction.
          </p>
        </motion.div>

        {/* Connectivity Diagram — pure SVG for precise center-to-center lines */}
        <div className="relative w-full" style={{ height: "500px" }}>
          {/* SVG layer for lines only */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid meet"
          >
            {devices.map((device, i) => {
              const nx = CENTER_X + device.sx;
              const ny = CENTER_Y + device.sy;
              return (
                <g key={`line-${device.label}`}>
                  <motion.line
                    x1={CENTER_X}
                    y1={CENTER_Y}
                    x2={nx}
                    y2={ny}
                    stroke="#00D4FF"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    opacity={isDark ? 0.45 : 0.35}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: isDark ? 0.45 : 0.35 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                  />
                  <motion.circle
                    r="3.5"
                    fill="#00D4FF"
                    initial={{ opacity: 0 }}
                    animate={
                      isInView
                        ? {
                            opacity: [0, 1, 1, 0],
                            cx: [CENTER_X, nx],
                            cy: [CENTER_Y, ny],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.6,
                      delay: 1.2 + i * 0.3,
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      ease: "easeInOut",
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Panel node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute z-10 flex flex-col items-center justify-center gap-2 rounded-2xl"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "160px",
              height: "80px",
              background: "linear-gradient(135deg, rgba(26,47,191,0.9), rgba(0,212,255,0.4))",
              border: "2px solid rgba(0,212,255,0.6)",
              boxShadow: "0 0 60px rgba(0,212,255,0.35), 0 0 30px rgba(45,74,255,0.3)",
            }}
          >
            <div className="font-syne font-bold text-white text-sm">MAXURE</div>
            <div className="font-jakarta text-[#00D4FF] text-xs">Interactive Panel</div>
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{ border: "1px solid rgba(0,212,255,0.3)" }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Device Nodes — placed using same coordinate system as SVG */}
          {devices.map((device, i) => {
            const leftPct = ((CENTER_X + device.sx) / 800) * 100;
            const topPct = ((CENTER_Y + device.sy) / 500) * 100;
            return (
              <motion.div
                key={device.label}
                className="absolute z-10 rounded-xl px-4 py-3 flex flex-col items-center gap-1 cursor-pointer"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: "translate(-50%, -50%)",
                  background: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(12px)",
                  border: isDark ? "1px solid rgba(0,212,255,0.2)" : "1px solid rgba(0,212,255,0.25)",
                  boxShadow: isDark ? undefined : "0 4px 20px rgba(0,0,0,0.08)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, type: "spring" }}
                whileHover={{
                  scale: 1.12,
                  boxShadow: "0 0 30px rgba(0,212,255,0.3)",
                  border: "1px solid rgba(0,212,255,0.5)",
                }}
              >
                <span className="text-2xl">{device.icon}</span>
                <span className={`font-jakarta text-xs whitespace-nowrap ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>
                  {device.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Connection types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {["HDMI 2.0", "USB-C", "WiFi 6", "Bluetooth 5.0", "Miracast", "AirPlay", "Google Cast"].map((tech) => (
            <div
              key={tech}
              className="px-3 py-1.5 rounded-full font-mono-jetbrains text-xs text-[#00D4FF]"
              style={{
                background: isDark ? "rgba(0,212,255,0.08)" : "rgba(0,212,255,0.06)",
                border: "1px solid rgba(0,212,255,0.2)",
              }}
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
