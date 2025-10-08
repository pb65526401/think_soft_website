// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Import page components
import Home from './Pages/Home'; // This will contain Hero + other home sections
import Careers from './Pages/Careers';
import Sustainability from './Pages/Sustainability';
import About from './Pages/About';
import Life from './Pages/Life';

// Services
import DataPlatform from './Pages/services/DataPlatform';
import EnterpriseAI from './Pages/services/EnterpriseAI';
import CloudConsulting from './Pages/services/CloudConsulting';
import PowerApps from './Pages/services/PowerApps';

// Industries
import Retail from './Pages/industries/Retails';
import Fintech from './Pages/industries/Fintech';

// Insights
import News from './Pages/News';
import CaseStudies from './Pages/CaseStudies';

// Resources
import Blogs from './Pages/resources/Blogs';
import Whitepapers from './Pages/resources/Whitepapers';
import ResourcesNews from './Pages/resources/News';
import Events from './Pages/resources/Events';

// Solutions
import Finsol from './Pages/solutions/Finsol';
import EHealth from './Pages/solutions/EHealth';      // ✅ new
import POS from './Pages/solutions/POS';              // ✅ new
import TaskManager from './Pages/solutions/TaskManager'; // ✅ new

// Contact
import Contact from './Pages/Contact';

// Fallback
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Who we are */}
            <Route path="/about" element={<About />} />
            <Route path="/life" element={<Life />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/careers" element={<Careers />} />
            {/* What we do - Services */}
            <Route path="/services/data" element={<DataPlatform />} />
            <Route path="/services/ai" element={<EnterpriseAI />} />
            <Route path="/services/cloud" element={<CloudConsulting />} />
            <Route path="/services/apps" element={<PowerApps />} />

            {/* How we work - Industries */}
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/fintech" element={<Fintech />} />

            {/* Insights */}
            <Route path="/news" element={<News />} />
            <Route path="/case-studies" element={<CaseStudies />} />

            {/* Resources */}
            <Route path="/resources/blogs" element={<Blogs />} />
            <Route path="/resources/whitepapers" element={<Whitepapers />} />
            <Route path="/resources/news" element={<ResourcesNews />} />
            <Route path="/resources/events" element={<Events />} />

            {/* Solutions */}
            <Route path="/finsol" element={<Finsol />} />
            <Route path="/e-health" element={<EHealth />} />
            <Route path="/pos" element={<POS />} />
            <Route path="/task-manager" element={<TaskManager />} />
            {/* Add more as needed */}

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;