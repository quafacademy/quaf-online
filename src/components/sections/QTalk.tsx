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
      thumbnail: "/logos/logoBlack.png", // Using a placeholder since we only have logos
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
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-quaf-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
          >
            Q Talk Series
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
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
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 mb-6">
                {/* Thumbnail Image (Simulated with logo for now) */}
                <div className="absolute inset-0 flex items-center justify-center p-8 opacity-50">
                   <Image 
                     src={session.thumbnail} 
                     alt={session.title}
                     width={100}
                     height={100}
                     className="opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500"
                   />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-quaf-dark/80 via-transparent to-transparent opacity-80" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-quaf-primary/80 backdrop-blur-sm flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-quaf-primary/30">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-md text-xs font-medium">
                  {session.duration}
                </div>
              </div>

              <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-quaf-secondary transition-colors">
                {session.title}
              </h3>
              <p className="text-white/50 text-sm">
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
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 rounded-full border border-quaf-secondary/50 text-quaf-secondary hover:bg-quaf-secondary hover:text-white transition-all font-medium">
            View All Episodes
          </button>
        </motion.div>
      </div>
    </section>
  );
}
