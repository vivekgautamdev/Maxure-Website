import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import MaxureLogo from "./MaxureLogo";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Software", href: "#software" },
  { label: "Specs", href: "#specs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isDark
    ? scrolled
      ? "bg-[rgba(10,15,30,0.9)] backdrop-blur-xl border-b border-[rgba(0,212,255,0.1)]"
      : "bg-transparent"
    : scrolled
    ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm"
    : "bg-transparent";

  const linkColor = isDark
    ? "text-[#A8B4D8] hover:text-white"
    : "text-[#4A5578] hover:text-[#1C2340]";

  const mobileMenuBg = isDark
    ? "bg-[rgba(10,15,30,0.97)] backdrop-blur-xl border-t border-[rgba(0,212,255,0.1)]"
    : "bg-white/97 backdrop-blur-xl border-t border-gray-100 shadow-md";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <MaxureLogo height={28} />
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-jakarta text-sm font-medium transition-colors duration-200 relative group ${linkColor}`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right: Theme Toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isDark
                ? "bg-white/10 hover:bg-white/20 text-[#A8B4D8] hover:text-white"
                : "bg-gray-100 hover:bg-gray-200 text-[#4A5578] hover:text-[#1C2340]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          {/* Book Demo CTA */}
          <motion.a
            href="#contact"
            className="relative px-5 py-2.5 rounded-full text-sm font-semibold font-jakarta text-white overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #1A2FBF, #2D4AFF)",
              boxShadow: "0 0 20px rgba(45, 74, 255, 0.4)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(45, 74, 255, 0.4)",
                "0 0 35px rgba(0, 212, 255, 0.5)",
                "0 0 20px rgba(45, 74, 255, 0.4)",
              ],
            }}
            transition={{
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="relative z-10">Book Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#2D4AFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </div>

        {/* Mobile: Theme Toggle + Menu */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDark ? "text-[#A8B4D8]" : "text-[#4A5578]"
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className={`p-2 ${isDark ? "text-white" : "text-[#1C2340]"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${mobileMenuBg}`}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-jakarta text-sm font-medium transition-colors ${linkColor}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full text-sm font-semibold font-jakarta text-white text-center"
                style={{ background: "linear-gradient(135deg, #1A2FBF, #2D4AFF)" }}
              >
                Book Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
