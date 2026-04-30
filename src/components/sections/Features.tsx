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
    <section className="py-24 bg-quaf-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-quaf-dark mb-4"
          >
            Importance of Qur’an Fluency
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-quaf-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(15,95,119,0.1)] transition-all duration-300"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-quaf-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-quaf-soft-teal flex items-center justify-center text-quaf-primary mb-6 group-hover:scale-110 group-hover:bg-quaf-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-quaf-dark mb-3 font-serif">{feature.title}</h3>
                  <p className="text-quaf-dark/70 leading-relaxed text-sm">
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
