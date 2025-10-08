// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Get in Touch</h1>
      
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-600 mb-8">
          Have a project in mind? Want to explore a partnership? We’d love to hear from you.
        </p>
        
        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <p className="font-medium text-gray-900">Email:</p>
          <a href="mailto:info@thinksoft.com" className="text-blue-600 hover:underline">
            info@thinksoft.com
          </a>
        </div>

        <p className="text-gray-600">
          We typically respond within 1–2 business days.
        </p>
      </div>
    </div>
  );
};

export default Contact;