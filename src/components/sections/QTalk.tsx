"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export default function QTalk() {
  const sessions = [
    {
      title: "The Heart of Recitation",
      speaker: "Shaykh Abdullah",
      duration: "45 mins",
      thumbnail: "/logos/logoBlack.png",
    },
    {
      title: "Finding Peace in Surah Rahman",
      speaker: "Ustadha Fatima",
      duration: "30 mins",
      thumbnail: "/logos/logoBlack.png",
    },
    {
      title: "Daily Habits for Fluency",
      speaker: "Ustadh Tariq",
      duration: "55 mins",
      thumbnail: "/logos/logoBlack.png",
    },
  ];

  return (
    <section id="qtalk" className="py-24 bg-quaf-dark text-white relative overflow-hidden">
      {/* Decorative background glow & Light Streaks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-quaf-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      
      {/* Animated Light Streaks (نور effect) */}
      <motion.div 
        animate={{ x: [-1000, 1000], opacity: [0, 0.5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-quaf-secondary to-transparent rotate-12 transform-gpu"
      />
      <motion.div 
        animate={{ x: [1000, -1000], opacity: [0, 0.3, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute bottom-1/3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-quaf-primary to-transparent -rotate-6 transform-gpu blur-[1px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            Q Talk Series
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto font-light"
          >
            Reflections, discussions, and conversations on the Qur’an.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer relative"
            >
              {/* Outer Glow on hover */}
              <div className="absolute inset-0 bg-quaf-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-6 shadow-xl group-hover:border-quaf-secondary/50 transition-colors duration-500 z-10">
                {/* Thumbnail Image (Simulated with logo for now) */}
                <div className="absolute inset-0 flex items-center justify-center p-8 opacity-50">
                   <Image 
                     src={session.thumbnail} 
                     alt={session.title}
                     width={100}
                     height={100}
                     className="opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                   />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-quaf-dark via-transparent to-transparent opacity-90" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-quaf-primary/80 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-110 group-hover:bg-quaf-secondary transition-all duration-300 shadow-[0_0_20px_rgba(29,154,175,0.6)]">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-md text-xs font-medium border border-white/10 text-quaf-secondary">
                  {session.duration}
                </div>
              </div>

              <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-quaf-secondary transition-colors relative z-10 text-white drop-shadow-md">
                {session.title}
              </h3>
              <p className="text-white/50 text-sm relative z-10">
                with <span className="text-white/80">{session.speaker}</span>
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center relative z-10"
        >
          <button className="px-8 py-3 rounded-full border border-quaf-secondary/50 text-quaf-secondary hover:bg-quaf-secondary hover:text-white transition-all font-medium shadow-[0_0_15px_rgba(29,154,175,0.3)] hover:shadow-[0_0_25px_rgba(29,154,175,0.6)]">
            View All Episodes
          </button>
        </motion.div>
      </div>
    </section>
  );
}
