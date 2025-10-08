// src/pages/Careers.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Join Our Team</h1>
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-600 mb-6">
          ThinkSoft is always looking for talented individuals who are passionate about technology and innovation.
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Send Your Resume
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Software Engineers', desc: 'Build scalable, secure applications using modern stacks.' },
          { title: 'Data Scientists', desc: 'Turn data into actionable insights with AI and ML.' },
          { title: 'Cloud Architects', desc: 'Design and deploy robust cloud-native solutions.' }
        ].map((role, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{role.title}</h3>
            <p className="text-gray-600">{role.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;