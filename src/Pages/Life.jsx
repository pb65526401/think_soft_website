// src/Pages/Life.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Life = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Life at ThinkSoft</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Where curiosity meets code, and people grow as fast as technology.
        </p>
      </div>

      {/* Culture Pillars */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Culture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Build & Break',
              desc: 'Weekly hackathons, AI sandbox labs, and “fail-forward” demos. We ship fast and learn faster.'
            },
            {
              title: 'Learn Always',
              desc: 'Annual learning stipend, Microsoft certifications, and lunch-and-learns with global experts.'
            },
            {
              title: 'Thrive, Not Just Work',
              desc: 'Flexible hours, remote-first policy, mental wellness days, and quarterly team retreats.'
            },
            {
              title: 'One Team',
              desc: 'No titles in meetings. Engineers, designers, and clients collaborate as equals.'
            },
            {
              title: 'Global from Lahore',
              desc: 'Work on projects for London, Dubai, and beyond — without leaving your city.'
            },
            {
              title: 'Give Back',
              desc: 'Tech for Good: Volunteer hours, coding bootcamps for students, and open-source contributions.'
            }
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Perks & Benefits */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Perks That Matter</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Health Insurance',
            'Annual Bonus',
            'Home Office Setup',
            'Gym/Wellness Stipend',
            'Parental Leave',
            'Conference Travel',
            'Unlimited PTO*',
            'Team Offsites'
          ].map((perk, i) => (
            <div key={i} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-700">{perk}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">*Flexible time off with manager approval</p>
      </div>

      {/* Employee Voices */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">In Their Words</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4 italic">
            “I joined as a junior dev. In 2 years, I’ve led an AI project for a UK client and earned my Azure AI cert — all supported by ThinkSoft.”
            <div className="mt-3 font-medium text-gray-900">— Ayesha M., Cloud Architect</div>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 italic">
            “Remote-first doesn’t mean isolated. Our virtual coffee chats and Lahore office meetups keep us connected.”
            <div className="mt-3 font-medium text-gray-900">— Usman A., AI Lead</div>
          </div>
        </div>
      </div>

      {/* Gallery (Placeholder) */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Moments That Define Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs">Team Photo {i + 1}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-3">
          Hackathons • Team Lunches • Client Wins • Learning Sessions
        </p>
      </div>

      {/* CTA */}
      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Grow With Us?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We’re always looking for curious minds who care about impact.
        </p>
        <Link
          to="/careers"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View Open Roles
        </Link>
      </div>
    </div>
  );
};

export default Life;