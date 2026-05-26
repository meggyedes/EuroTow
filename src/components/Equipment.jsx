import React from 'react';
import { Truck, ShieldAlert, Cpu, Layers, Maximize2, Scale } from 'lucide-react';
import './Equipment.css';

export default function Equipment() {
  return (
    <section className="equipment" id="equipment">
      <div className="container">
        <h2 className="section-title scroll-animate">
          PROFI <span className="gold-text">FELSZERELÉSÜNK</span> A BIZTONSÁGÉRT
        </h2>
        <p className="section-subtitle scroll-animate">
          A prémium járművek prémium bánásmódot érdemelnek. Ismerje meg professzionális mentőjárművünket és trélerünket!
        </p>

        <div className="equipment__grid">
          {/* Towing Vehicle - Land Rover */}
          <div className="equipment__card glass scroll-animate delay-1">
            <div className="equipment__header">
              <div className="equipment__tag">VONTATÓ JÁRMŰ</div>
              <h3 className="equipment__title">Land Rover Discovery 3</h3>
              <p className="equipment__subtitle">Évjárat: 2007 | Megbízható 4x4 terepjáró</p>
            </div>

            <div className="equipment__image-box">
              <img 
                src="/images/towing-sunset.jpg" 
                alt="Land Rover Discovery 3 vontató jármű" 
                className="equipment__image"
              />
              <div className="equipment__image-overlay" />
            </div>

            <div className="equipment__specs">
              <div className="equipment__spec-item">
                <div className="equipment__spec-icon-wrapper">
                  <ShieldAlert size={20} className="gold-text" />
                </div>
                <div className="equipment__spec-details">
                  <span className="equipment__spec-label">Vontató kapacitás</span>
                  <span className="equipment__spec-value">3.5t (3500 kg) vonóhorog</span>
                </div>
              </div>

              <div className="equipment__spec-item">
                <div className="equipment__spec-icon-wrapper">
                  <Cpu size={20} className="gold-text" />
                </div>
                <div className="equipment__spec-details">
                  <span className="equipment__spec-label">Hajtáslánc</span>
                  <span className="equipment__spec-value">Állandó 4x4 + Terrain Response</span>
                </div>
              </div>

              <div className="equipment__spec-item">
                <div className="equipment__spec-icon-wrapper">
                  <Layers size={20} className="gold-text" />
                </div>
                <div className="equipment__spec-details">
                  <span className="equipment__spec-label">Felfüggesztés</span>
                  <span className="equipment__spec-value">Légrugós szintező rendszer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trailer - Niewiadow */}
          <div className="equipment__card glass scroll-animate delay-2">
            <div className="equipment__header">
              <div className="equipment__tag">AUTÓSZÁLLÍTÓ TRÉLER</div>
              <h3 className="equipment__title">NIEWIADOW BR 2 Jupiter</h3>
              <p className="equipment__subtitle">Profi hidraulikus kéttengelyes tréler</p>
            </div>

            <div className="equipment__image-box">
              <img 
                src="/images/niewiadow-jupiter.jpg" 
                alt="NIEWIADOW BR 2 Jupiter autószállító tréler" 
                className="equipment__image"
              />
              <div className="equipment__image-overlay" />
            </div>

            <div className="equipment__specs">
              <div className="equipment__spec-item">
                <div className="equipment__spec-icon-wrapper">
                  <Maximize2 size={20} className="gold-text" />
                </div>
                <div className="equipment__spec-details">
                  <span className="equipment__spec-label">Hasznos platóméret</span>
                  <span className="equipment__spec-value">5.0 m × 2.1 m</span>
                </div>
              </div>

              <div className="equipment__spec-item">
                <div className="equipment__spec-icon-wrapper">
                  <Scale size={20} className="gold-text" />
                </div>
                <div className="equipment__spec-details">
                  <span className="equipment__spec-label">Tömeg adatok</span>
                  <span className="equipment__spec-value">3500 kg össztömeg | 520 kg saját tömeg</span>
                </div>
              </div>

              <div className="equipment__spec-item">
                <div className="equipment__spec-icon-wrapper">
                  <Truck size={20} className="gold-text" />
                </div>
                <div className="equipment__spec-details">
                  <span className="equipment__spec-label">Maximális terhelhetőség</span>
                  <span className="equipment__spec-value font-gold">2980 kg tiszta teherbírás</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Warning/Safety Banner */}
        <div className="equipment__safety-banner glass scroll-animate">
          <div className="equipment__safety-icon-box">
            <Truck size={32} className="gold-text" />
          </div>
          <div className="equipment__safety-content">
            <h4>MIÉRT FONTOS EZ AZ ÖN SZÁMÁRA?</h4>
            <p>
              A Land Rover Discovery 3 rendkívüli önsúlya és a 3.5 tonnás vonóhorog, valamint a NIEWIADOW Jupiter tréler 
              3.5 tonnás teherbírása garantálja, hogy **bármilyen méretű és súlyú személyautót, SUV-t, terepjárót vagy kisteherautót** 
              teljes biztonsággal, erőlködés és kockázat nélkül tudunk elszállítani, akár nehéz terep- és útviszonyok mellett is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
