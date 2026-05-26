import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BadgeDollarSign, MapPin, Calculator, Calendar, ArrowRight, Info } from 'lucide-react';
import './Prices.css';

const PRICING_PLANS = [
  {
    title: 'Helyi Autómentés',
    price: '30 000',
    unit: 'Ft-tól',
    subtitle: 'Biatorbányon és vonzáskörzetében',
    features: [
      'Kiérkezés 15-30 percen belül',
      'Jármű fel- és lecsörlőzése',
      'Szakszerű rögzítés a platón',
      'Utasok szállítása (max. 4 fő)',
      'Biztosított szállítás',
    ],
    popular: true,
    tag: 'PRÉMIUM HELYI',
  },
  {
    title: 'Országos Autómentés',
    price: '350',
    unit: 'Ft / km',
    subtitle: 'Hosszú távú szállítás és vontatás',
    features: [
      'Alapár: 20 000 Ft felrakási díj',
      'Pontos km-alapú elszámolás (oda-vissza)',
      'Belföldön és külföldön is',
      'Land Rover Discovery 3 vontatóval',
      'Nincs rejtett autópálya díj',
    ],
    popular: false,
    tag: 'TÁVOLSÁGI',
  },
  {
    title: 'Közúti Segítségnyújtás',
    price: '25 000',
    unit: 'Ft-tól',
    subtitle: 'Helyszíni javítások és mentés',
    features: [
      'Bikázás / Akkumulátor segély',
      'Kerékcsere és defektjavítás',
      'Félretankolás / Üzemanyagpótlás',
      'Zárolt ajtók szakszerű nyitása',
      'Helyszíni gyors hibafeltárás',
    ],
    popular: false,
    tag: 'HELYSZÍNI SEGÉLY',
  },
];

export default function Prices() {
  const [distance, setDistance] = useState(100);
  const [serviceType, setServiceType] = useState('national');
  const [hasNightFee, setHasNightFee] = useState(false);

  const calculateEstimate = () => {
    const basePrice = 20000;
    const kmRate = 350;

    if (serviceType === 'local') {
      return 30000 + (hasNightFee ? 8000 : 0);
    }

    let total = basePrice + distance * kmRate;
    if (hasNightFee) {
      total *= 1.25; // +25% night/weekend fee in 2026
    }
    return Math.round(total);
  };

  return (
    <section className="prices page-fade-in" id="prices">
      <div className="container">
        <h2 className="section-title">
          KORREKT <span className="gold-text">PRÉMIUM ÁRAK</span> REJTETT KÖLTSÉGEK NÉLKÜL
        </h2>
        <p className="section-subtitle">
          Transzparens díjszabás prémium 2026-os szolgáltatásunkhoz. Válasszon csomagjainkból, vagy kalkuláljon egyedi árat!
        </p>

        {/* Pricing Cards Grid */}
        <div className="prices__grid">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={plan.title}
              className={`prices__card scroll-animate visible delay-${index + 1} ${plan.popular ? 'prices__card--popular' : ''}`}
            >
              {plan.popular && <span className="prices__card-badge">{plan.tag}</span>}
              {!plan.popular && plan.tag && <span className="prices__card-badge prices__card-badge--secondary">{plan.tag}</span>}
              
              <h3 className="prices__card-title">{plan.title}</h3>
              <p className="prices__card-subtitle">{plan.subtitle}</p>
              
              <div className="prices__card-price-wrapper">
                <span className="prices__card-price gold-text">{plan.price}</span>
                <span className="prices__card-unit">{plan.unit}</span>
              </div>

              <div className="prices__card-divider" />

              <ul className="prices__card-features">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="prices__card-feature">
                    <span className="prices__card-feature-bullet" />
                    <span className="prices__card-feature-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/kapcsolat"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} prices__card-btn`}
              >
                Ajánlatot kérek
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Interactive Calculator */}
        <div className="prices__calculator-wrapper">
          <div className="prices__calculator glass">
            <div className="prices__calculator-header">
              <Calculator className="prices__calculator-icon gold-text" size={28} />
              <h3 className="prices__calculator-title">
                INTERAKTÍV <span className="gold-text">ÁRKALKULÁTOR (2026)</span>
              </h3>
            </div>
            
            <p className="prices__calculator-desc">
              Számítsa ki a várható szállítási költséget távolság alapján! A kalkuláció tájékoztató jellegű, alapját a Land Rover Discovery 3 vontató adja.
            </p>

            <div className="prices__calculator-grid">
              {/* Controls Column */}
              <div className="prices__calculator-controls">
                <div className="prices__calc-field">
                  <label className="prices__calc-label">Szolgáltatás típusa</label>
                  <div className="prices__radio-group">
                    <label className={`prices__radio-btn ${serviceType === 'local' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="serviceType"
                        value="local"
                        checked={serviceType === 'local'}
                        onChange={() => setServiceType('local')}
                      />
                      Helyi (Biatorbány és környéke)
                    </label>
                    <label className={`prices__radio-btn ${serviceType === 'national' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="serviceType"
                        value="national"
                        checked={serviceType === 'national'}
                        onChange={() => setServiceType('national')}
                      />
                      Országos (Km-alapú)
                    </label>
                  </div>
                </div>

                {serviceType === 'national' && (
                  <div className="prices__calc-field">
                    <div className="prices__calc-label-wrapper">
                      <label className="prices__calc-label">Távolság (oda-vissza)</label>
                      <span className="prices__calc-value gold-text">{distance} km</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="600"
                      step="5"
                      value={distance}
                      onChange={(e) => setDistance(parseInt(e.target.value))}
                      className="prices__range-slider"
                    />
                    <div className="prices__range-labels">
                      <span>10 km</span>
                      <span>300 km</span>
                      <span>600 km</span>
                    </div>
                  </div>
                )}

                <div className="prices__calc-field prices__calc-field--checkbox">
                  <label className="prices__checkbox-label">
                    <input
                      type="checkbox"
                      checked={hasNightFee}
                      onChange={(e) => setHasNightFee(e.target.checked)}
                      className="prices__checkbox"
                    />
                    <span className="prices__checkbox-custom" />
                    Éjszakai / Hétvégi mentés (+25% felár)
                  </label>
                </div>
              </div>

              {/* Result Column */}
              <div className="prices__calculator-result">
                <div className="prices__result-card">
                  <span className="prices__result-label">Becsült Végösszeg</span>
                  <div className="prices__result-price-box">
                    <span className="prices__result-price gold-text">
                      {calculateEstimate().toLocaleString('hu-HU')}
                    </span>
                    <span className="prices__result-currency">Ft</span>
                  </div>
                  <p className="prices__result-note">
                    <Info size={14} />
                    Az ár tartalmazza a Land Rover Discovery 3 vontató használatát és a szakszerű rögzítést. Nincs rejtett költség!
                  </p>
                  
                  <Link
                    to="/kapcsolat"
                    className="btn btn-primary prices__result-btn pulse"
                  >
                    Megrendelem a mentést
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
