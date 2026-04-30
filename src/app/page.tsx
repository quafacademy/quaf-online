import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

// Lazy load sections below the fold for better performance
const Welcome = dynamic(() => import("@/components/sections/Welcome"), { ssr: true });
const Journey = dynamic(() => import("@/components/sections/Journey"), { ssr: true });
const Features = dynamic(() => import("@/components/sections/Features"), { ssr: true });
const Courses = dynamic(() => import("@/components/sections/Courses"), { ssr: true });
const Programs = dynamic(() => import("@/components/sections/Programs"), { ssr: true });
const QTalk = dynamic(() => import("@/components/sections/QTalk"), { ssr: true });
const Mentors = dynamic(() => import("@/components/sections/Mentors"), { ssr: true });
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Welcome />
        <Journey />
        <Features />
        <Courses />
        <Programs />
        <QTalk />
        <Mentors />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
