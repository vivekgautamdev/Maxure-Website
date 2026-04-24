import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Download, Phone, CheckCircle } from "lucide-react";

export default function DemoRequestSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", date: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Valid email required";
    if (!form.org.trim()) newErrors.org = "Organization is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 overflow-hidden">
      {/* Dark gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #060B1A 0%, #0D1B3E 50%, #060B1A 100%)" }}
      />

      {/* Animated glow pulses */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(45,74,255,0.15), transparent)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.1), transparent)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: CTA Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-block px-4 py-1.5 rounded-full mb-4 font-jakarta text-xs font-medium tracking-widest uppercase text-[#00D4FF]"
              style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
            >
              Get Started
            </div>
            <h2 className="font-syne font-bold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Experience Maxure{" "}
              <span className="text-gradient-cyan">Live</span>
            </h2>
            <p className="font-jakarta text-[#A8B4D8] text-lg mb-10 leading-relaxed">
              Book a free demo at your premises. Our product specialists will set up a live demonstration
              tailored to your specific space and requirements.
            </p>

            {/* Three CTA buttons */}
            <div className="flex flex-col gap-4">
              <motion.button
                className="flex items-center gap-3 px-6 py-4 rounded-2xl text-left group"
                style={{
                  background: "linear-gradient(135deg, #1A2FBF, #2D4AFF)",
                  boxShadow: "0 0 30px rgba(45,74,255,0.3)",
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(45,74,255,0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <ArrowRight size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-jakarta font-semibold text-white">Book a Live Demo</div>
                  <div className="font-jakarta text-xs text-white/70">Free, on-site demonstration</div>
                </div>
              </motion.button>

              <motion.button
                className="flex items-center gap-3 px-6 py-4 rounded-2xl text-left glass-card group"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,212,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)" }}
                >
                  <Download size={18} className="text-[#00D4FF]" />
                </div>
                <div>
                  <div className="font-jakarta font-semibold text-white">Download Brochure</div>
                  <div className="font-jakarta text-xs text-[#A8B4D8]">Full product catalog PDF</div>
                </div>
              </motion.button>

              <motion.button
                className="flex items-center gap-3 px-6 py-4 rounded-2xl text-left glass-card group"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(123,47,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(123,47,255,0.1)", border: "1px solid rgba(123,47,255,0.3)" }}
                >
                  <Phone size={18} className="text-[#7B2FFF]" />
                </div>
                <div>
                  <div className="font-jakarta font-semibold text-white">Contact Sales</div>
                  <div className="font-jakarta text-xs text-[#A8B4D8]">Speak to a product expert</div>
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Demo Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card rounded-3xl p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)" }}
                >
                  <CheckCircle size={32} className="text-[#00D4FF]" />
                </motion.div>
                <h3 className="font-syne font-bold text-2xl text-white">Demo Booked!</h3>
                <p className="font-jakarta text-[#A8B4D8] text-sm">
                  Our team will reach out to you within 24 hours to confirm your demo schedule.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", org: "", date: "" }); }}
                  className="mt-4 px-6 py-2.5 rounded-full font-jakarta text-sm font-medium text-[#00D4FF]"
                  style={{ border: "1px solid rgba(0,212,255,0.3)" }}
                >
                  Book Another Demo
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-syne font-bold text-2xl text-white mb-2">Request a Demo</h3>
                <p className="font-jakarta text-[#A8B4D8] text-sm mb-6">
                  Fill in your details and we'll set up a free on-site demo.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                    { key: "email", label: "Work Email", type: "email", placeholder: "john@school.edu" },
                    { key: "org", label: "Organization", type: "text", placeholder: "Delhi Public School" },
                    { key: "date", label: "Preferred Date", type: "date", placeholder: "" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="font-jakarta text-xs font-medium text-[#A8B4D8] mb-1.5 block">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl font-jakarta text-sm text-white placeholder-[#4A5578] outline-none focus:ring-1 transition-all"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: errors[field.key] ? "1px solid rgba(255,100,100,0.5)" : "1px solid rgba(255,255,255,0.1)",
                        }}
                        onFocus={(e) => (e.target.style.border = "1px solid rgba(0,212,255,0.4)")}
                        onBlur={(e) => (e.target.style.border = errors[field.key] ? "1px solid rgba(255,100,100,0.5)" : "1px solid rgba(255,255,255,0.1)")}
                      />
                      {errors[field.key] && (
                        <p className="font-jakarta text-xs text-red-400 mt-1">{errors[field.key]}</p>
                      )}
                    </div>
                  ))}

                  <motion.button
                    type="submit"
                    className="mt-2 w-full py-3.5 rounded-xl font-jakarta font-semibold text-white flex items-center justify-center gap-2"
                    style={{
                      background: "linear-gradient(135deg, #1A2FBF, #2D4AFF)",
                      boxShadow: "0 0 30px rgba(45,74,255,0.3)",
                    }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(45,74,255,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book My Demo <ArrowRight size={16} />
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
