// src/components/Hero.jsx
import React, { useState, useEffect, useRef } from 'react';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import hero5 from '../assets/hero5.png';
import WhatWeDo from './WhatWeDo';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      title: "ThinkSoft: Where AI meets purposeful storytelling",
      description: "Transform the way you communicate and deliver value by embedding AI-driven narratives into your business strategy.",
      buttonText: "Learn more →",
      image: hero1,
    },
    {
      title: "Driving Lebara’s Growth with AI and Data Insights",
      description: "See how cutting-edge AI and Data modernization solutions enabled Lebara to unlock powerful insights and achieve scalable growth.",
      buttonText: "Read more →",
      image: hero2,
    },
    {
      title: "Faster, intelligent & leaner: Building tomorrow’s workforce today",
      description: "By creating a more tailored and cost-effective employee experience, generative AI enhances the human aspect of HR rather than diminishing it.",
      buttonText: "Read more →",
      image: hero3,
    },
    {
      title: "Generative AI chatbot powered by Azure OpenAI Services: 8-week program",
      description: "Kickstart your Generative AI journey with our Gen AI Proof of Concept built on OpenAI Azure services.",
      buttonText: "Begin your POC now →",
      image: hero4,
    },
    {
      title: "Dynamics 365 Copilot: Your AI productivity boost",
      description: "Revolutionize how you work with AI tools that automate tasks, deliver actionable insights, and accelerate innovation for transformative growth.",
      buttonText: "Learn more →",
      image: hero5,
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setCurrentIndex(index);

  const current = slides[currentIndex];

  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6">
      <div
        className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative h-80 lg:h-[500px]">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-contain bg-gray-100"
              loading="lazy"
            />
          </div>

          <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {current.title}
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {current.description}
            </p>
            <button className="self-start px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition transform hover:scale-[1.02]">
              {current.buttonText}
            </button>

            <div className="mt-8 flex justify-center space-x-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg z-10"
          aria-label="Previous"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg z-10"
          aria-label="Next"
        >
          →
        </button>
      </div>
      <WhatWeDo/>
    </div>
  );
};

export default Hero;