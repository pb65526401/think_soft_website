// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
} from 'react-icons/bs';

const Footer = () => {
  const logo = '/removebg.png';

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const subject = encodeURIComponent(`Feedback from ${name} - ThinkSoft Website`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:info@thinksoft.com?subject=${subject}&body=${body}`;

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <footer className="bg-white text-gray-600">
      {/* Main Footer Content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Column 1: Logo + Description */}
            <div className="space-y-6">
              <Link to="/" onClick={goToTop}>
                <img src={logo} alt="ThinkSoft" className="h-16" />
              </Link>
              <p className="text-sm max-w-xs">
                Our primary goal is Customer Satisfaction and Integrating Business Intelligence within Information Systems.
              </p>
            </div>

            {/* Column 2: Navigation Links (3 groups) */}
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
              <div>
                <h6 className="text-gray-900 font-bold mb-4">Company</h6>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
                  <li><Link to="/life" className="hover:text-blue-600 transition">Life at ThinkSoft</Link></li>
                  <li><Link to="/careers" className="hover:text-blue-600 transition">Careers</Link></li>
                  <li><Link to="/sustainability" className="hover:text-blue-600 transition">Sustainability</Link></li>
                </ul>
              </div>
              <div>
                <h6 className="text-gray-900 font-bold mb-4">Services</h6>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/services/data" className="hover:text-blue-600 transition">Data Platform</Link></li>
                  <li><Link to="/services/ai" className="hover:text-blue-600 transition">Enterprise AI</Link></li>
                  <li><Link to="/services/cloud" className="hover:text-blue-600 transition">Cloud Consulting</Link></li>
                  <li><Link to="/services/apps" className="hover:text-blue-600 transition">Power Apps</Link></li>
                </ul>
              </div>
              <div>
                <h6 className="text-gray-900 font-bold mb-4">Solutions</h6>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/finsol" className="hover:text-blue-600 transition">Finsol</Link></li>
                  <li><Link to="/e-health" className="hover:text-blue-600 transition">e-Health</Link></li>
                  <li><Link to="/pos" className="hover:text-blue-600 transition">POS</Link></li>
                  <li><Link to="/task-manager" className="hover:text-blue-600 transition">Task Manager</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Feedback Form (Right Most) */}
            <div className="space-y-6">
              <h6 className="text-gray-900 font-bold mb-3">Send us feedback</h6>
              <form onSubmit={handleFeedbackSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright (left) + Follow Us (right) */}
      <div className="border-t border-gray-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">Copyright ©️ 2025 ThinkSoft. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Follow us:</span>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/company/thinksoft-d-s/?originalSubdomain=pk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
                aria-label="LinkedIn"
              >
                <BsLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
                aria-label="Facebook"
              >
                <BsFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
                aria-label="Twitter"
              >
                <BsTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <BsInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition"
                aria-label="YouTube"
              >
                <BsYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
          aria-label="Go to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;