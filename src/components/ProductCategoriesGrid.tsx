import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const categories = [
  {
    title: "Education Series",
    subtitle: "For Schools & Colleges",
    sizes: '55" – 98"',
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    accent: "#00D4FF",
    badge: "Most Popular",
  },
  {
    title: "Corporate Series",
    subtitle: "For Boardrooms & Offices",
    sizes: '65" – 86"',
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    accent: "#2D4AFF",
    badge: "Enterprise",
  },
  {
    title: "Pro Training Series",
    subtitle: "For Training Centers",
    sizes: '75" – 98"',
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    accent: "#7B2FFF",
    badge: "Pro",
  },
  {
    title: "Auditorium Series",
    subtitle: "For Large Venues",
    sizes: '86" – 110"',
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    accent: "#00D4FF",
    badge: "Flagship",
  },
];

export default function ProductCategoriesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { isDark } = useTheme();

  return (
    <section
      id="products"
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#0D1330]" : "bg-[#F4F6FB]"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(45,74,255,0.3), transparent)" }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 50%, ${isDark ? "rgba(45,74,255,0.04)" : "rgba(45,74,255,0.03)"} 0%, transparent 70%)` }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-4 font-jakarta text-xs font-medium tracking-widest uppercase text-[#1A2FBF]"
            style={{ background: "rgba(26,47,191,0.1)", border: "1px solid rgba(26,47,191,0.2)" }}
          >
            Product Range
          </div>
          <h2 className={`font-syne font-bold text-4xl lg:text-5xl mb-4 ${isDark ? "text-white" : "text-[#1C2340]"}`}>
            A Panel for{" "}
            <span className="text-gradient-purple">Every Space</span>
          </h2>
          <p className={`font-jakarta text-lg max-w-2xl mx-auto ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>
            Four precision-engineered series, each tuned for its environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "white",
                boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(0,0,0,0.08)",
                border: isDark ? "1px solid rgba(0,212,255,0.12)" : "1px solid rgba(0,0,0,0.06)",
              }}
              whileHover={{
                y: -6,
                rotateX: -2,
                rotateY: 2,
                boxShadow: `0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px ${cat.accent}40`,
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-60"
                  style={{ background: `linear-gradient(180deg, transparent 50%, ${cat.accent}20 100%)` }}
                />
                {/* Badge */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-jakarta font-semibold text-white"
                  style={{ background: cat.accent }}
                >
                  {cat.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className={`font-syne font-bold text-lg mb-1 ${isDark ? "text-white" : "text-[#1C2340]"}`}>{cat.title}</h3>
                <p className={`font-jakarta text-sm mb-3 ${isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"}`}>{cat.subtitle}</p>
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono-jetbrains text-sm font-medium"
                    style={{ color: cat.accent }}
                  >
                    {cat.sizes}
                  </span>
                  <motion.div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: `${cat.accent}15` }}
                    whileHover={{ scale: 1.2, background: cat.accent }}
                  >
                    <ArrowUpRight size={14} style={{ color: cat.accent }} className="group-hover:text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Bottom glow on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
