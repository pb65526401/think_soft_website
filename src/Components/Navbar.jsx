// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaChevronRight,
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const logo = '/thinksoft.jpg';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
};

const MegaDropdown = ({ title, items, visible, onEnter, onLeave }) => {
  const rightImages = [
    'https://via.placeholder.com/150x100?text=Cloud+Tech',
    'https://via.placeholder.com/150x100?text=AI+Platform',
    'https://via.placeholder.com/150x100?text=Data+Analytics',
  ];

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`absolute left-1/2 -translate-x-1/2 z-10 w-screen max-w-6xl p-6 bg-white shadow-xl rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300 ease-in-out ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{ top: '64px' }} // matches h-16 (4rem = 64px)
    >
      <div className="md:col-span-1">
        <h5 className="text-lg font-bold text-gray-900">{title}</h5>
        <p className="mt-2 text-gray-600">
          Explore our {title.toLowerCase()} offerings.
        </p>
      </div>
      <div className="md:col-span-1 grid grid-cols-2 gap-4">
        {items.map((section, idx) => (
          <div key={idx}>
            <h6 className="font-semibold text-gray-900">{section.title}</h6>
            <ul className="mt-2 space-y-1">
              {section.items.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to || '#'}
                    onClick={(e) => {
                      if (item.to?.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(item.to.substring(1));
                      }
                    }}
                    className="block text-sm text-gray-700 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="md:col-span-1 flex flex-col gap-3">
        {rightImages.map((src, idx) => (
          <img
            key={idx}
            src={src.trim()} // fix extra spaces in URL
            alt={`Feature ${idx + 1}`}
            className="w-full h-20 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

const MobileMenuSection = ({ title, items }) => (
  <div>
    <h5 className="text-lg font-semibold mb-3 text-gray-900">{title}</h5>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i}>
          <Link to={item.to} className="block py-1 text-base text-gray-700 hover:text-gray-900">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const hoverTimeout = useRef(null);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => scrollToSection(id), 100);
    }
  }, [location]);

  const menuItems = [
    {
      label: 'Who we are',
      items: [
        { title: 'Company', items: [{ label: 'About', to: '/about' }, { label: 'Life at ThinkSoft', to: '/life' }] },
        { title: 'Impact', items: [{ label: 'Careers', to: '/careers' }, { label: 'Sustainability', to: '/sustainability' }] },
      ],
    },
    {
      label: 'What we do',
      items: [
        { title: 'Data & AI', items: [{ label: 'Data Platform', to: '/services/data' }, { label: 'Enterprise AI', to: '/services/ai' }] },
        { title: 'Cloud & Apps', items: [{ label: 'Cloud Consulting', to: '/services/cloud' }, { label: 'Power Apps', to: '/services/apps' }] },
      ],
    },
    {
      label: 'How we work',
      items: [
        { title: 'Industries', items: [{ label: 'Retail', to: '/industries/retail' }, { label: 'Fintech', to: '/industries/fintech' }] },
        { title: 'Insights', items: [{ label: 'News', to: '/news' }, { label: 'Case Studies', to: '/case-studies' }] },
      ],
    },
    {
      label: 'Resources',
      items: [
        { title: 'Content', items: [{ label: 'Blogs', to: '/resources/blogs' }, { label: 'Whitepapers', to: '/resources/whitepapers' }] },
        { title: 'Company', items: [{ label: 'News', to: '/resources/news' }, { label: 'Events', to: '/resources/events' }] },
      ],
    },
  ];

  const flattenItems = (sections) => sections.flatMap((sec) => sec.items);

  const openDropdown = (index) => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setActiveDropdown(index), 150);
  };

  const closeDropdown = () => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 300);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white text-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="ThinkSoft" className="h-10" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((menu, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => openDropdown(idx)}
                onMouseLeave={closeDropdown}
              >
                <div className="flex items-center cursor-pointer text-sm font-medium hover:text-blue-600 select-none">
                  {menu.label} <FaChevronDown className="ml-1 h-3 w-3" />
                </div>
                <MegaDropdown
                  title={menu.label}
                  items={menu.items}
                  visible={activeDropdown === idx}
                  onEnter={() => openDropdown(idx)}
                  onLeave={closeDropdown}
                />
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" onClick={closeMobileMenu}>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium flex items-center hover:bg-blue-700">
                Let's talk <FaChevronRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-6 max-w-7xl mx-auto">
            {menuItems.map((menu, i) => (
              <MobileMenuSection
                key={i}
                title={menu.label}
                items={flattenItems(menu.items)}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;