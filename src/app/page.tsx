'use client'
// import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { motion } from "framer-motion";
import { fadeIn, pageTransition } from "./utils/animations";

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      {/* <Experience/> */}
      <motion.h2 {...fadeIn} transition={{
        delay:
          0.8
      }} className="text-4xl font-bold mb-2 text-center">
        Featured Projects
      </motion.h2>
      <Projects />
    </motion.div>
  );
}
