// src/pages/About.jsx
import React from 'react';
import logo from '.../public/thinksoft.png'
const About = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">About ThinkSoft</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Empowering businesses with intelligent technology solutions since our inception.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            ThinkSoft is a forward-thinking technology partner specializing in AI, data analytics, cloud transformation, and enterprise software. Headquartered with a strong presence in Pakistan, we help global businesses innovate and scale.
          </p>
          <p className="text-gray-600">
            Our mission is to integrate Business Intelligence into every layer of your information systems—driving efficiency, insight, and growth.
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
          <span className="text-gray-500">,<img src="./logo" alt="Company Logo" /></span>
        </div>
      </div>
    </div>
  );
};

export default About;