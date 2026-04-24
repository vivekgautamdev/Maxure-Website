import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const specsData = [
  {
    category: "Display",
    items: [
      { key: "Resolution", value: "3840 × 2160 (4K UHD)" },
      { key: "Panel Type", value: "IPS LED" },
      { key: "Brightness", value: "400 nit (typ)" },
      { key: "Contrast Ratio", value: "1200:1" },
      { key: "Refresh Rate", value: "60 Hz" },
      { key: "Color Gamut", value: "sRGB 100%" },
    ],
  },
  {
    category: "Touch",
    items: [
      { key: "Touch Technology", value: "Infrared + Optical" },
      { key: "Touch Points", value: "40 simultaneous points" },
      { key: "Touch Response", value: "< 20ms" },
      { key: "Writing Experience", value: "Glass Surface, Anti-glare" },
      { key: "Stylus Support", value: "Active & Passive" },
    ],
  },
  {
    category: "Connectivity",
    items: [
      { key: "HDMI", value: "HDMI 2.0 × 3 (In), HDMI 1.4 × 1 (Out)" },
      { key: "USB", value: "USB-C × 1, USB 3.0 × 2, USB 2.0 × 3" },
      { key: "WiFi", value: "802.11 a/b/g/n/ac (WiFi 6)" },
      { key: "Bluetooth", value: "Bluetooth 5.0" },
      { key: "LAN", value: "RJ45 × 1 (10/100/1000 Mbps)" },
      { key: "Wireless Display", value: "Miracast, AirPlay, Google Cast" },
    ],
  },
  {
    category: "Software",
    items: [
      { key: "Operating System", value: "Android 13" },
      { key: "Processor", value: "Octa-core ARM Cortex-A73" },
      { key: "RAM", value: "8 GB" },
      { key: "Storage", value: "128 GB (expandable)" },
      { key: "Pre-installed Apps", value: "Whiteboard, Screen Share, Multi-window, Annotation" },
      { key: "OPS Slot", value: "Intel OPS Compatible" },
    ],
  },
  {
    category: "Ports",
    items: [
      { key: "Front Ports", value: "USB-A 3.0 × 1, USB-C × 1, 3.5mm Audio" },
      { key: "Rear Ports", value: "HDMI In × 3, HDMI Out × 1, USB-A × 3, RS232" },
      { key: "Audio Out", value: "3.5mm Jack + SPDIF" },
      { key: "Speakers", value: "2 × 20W Built-in" },
      { key: "Microphone", value: "8-array microphone" },
    ],
  },
];

export default function SpecsAccordion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openCategory, setOpenCategory] = useState<string | null>("Display");
  const { isDark } = useTheme();

  return (
    <section id="specs" ref={ref} className={`relative py-24 overflow-hidden transition-colors duration-500 ${isDark ? "bg-[#0D1330]" : "bg-[#F4F6FB]"}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(26,47,191,0.3), transparent)" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6">
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
            Technical Specs
          </div>
          <h2 className={`font-syne font-bold text-4xl lg:text-5xl mb-4 ${isDark ? "text-white" : "text-[#1C2340]"}`}>
            Built with{" "}
            <span className="text-gradient-purple">Precision</span>
          </h2>
          <p className={`font-jakarta text-lg max-w-2xl mx-auto ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>
            Every component specified for performance, reliability, and longevity.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {specsData.map((spec, i) => (
            <motion.div
              key={spec.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: isDark
                  ? openCategory === spec.category
                    ? "rgba(26,47,191,0.12)"
                    : "rgba(255,255,255,0.04)"
                  : "white",
                border: openCategory === spec.category
                  ? "1px solid rgba(26,47,191,0.3)"
                  : isDark
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(0,0,0,0.06)",
                boxShadow: openCategory === spec.category
                  ? "0 8px 30px rgba(26,47,191,0.1)"
                  : isDark
                  ? "0 2px 10px rgba(0,0,0,0.2)"
                  : "0 2px 10px rgba(0,0,0,0.04)",
              }}
            >
              {/* Header */}
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenCategory(openCategory === spec.category ? null : spec.category)}
              >
                <span className={`font-syne font-bold text-lg ${isDark ? "text-white" : "text-[#1C2340]"}`}>{spec.category}</span>
                <motion.div
                  animate={{ rotate: openCategory === spec.category ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-[#1A2FBF]" />
                </motion.div>
              </button>

              {/* Content */}
              <AnimatePresence>
                {openCategory === spec.category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(26,47,191,0.2)] to-transparent mb-4" />
                      <div className="flex flex-col gap-3">
                        {spec.items.map((item, j) => (
                          <motion.div
                            key={item.key}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.06 }}
                            className={`flex items-center justify-between py-2 last:border-0 ${
                              isDark ? "border-b border-[rgba(255,255,255,0.05)]" : "border-b border-[rgba(0,0,0,0.04)]"
                            }`}
                          >
                            <span className={`font-jakarta text-sm ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>{item.key}</span>
                            <span className={`font-mono-jetbrains text-sm font-medium text-right max-w-xs ${isDark ? "text-white" : "text-[#1C2340]"}`}>
                              {item.value}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
