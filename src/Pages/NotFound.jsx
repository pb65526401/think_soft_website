// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="py-24 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 – Page Not Found</h1>
      <p className="text-gray-600 mb-8">Sorry, the page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;