// src/pages/CaseStudies.jsx
import React from 'react';

const CaseStudies = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Case Studies</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'Lebara: AI-Driven Growth',
            desc: 'How ThinkSoft helped Lebara unlock data insights for scalable growth using Azure AI and modern data platforms.'
          },
          {
            title: 'Retail Chain Transformation',
            desc: 'Migrated legacy systems to Dynamics 365, improving inventory accuracy by 40% and reducing operational costs.'
          }
        ].map((cs, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
            <h3 className="font-bold text-lg text-gray-900 mb-3">{cs.title}</h3>
            <p className="text-gray-600">{cs.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;