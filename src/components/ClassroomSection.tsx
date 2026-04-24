import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function ClassroomSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const pos = ((e.clientX - rect.left) / rect.width) * 100;
      setSliderPos(Math.min(90, Math.max(10, pos)));
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const pos = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
      setSliderPos(Math.min(90, Math.max(10, pos)));
    }
  };

  const { isDark } = useTheme();

  return (
    <section ref={ref} className={`relative py-24 overflow-hidden transition-colors duration-500 ${isDark ? "bg-[#0D1330]" : "bg-[#F4F6FB]"}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(26,47,191,0.3), transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
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
            Classroom Experience
          </div>
          <h2 className={`font-syne font-bold text-4xl lg:text-5xl mb-4 ${isDark ? "text-white" : "text-[#1C2340]"}`}>
            Transform Your{" "}
            <span className="text-gradient-purple">Teaching Space</span>
          </h2>
          <p className={`font-jakarta text-lg max-w-2xl mx-auto ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>
            See the difference a Maxure panel makes. Drag the slider to reveal the transformation.
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden cursor-ew-resize select-none"
          style={{ aspectRatio: "16/9", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* After (Maxure) - full width background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"
              alt="Maxure-powered classroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,15,30,0.3), rgba(13,27,62,0.2))" }} />
            {/* After label */}
            <div className="absolute top-6 right-6 glass-card px-4 py-2 rounded-xl">
              <span className="font-jakarta text-sm font-semibold text-white">✦ With Maxure</span>
            </div>
            {/* Annotation overlays */}
            <div
              className="absolute bottom-8 right-8 glass-card px-4 py-3 rounded-xl"
              style={{ border: "1px solid rgba(0,212,255,0.3)" }}
            >
              <div className="font-jakarta text-xs text-[#00D4FF] font-semibold">Live Annotation Active</div>
              <div className="font-jakarta text-xs text-white opacity-70">40-point multi-touch enabled</div>
            </div>
          </div>

          {/* Before (Traditional) - clipped to slider position */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80"
              alt="Traditional classroom"
              className="w-full h-full object-cover"
              style={{ position: "absolute", inset: 0, minWidth: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
            />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
            {/* Before label */}
            <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl">
              <span className="font-jakarta text-sm font-semibold text-[#1C2340]">Traditional Classroom</span>
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)", boxShadow: "0 0 20px rgba(255,255,255,0.5)" }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: "white",
                boxShadow: "0 0 20px rgba(0,212,255,0.6), 0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M1 6H17M1 6L5 2M1 6L5 10M17 6L13 2M17 6L13 10" stroke="#1A2FBF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Stats below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {[
            { value: "3×", label: "More Student Engagement" },
            { value: "40%", label: "Better Learning Outcomes" },
            { value: "60%", label: "Reduced Setup Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-syne font-bold text-3xl text-[#1A2FBF]">{stat.value}</div>
              <div className="font-jakarta text-sm text-[#4A5578] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
