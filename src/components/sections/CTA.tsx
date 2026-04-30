"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="join" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-quaf-dark z-0" />
      <div className="absolute inset-0 bg-gradient-to-tr from-quaf-primary/40 via-quaf-dark to-quaf-secondary/20 z-0 opacity-80" />
      
      {/* Animated abstract wave */}
      <motion.div 
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute -top-[20%] -right-[10%] w-[60%] aspect-square rounded-full bg-gradient-to-b from-quaf-secondary/30 to-transparent blur-3xl z-0 pointer-events-none"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 sm:p-16 rounded-3xl shadow-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Start Your Qur’an Journey Today
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Join a global community of learners committed to mastering the recitation and understanding of the Qur’an with excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="#register"
              className="group flex items-center justify-center bg-white text-quaf-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-quaf-light transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Join QUAF
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-white/60 text-sm sm:hidden mt-4">Spots are limited for the upcoming cohort.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
