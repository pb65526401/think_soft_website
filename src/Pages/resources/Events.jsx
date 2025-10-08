// src/pages/resources/Events.jsx
import React from 'react';

const Events = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Events</h1>
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg">GenAI Workshop – Lahore</h3>
          <p className="text-gray-600">November 15, 2025 | In-person</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Cloud & AI Webinar</h3>
          <p className="text-gray-600">October 25, 2025 | Online</p>
        </div>
      </div>
    </div>
  );
};

export default Events;