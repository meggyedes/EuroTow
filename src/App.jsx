import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import RoadAssistance from './components/RoadAssistance';
import QuickDelivery from './components/QuickDelivery';
import Equipment from './components/Equipment';
import Prices from './components/Prices';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';
import './App.css';

// --- Scroll to top on route change ---
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// --- Trigger scroll animation hook for dynamic content ---
function ScrollAnimationTrigger() {
  const { pathname } = useLocation();
  useScrollAnimation(pathname);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollAnimationTrigger />
      
      <Navbar />
      
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          {/* Home Page (Kezdőlap) */}
          <Route 
            path="/" 
            element={
              <div className="home-page">
                <Hero />
                <WhyUs />
                <QuickDelivery />
                <Testimonials />
              </div>
            } 
          />

          {/* Services Page (Szolgáltatások) */}
          <Route 
            path="/szolgaltatasok" 
            element={
              <div className="page-fade-in">
                <Services />
                <RoadAssistance />
                <QuoteForm />
              </div>
            } 
          />

          {/* Equipment Page (Felszerelés) */}
          <Route 
            path="/felszereles" 
            element={
              <div className="page-fade-in">
                <Equipment />
              </div>
            } 
          />

          {/* Prices Page (Árak) */}
          <Route 
            path="/arak" 
            element={
              <div className="page-fade-in">
                <Prices />
              </div>
            } 
          />

          {/* Gallery Page (Galéria) */}
          <Route 
            path="/galeria" 
            element={
              <div className="page-fade-in">
                <Gallery />
              </div>
            } 
          />

          {/* Contact Page (Kapcsolat) */}
          <Route 
            path="/kapcsolat" 
            element={
              <div className="page-fade-in">
                <QuoteForm />
              </div>
            } 
          />

          {/* Wildcard Route - Redirect any invalid or unmatched routes to Kezdőlap */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
