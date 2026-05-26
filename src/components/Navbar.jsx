import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Truck, Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Kezdőlap', path: '/' },
  { label: 'Szolgáltatások', path: '/szolgaltatasok' },
  { label: 'Felszerelés', path: '/felszereles' },
  { label: 'Árak', path: '/arak' },
  { label: 'Galéria', path: '/galeria' },
  { label: 'Kapcsolat', path: '/kapcsolat' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // --- Scroll detection: toggle 'scrolled' class ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Lock body scroll when mobile menu is open ---
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo Link to Home */}
        <Link
          to="/"
          className="navbar__logo"
          onClick={closeMobile}
        >
          <div className="navbar__logo-icon">
            <Truck size={22} strokeWidth={2.5} />
          </div>
          <div className="navbar__logo-text">
            AUTÓMENTŐ<span>-GYORS</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="navbar__menu">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="tel:+36706002511" className="navbar__cta">
          <Phone size={16} strokeWidth={2.5} />
          +36 70 600 2511
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar__toggle"
          onClick={toggleMobile}
          aria-label={mobileOpen ? 'Menü bezárása' : 'Menü megnyitása'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`navbar__backdrop${mobileOpen ? ' visible' : ''}`}
        onClick={closeMobile}
      />

      {/* Mobile Menu Overlay */}
      <div className={`navbar__mobile-overlay${mobileOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
            onClick={closeMobile}
          >
            {link.label}
          </NavLink>
        ))}

        <a
          href="tel:+36706002511"
          className="navbar__mobile-cta"
        >
          <Phone size={18} strokeWidth={2.5} />
          Hívjon: +36 70 600 2511
        </a>
      </div>
    </nav>
  );
}
