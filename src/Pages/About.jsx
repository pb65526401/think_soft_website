// src/Pages/About.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';

// Hero & assets
import teamphoto from '../assets/aboutus.png';
import mapImage from '../assets/map.jpg'; // ← Add this file

// Team
import aliImg from '../assets/team/ali.jpg';
import sanaImg from '../assets/team/sana.jpg';
import usmanImg from '../assets/team/usman.jpg';
import ayeshaImg from '../assets/team/ayesha.jpg';

// Clients
import lebaraLogo from '../assets/clients/lebara.png';
import confizLogo from '../assets/clients/confiz.png';
import retailcoLogo from '../assets/clients/retailco.png';
import fintechxLogo from '../assets/clients/fintechx.png';
import healthplusLogo from '../assets/clients/healthplus.png';
import taskflowLogo from '../assets/clients/taskflow.png';

const About = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Stats
  const stats = [
    { value: '50+', label: 'Happy Clients' },
    { value: '10+', label: 'Countries Served' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '8+', label: 'Years of Excellence' },
  ];

  // Team with social links
  const team = [
    { name: 'Ali Raza', role: 'CEO & Founder', img: aliImg, linkedin: '#' },
    { name: 'Sana Khan', role: 'CTO', img: sanaImg, linkedin: '#' },
    { name: 'Usman Ahmed', role: 'Head of AI', img: usmanImg, linkedin: '#' },
    { name: 'Ayesha Malik', role: 'Cloud Architect', img: ayeshaImg, linkedin: '#' },
  ];

  // Clients
  const clients = [
    { name: 'Lebara', logo: lebaraLogo, url: 'https://www.lebara.com/en/home.html' },
    { name: 'Confiz', logo: confizLogo, url: 'https://www.confiz.com/' },
    { name: 'RetailCo', logo: retailcoLogo, url: 'https://www.retailco.com.my/' },
    { name: 'FintechX', logo: fintechxLogo, url: 'https://fintechx.digital/en' },
    { name: 'Health-Plus', logo: healthplusLogo, url: 'https://health-plus.com/' },
    { name: 'TaskFlow', logo: taskflowLogo, url: 'https://taskflowapp.com/' },
  ];

  // Timeline
  const timeline = [
    { year: '2017', event: 'ThinkSoft founded in Lahore, Pakistan' },
    { year: '2019', event: 'Launched first AI-powered analytics platform' },
    { year: '2021', event: 'Expanded to serve clients across Middle East & Europe' },
    { year: '2023', event: 'Recognized as Microsoft Partner of the Year' },
    { year: '2025', event: 'Launched GenAI Accelerator Program for enterprises' },
  ];

  // Offices
  const offices = [
    {
      city: 'Lahore',
      country: 'Pakistan',
      address: '3rd Floor, Arfa Software Technology Park, Ferozepur Road',
      role: 'Headquarters & Delivery Center'
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'Business Bay, Executive Towers',
      role: 'Middle East Operations'
    },
    {
      city: 'London',
      country: 'UK',
      address: '10 Finsbury Square, EC2A 1AF',
      role: 'European Client Hub'
    }
  ];

  // Employee growth data (year → count)
  const growthData = [
    { year: '2017', employees: 5 },
    { year: '2019', employees: 25 },
    { year: '2021', employees: 60 },
    { year: '2023', employees: 95 },
    { year: '2025', employees: 120 },
  ];

  // Simple SVG chart
  const maxEmployees = Math.max(...growthData.map(d => d.employees));
  const barWidth = 40;
  const spacing = 20;
  const chartHeight = 120;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={teamphoto}
            alt="ThinkSoft team"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}

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
          <div
            className="bg-gray-100 rounded-xl overflow-hidden h-64 flex items-center justify-center cursor-pointer hover:opacity-90 transition"
            onClick={() => setLightboxOpen(true)}
            role="button"
            aria-label="View full-size team photo"
          >
            <img
              src={teamphoto}
              alt="ThinkSoft team at office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Global Presence + Map + Growth Chart */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Global Presence</h2>
        
        {/* Top: Employee Count + Offices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-3">120+ Employees</div>
            <p className="text-gray-600 mb-4">
              Our team spans continents, united by a passion for innovation.
            </p>
            <div className="space-y-4">
              {offices.map((office, i) => (
                <div key={i} className="border-l-4 border-blue-500 pl-4">
                  <div className="font-bold text-gray-900">{office.city}, {office.country}</div>
                  <div className="text-sm text-gray-600">{office.address}</div>
                  <div className="text-xs text-gray-500 italic">{office.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Image */}
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <img
              src={mapImage}
              alt="ThinkSoft global offices"
              className="w-full h-64 object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-64 bg-gray-50 text-gray-400">Map illustration</div>';
              }}
            />
          </div>
        </div>

        {/* Employee Growth Chart */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Employee Growth (2017–2025)</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-end h-32 gap-6 pl-6">
              {growthData.map((d, i) => {
                const height = (d.employees / maxEmployees) * chartHeight;
                return (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className="w-10 bg-blue-500 rounded-t"
                      style={{ height: `${height}px` }}
                    ></div>
                    <div className="mt-2 text-xs text-gray-600 text-center">
                      {d.year}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-2 text-xs text-gray-500 text-center">
              From 5 to 120+ team members in 8 years
            </div>
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

      {/* Team with Social Links */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="rounded-full w-32 h-32 mx-auto overflow-hidden border-2 border-white shadow-md group-hover:shadow-lg transition">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-900 mt-3">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
              <div className="mt-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <BsLinkedin className="inline h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clients */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Trusted By</h2>
        <div className="flex flex-wrap justify-center gap-12 md:gap-16 opacity-90">
          {clients.map((client, i) => (
            <a
              key={i}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 flex items-center grayscale hover:grayscale-0 transition-opacity opacity-90 hover:opacity-100"
              aria-label={`Visit ${client.name} website`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-full object-contain max-w-full"
              />
            </a>
          ))}
        </div>
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