// src/pages/News.jsx
import React from 'react';

const News = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">News & Updates</h1>
      
      <div className="space-y-8">
        {[
          {
            title: 'ThinkSoft Launches GenAI Accelerator Program',
            date: 'Oct 1, 2025',
            excerpt: 'A new 8-week program to help businesses build AI proof-of-concepts on Azure.'
          },
          {
            title: 'ThinkSoft Recognized as Microsoft Partner of the Year',
            date: 'Sep 15, 2025',
            excerpt: 'Awarded for excellence in Dynamics 365 and Power Platform solutions.'
          }
        ].map((item, i) => (
          <article key={i} className="border-b border-gray-200 pb-8 last:border-0">
            <time className="text-sm text-gray-500">{item.date}</time>
            <h2 className="text-xl font-bold text-gray-900 mt-2">{item.title}</h2>
            <p className="text-gray-600 mt-3">{item.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;