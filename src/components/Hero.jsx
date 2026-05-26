import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const bgRef = useRef(null);

  // --- Parallax scroll effect ---
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            const scrollY = window.scrollY;
            bgRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Parallax Background */}
      <div className="hero__background" ref={bgRef} />

      {/* Dark Overlay */}
      <div className="hero__overlay" />

      {/* Decorative Glow */}
      <div className="hero__glow" />

      {/* Content */}
      <div className="hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Éjjel-nappal elérhetőek vagyunk!
        </div>

        {/* Heading */}
        <h1 className="hero__title">
          <span className="gold-text">24/7</span> AUTÓMENTÉS
          <br />
          & SZÁLLÍTÁS
        </h1>

        {/* Subtitle */}
        <p className="hero__subtitle">
          Professzionális autómentés és szállítás Land Rover Discovery 3
          vontatóval. Gyors kiérkezés, biztonságos szállítás — az ország egész
          területén.
        </p>

        {/* CTA Buttons */}
        <div className="hero__buttons">
          <a href="tel:+36706002511" className="btn btn-primary pulse">
            <Phone size={20} strokeWidth={2.5} />
            HÍVJON MOST: +36 70 600 2511
          </a>

          <Link
            to="/kapcsolat"
            className="btn btn-outline"
          >
            Ajánlatkérés
          </Link>
        </div>
      </div>

      {/* Scroll-Down Indicator */}
      <Link
        to="/szolgaltatasok"
        className="hero__scroll-indicator"
        aria-label="Tovább a szolgáltatásokra"
      >
        <span>Szolgáltatások</span>
        <ChevronDown size={22} className="hero__scroll-icon" />
      </Link>
    </section>
  );
}
