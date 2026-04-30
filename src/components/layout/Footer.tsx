import Image from "next/image";
import Link from "next/link";
import { Camera, MessageCircle, Globe, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    explore: [
      { name: "About Us", href: "#about" },
      { name: "Our Courses", href: "#courses" },
      { name: "Q Talk Series", href: "#qtalk" },
      { name: "Our Mentors", href: "#mentors" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-quaf-dark text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-quaf-dark via-quaf-primary to-quaf-dark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logos/quafWhite.png"
                alt="QUAF Logo"
                width={140}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Quran Understanding Accent Foundation. Elevating your recitation through proper Tajweed, fluency, and deep reflection.
            </p>
            <div className="flex space-x-4">
              {[Camera, MessageCircle, Globe].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-quaf-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer for layout */}
          <div className="hidden lg:block"></div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-6 text-white">Explore</h4>
            <ul className="space-y-4">
              {links.explore.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-quaf-secondary transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-quaf-secondary/50 mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-6 text-white">Legal</h4>
            <ul className="space-y-4">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-quaf-secondary transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-quaf-secondary/50 mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>© {currentYear} QUAF. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" /> for the love of Qur’an
          </p>
        </div>
      </div>
    </footer>
  );
}
