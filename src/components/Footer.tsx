import { Zap, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import MaxureLogo from "./MaxureLogo";

const footerLinks = [
  {
    title: "Products",
    links: ["Education Series", "Corporate Series", "Pro Training Series", "Auditorium Series", "Accessories"],
  },
  {
    title: "Features",
    links: ["4K Display", "40-Touch Technology", "Wireless Casting", "Built-in Android", "Cloud Integration"],
  },
  {
    title: "Support",
    links: ["Documentation", "Video Tutorials", "FAQs", "Warranty", "Service Centers"],
  },
  {
    title: "Company",
    links: ["About Maxure", "Careers", "Partner Program", "Press Kit", "Blog"],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060B1A 0%, #030710 100%)" }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)" }}
      />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(ellipse, #2D4AFF, transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="mb-4">
              <MaxureLogo height={32} />
            </div>
            <p className="font-jakarta text-sm text-[#A8B4D8] leading-relaxed mb-6 max-w-xs">
              Redefining interactive displays for education and enterprise. Precision-engineered for the spaces that shape minds and decisions.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2 mb-6">
              {[
                { icon: Mail, text: "info@maxure.in" },
                { icon: Phone, text: "+91 97179 92260" },
                { icon: MapPin, text: "New Delhi, India" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon size={13} className="text-[#00D4FF]" />
                  <span className="font-jakarta text-xs text-[#A8B4D8]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.1)";
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(0,212,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.08)";
                  }}
                >
                  <Icon size={14} className="text-[#A8B4D8]" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-syne font-bold text-white text-sm mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-jakarta text-xs text-[#A8B4D8] hover:text-white transition-colors duration-200 hover:text-[#00D4FF]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="font-jakarta text-xs text-[#4A5578]">
            © 2024 Maxure Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-jakarta text-xs text-[#4A5578] hover:text-[#A8B4D8] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
