import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import './QuickDelivery.css';

const features = [
  'Land Rover Discovery 3 vontatóval',
  'Biztonságos rögzítés',
  'Országos lefedettség',
  'Rugalmas időpontok',
];

export default function QuickDelivery() {
  return (
    <section id="quick-delivery" className="quick-delivery page-fade-in">
      <div className="container">
        <div className="quick-delivery__wrapper">
          {/* Image Side */}
          <div className="quick-delivery__image-col">
            <div className="quick-delivery__image-wrapper">
              <img
                src="/images/towing-landrover.jpg"
                alt="Gyorsmentő-szállítás Land Rover Discovery 3-mal"
                className="quick-delivery__image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="quick-delivery__content-col">
            <span className="quick-delivery__badge">PRÉMIUM SZOLGÁLTATÁS</span>

            <h2 className="quick-delivery__title">
              GYORSMENTŐ-<span className="gold-text">SZÁLLÍTÁS</span>
            </h2>

            <p className="quick-delivery__description">
              Professzionális autómentő szolgáltatásunkat Land Rover Discovery 3 
              vontatóval végezzük, amely biztosítja járműve biztonságos szállítását 
              bármilyen időjárási és útviszonyok között. Gyors kiszállás, megbízható 
              rögzítés és országos lefedettség — hogy Ön mindig biztonságban érezze magát.
            </p>

            <ul className="quick-delivery__features">
              {features.map((feature) => (
                <li key={feature} className="quick-delivery__feature-item">
                  <CheckCircle
                    className="quick-delivery__feature-icon"
                    size={22}
                    strokeWidth={2}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/kapcsolat"
              className="btn btn-primary quick-delivery__cta"
            >
              Ajánlatot kérek
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
