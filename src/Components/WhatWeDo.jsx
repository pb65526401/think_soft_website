import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import all 6 slider images
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import slider5 from "../assets/slider5.png";
import slider6 from "../assets/slider6.png";

const images = [slider1, slider2, slider3, slider4, slider5, slider6];

const WhatWeDo = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    timeoutRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  // Handle drag/swipe end
  const handleDragEnd = (e, { offset, velocity }) => {
    if (offset.x > 100 || velocity.x > 500) {
      clearInterval(timeoutRef.current);
      prevSlide();
    } else if (offset.x < -100 || velocity.x < -500) {
      clearInterval(timeoutRef.current);
      nextSlide();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-10 bg-white overflow-hidden">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What We Do
      </motion.h2>

      <motion.p
        className="font-medium text-center text-gray-600 max-w-2xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        We deliver digital impact to disrupt every element of your business
        process.
      </motion.p>

      {/* Image Slider */}
      <div className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            className="absolute w-full h-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: direction > 0 ? 150 : -150, scale: 1.1 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction > 0 ? -150 : 150, scale: 0.95 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            {/* Image */}
            <motion.img
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className="absolute w-full h-full object-contain cursor-grab active:cursor-grabbing"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />

            {/* Shining reflection effect */}
            <motion.div
              className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
              animate={{
                left: ["-75%", "125%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-blue-600 scale-125 shadow-md"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

       

        {/* Background floating glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-100/10 via-transparent to-pink-100/10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
