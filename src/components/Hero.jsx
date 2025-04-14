import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./glitch.css";

const phrases = [
  { text: "Pixel Streaming" },
  { text: "Machine Learning & AI" },
  { text: "Inference Service" },
  { text: "VFX & Rendering" },
  { text: "Digital Twin Solutions" },         // ✅ New service
  { text: "Cloud GPU Integration" },          // ✅ New service
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-black via-gray-900 to-black text-white relative overflow-hidden px-4">

      {/* Background VFX */}
      <div className="absolute w-[600px] h-[600px] bg-teal-400 rounded-full opacity-20 blur-3xl animate-pulse top-0 -left-40 z-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-pink-400 rounded-full opacity-10 blur-2xl animate-ping bottom-0 -right-20 z-0"></div>

      {/* Hero Title */}
      <div className="relative h-20 mt-6 z-10 text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={phrases[index].text}
            className="text-4xl md:text-6xl font-extrabold glitch"
            data-text={phrases[index].text}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            {phrases[index].text}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Subheading */}
      <motion.p
        className="z-10 mt-4 text-base md:text-lg text-gray-300 text-center max-w-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Revolutionizing ideas with innovative design, development, and tech solutions.
      </motion.p>

      {/* Tab Navigation */}
      <div className="absolute bottom-10 flex flex-wrap justify-center gap-4 md:gap-6 z-10 w-full px-4">
        {phrases.map((item, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`relative text-sm md:text-base px-4 py-2 text-white transition-all duration-300 hover:scale-105`}
          >
            {item.text}
            {i === index && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[3px] bg-white rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
