"use client";

import { motion } from "framer-motion";
import { Volume2, BookOpenCheck, Sparkles, ShieldCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Volume2,
      title: "Correct Pronunciation",
      desc: "Master the exact articulation points (Makharij) to recite with pristine clarity and avoid changing the meaning.",
      delay: 0.1,
    },
    {
      icon: BookOpenCheck,
      title: "Deep Understanding",
      desc: "Move beyond mere reading to grasp the profound meanings and linguistic beauty of the verses.",
      delay: 0.2,
    },
    {
      icon: Sparkles,
      title: "Spiritual Connection",
      desc: "Experience tranquility and a closer bond with the Divine through mindful and beautiful recitation.",
      delay: 0.3,
    },
    {
      icon: ShieldCheck,
      title: "Confidence in Recitation",
      desc: "Overcome hesitation and build the confidence to recite fluently in any gathering or personal prayer.",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-quaf-light relative overflow-hidden">
      {/* Background Decorative Waves */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-quaf-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-quaf-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-quaf-dark mb-4 drop-shadow-sm"
          >
            Importance of Qur’an Fluency
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-quaf-primary to-quaf-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(29,154,175,0.15)] transition-all duration-500 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-quaf-primary/5 via-transparent to-quaf-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Layered glowing orb behind the icon */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-quaf-secondary/20 rounded-full blur-xl group-hover:bg-quaf-secondary/40 transition-colors duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-white to-quaf-soft-teal flex items-center justify-center text-quaf-primary mb-6 shadow-sm border border-white group-hover:from-quaf-primary group-hover:to-quaf-secondary group-hover:text-white transition-all duration-500 transform group-hover:rotate-3">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 animate-[pulse_3s_ease-in-out_infinite]" />
                  </div>
                  <h3 className="text-xl font-bold text-quaf-dark mb-3 font-serif group-hover:text-quaf-primary transition-colors">{feature.title}</h3>
                  <p className="text-quaf-dark/70 leading-relaxed text-sm sm:text-base font-medium">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
