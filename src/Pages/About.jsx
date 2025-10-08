// src/Pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  // Stats
  const stats = [
    { value: '50+', label: 'Happy Clients' },
    { value: '10+', label: 'Countries Served' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '8+', label: 'Years of Excellence' },
  ];

  // Team members (replace image paths when ready)
  const team = [
    { name: 'Ali Raza', role: 'CEO & Founder', img: '/team/ali.jpg' },
    { name: 'Sana Khan', role: 'CTO', img: '/team/sana.jpg' },
    { name: 'Usman Ahmed', role: 'Head of AI', img: '/team/usman.jpg' },
    { name: 'Ayesha Malik', role: 'Cloud Architect', img: '/team/ayesha.jpg' },
  ];

  // Client logos (use grayscale for consistency)
  const clients = [
    '/clients/client1.png',
    '/clients/client2.png',
    '/clients/client3.png',
    '/clients/client4.png',
    '/clients/client5.png',
    '/clients/client6.png',
  ];

  // Timeline
  const timeline = [
    { year: '2017', event: 'ThinkSoft founded in Lahore, Pakistan' },
    { year: '2019', event: 'Launched first AI-powered analytics platform' },
    { year: '2021', event: 'Expanded to serve clients across Middle East & Europe' },
    { year: '2023', event: 'Recognized as Microsoft Partner of the Year' },
    { year: '2025', event: 'Launched GenAI Accelerator Program for enterprises' },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About ThinkSoft</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Empowering businesses with intelligent technology solutions since 2017.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600 mt-1 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

     {/* Who We Are */}
<div className="mb-16">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    <div>
      <p className="text-gray-600 mb-4">
        ThinkSoft is a dynamic technology partner specializing in AI, data analytics, cloud transformation, and enterprise software solutions. With roots in Pakistan and a global footprint, we help organizations innovate, scale, and thrive in the digital age.
      </p>
      <p className="text-gray-600">
        Our mission is to integrate Business Intelligence into every layer of your information systems—transforming data into decisions and ideas into impact.
      </p>
    </div>
    <div className="bg-gray-100 rounded-xl overflow-hidden h-64 flex items-center justify-center">
      <img
        src=""
        alt="ThinkSoft team at office"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

      {/* Timeline */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Journey</h2>
        <div className="relative pl-6 border-l-2 border-gray-200 space-y-6">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-12 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">{item.year}</span>
              </div>
              <p className="text-gray-600 pl-2">{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                <span className="text-gray-500 text-xs">Photo</span>
              </div>
              <h3 className="font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clients */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Trusted By</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80">
          {clients.map((logo, i) => (
            <div key={i} className="h-10 flex items-center">
              <img
                src={logo}
                alt={`Client ${i + 1}`}
                className="h-full object-contain grayscale hover:grayscale-0 transition"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          *Logos shown for illustrative purposes
        </p>
      </div>

      {/* CTA */}
      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Discover how ThinkSoft can help you leverage data, AI, and cloud to achieve your goals.
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default About;