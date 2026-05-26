import React from 'react';
import { Truck, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const navLinks = [
    { label: 'Kezdőlap', href: '#home' },
    { label: 'Szolgáltatások', href: '#services' },
    { label: 'Árak', href: '#prices' },
    { label: 'Galéria', href: '#gallery' },
    { label: 'Kapcsolat', href: '#contact' },
  ];

  const serviceLinks = [
    'Autómentés',
    'Autószállítás',
    'Bikázás',
    'Kerékcsere',
    'Üzemanyagpótlás',
    'Zárnyitás',
  ];

  return (
    <footer className="footer" id="footer">
      <div className="footer__gold-line" />

      <div className="footer__content container">
        {/* Brand Column */}
        <div className="footer__column footer__column--brand">
          <a href="#home" className="footer__logo">
            <Truck className="footer__logo-icon" size={28} />
            <span className="footer__logo-text">AUTÓMENTŐ-GYORS</span>
          </a>
          <p className="footer__description">
            Prémium autómentés és szállítás Land Rover Discovery 3 vontatóval.
            Éjjel-nappal a rendelkezésére állunk.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="footer__column">
          <h4 className="footer__column-title">Navigáció</h4>
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer__column">
          <h4 className="footer__column-title">Szolgáltatások</h4>
          <ul className="footer__links">
            {serviceLinks.map((service) => (
              <li key={service}>
                <span className="footer__link">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer__column">
          <h4 className="footer__column-title">Kapcsolat</h4>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <Phone size={18} className="footer__contact-icon" />
              <a href="tel:+36706002511" className="footer__link">
                +36 70 600 2511
              </a>
            </li>
            <li className="footer__contact-item">
              <Mail size={18} className="footer__contact-icon" />
              <a href="mailto:soosdanielmarcell@gmail.com" className="footer__link">
                soosdanielmarcell@gmail.com
              </a>
            </li>
            <li className="footer__contact-item">
              <MapPin size={18} className="footer__contact-icon" />
              <span className="footer__link">Biatorbány és környéke</span>
            </li>
          </ul>
          <div className="footer__socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Facebook"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <span className="footer__copyright">
            © 2026 — AUTÓMENTŐ-GYORS. Minden jog fenntartva.
          </span>
          <span className="footer__bottom-address">
            Készítette: <span style={{ color: 'var(--primary)', fontWeight: '700' }}>DSM Studio</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
