// src/pages/Sustainability.jsx
import React from 'react';

const Sustainability = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Sustainability & Responsibility</h1>
      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <p>
          At ThinkSoft, we recognize our responsibility to the planet and society. While we are a technology company, our impact extends beyond code.
        </p>
        <p>We are committed to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reducing our carbon footprint through cloud optimization and remote-first work</li>
          <li>Promoting digital inclusion and tech education in underserved communities</li>
          <li>Building ethical AI systems that prioritize fairness and transparency</li>
          <li>Supporting local talent and sustainable economic growth in Pakistan and beyond</li>
        </ul>
        <p>Technology should serve people and the planet—and we design with that principle in mind.</p>
      </div>
    </div>
  );
};

export default Sustainability;