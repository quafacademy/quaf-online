"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Camera, MessageCircle, Globe, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-quaf-dark mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-quaf-dark/70 max-w-2xl mx-auto"
          >
            Have questions about our courses or need guidance on where to start? We're here to help you on your journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="bg-quaf-light p-8 rounded-3xl border border-quaf-primary/10">
              <h3 className="text-2xl font-bold font-serif text-quaf-dark mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-quaf-primary mr-4 shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-quaf-dark mb-1">Email Us</p>
                    <a href="mailto:quafacademy4@gmail.com" className="text-quaf-dark/70 hover:text-quaf-primary transition-colors block">quafacademy4@gmail.com</a>
                    <span className="text-xs text-quaf-dark/40 block mt-1">info@quaf.in (Coming Soon)</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-quaf-primary mr-4 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-quaf-dark mb-1">Location</p>
                    <p className="text-quaf-dark/70">Global Online Campus</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-quaf-primary/10">
                <p className="text-sm font-semibold text-quaf-dark mb-4">Follow Our Journey</p>
                <div className="flex space-x-4">
                  {[Camera, MessageCircle, Globe].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-quaf-dark/60 hover:text-quaf-primary hover:shadow-md transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgb(0,0,0,0.05)] border border-gray-100">
              <h3 className="text-2xl font-bold font-serif text-quaf-dark mb-6">Send a Message</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-quaf-dark/80 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl bg-quaf-light border border-transparent focus:border-quaf-primary focus:bg-white focus:ring-2 focus:ring-quaf-primary/20 transition-all outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-quaf-dark/80 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl bg-quaf-light border border-transparent focus:border-quaf-primary focus:bg-white focus:ring-2 focus:ring-quaf-primary/20 transition-all outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-quaf-dark/80 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-quaf-light border border-transparent focus:border-quaf-primary focus:bg-white focus:ring-2 focus:ring-quaf-primary/20 transition-all outline-none resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full flex items-center justify-center bg-quaf-primary text-white py-3.5 rounded-xl font-bold hover:bg-quaf-secondary transition-colors"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
