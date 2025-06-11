import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ServicesOverview from './pages/ServicesOverview';
import RoofingLeads from './pages/services/RoofingLeads';
import HVACLeads from './pages/services/HVACLeads';
import MovingLeads from './pages/services/MovingLeads';
import SolarLeads from './pages/services/SolarLeads';
import RoofingMarketing from './pages/services/RoofingMarketing';
import HVACMarketing from './pages/services/HVACMarketing';
import CallCenter from './pages/CallCenter';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<ServicesOverview />} />
            <Route path="/services/roofing-leads" element={<RoofingLeads />} />
            <Route path="/services/hvac-leads" element={<HVACLeads />} />
            <Route path="/services/moving-leads" element={<MovingLeads />} />
            <Route path="/services/solar-leads" element={<SolarLeads />} />
            <Route path="/services/roofing-marketing" element={<RoofingMarketing />} />
            <Route path="/services/hvac-marketing" element={<HVACMarketing />} />
            <Route path="/call-center" element={<CallCenter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;