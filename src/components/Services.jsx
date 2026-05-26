import React, { useState } from 'react';
import { 
  Car, Truck, CheckCircle, X, Shield, 
  HelpCircle, Eye, Info, ChevronRight, Phone 
} from 'lucide-react';
import './Services.css';

const SERVICES_DATA = [
  {
    id: 'automentes',
    icon: Car,
    title: 'AUTÓMENTÉS',
    shortDesc: 'Sérült, műszaki hibás vagy elakadt járművek azonnali kimentése és elszállítása Biatorbágyon és országosan.',
    items: [
      'Sérült, műszaki hibás autók',
      'Baleseti mentés és csörlőzés',
      'Elakadt járművek (árokból, sárból)',
    ],
    detailedText: 'Bármilyen balesetet szenvedett, árokba csúszott, elakadt vagy műszakilag hibás jármű azonnali szakszerű kimentése és elszállítása. A Land Rover Discovery 3-as terepjáró és a NIEWIADOW Jupiter tréler kombinációja a legnehezebb mentési feladatokat is könnyedén megoldja.',
    features: [
      {
        title: 'Erős elektromos csörlő',
        desc: 'Teljesen mozgásképtelen, gurulni nem képes járművek biztonságos felhúzása a trélerre.',
      },
      {
        title: 'Nehéz terepviszonyok',
        desc: 'Árokból, sárból vagy hóból történő kimentés a Land Rover Discovery 3 legendás 4x4 hajtásának köszönhetően.',
      },
      {
        title: 'Kényelmes utasszállítás',
        desc: 'A vontató jármű tágas utasterében a sofőr mellett még maximum 4 utas is kényelmesen utazhat velünk.',
      },
    ],
    checklistTitle: 'TEENDŐK BALESET VAGY MEGHIBÁSODÁS ESETÉN:',
    checklist: [
      'Kapcsolja be a vészvillogót és vegye fel a láthatósági mellényt.',
      'Helyezze el az elakadásjelző háromszöget a jármű mögött, biztonságos távolságban.',
      'Hívjon minket a +36 70 600 2511 számon és adja meg a pontos helyszínt vagy GPS koordinátákat.',
    ],
  },
  {
    id: 'autosszallitas',
    icon: Truck,
    title: 'AUTÓSZÁLLÍTÁS',
    shortDesc: 'Személyautók, SUV-k, veterán járművek biztonságos szállítása belföldön és külföldön egyedi határidőkkel.',
    items: [
      'Belföldi autószállítás',
      'Nemzetközi autószállítás',
      'Új autók és luxusautók szállítása',
    ],
    detailedText: 'Személyautók, SUV-k, veterán autók vagy kisteherautók biztonságos szállítása belföldön és külföldön egyaránt. Célunk a sérülésmentes szállítás, amit a legmagasabb minőségű rögzítőhevederek és a hidraulikusan billenő trélerünk garantál.',
    features: [
      {
        title: 'Belföldi & Nemzetközi fuvarok',
        desc: 'Akár külföldről történő autóbehozatal, akár belföldi szállítás megbízható, pontos határidőkkel.',
      },
      {
        title: 'Sportautók karcmentes szállítása',
        desc: 'A NIEWIADOW Jupiter tréler extra alacsony rámpaszögének köszönhetően a legkisebb hasmagasságú autók is felrakhatók.',
      },
      {
        title: 'Teljes körű rakománybiztosítás',
        desc: 'Szállított járműveinkre teljes körű rakománybiztosítást (CMR) vállalunk a szállítás teljes ideje alatt.',
      },
    ],
    checklistTitle: 'AZ AUTÓSZÁLLÍTÁS MENETE NÁLUNK:',
    checklist: [
      'Pontos időpont és helyszín egyeztetése az ügyféllel.',
      'A szállítandó jármű fizikai állapotának közös dokumentálása a felrakás előtt.',
      'Precíz hevederes rögzítés mind a 4 keréknél a tréleren a sérülésmentes út érdekében.',
    ],
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(prev => prev === index ? null : index);
    
    // Smooth scroll down to details after state change
    setTimeout(() => {
      const detailsEl = document.getElementById('service-details-panel');
      if (detailsEl) {
        detailsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 150);
  };

  return (
    <section className="services page-fade-in" id="services">
      <div className="container">
        <h2 className="section-title">
          SZOLGÁLTATÁSAINK <span className="gold-text">ÉS MENTÉS</span>
        </h2>
        <p className="section-subtitle">
          Prémium autómentés és szállítás Land Rover Discovery 3 vontatóval. Kattintson a kártyákra a részletes információkért!
        </p>

        {/* Services Grid */}
        <div className="services__grid">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            const isSelected = activeCard === index;
            
            return (
              <div
                className={`services__card scroll-animate ${isSelected ? 'services__card--active' : ''}`}
                key={service.id}
                onClick={() => handleCardClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(index);
                  }
                }}
              >
                <div className="services__card-click-hint">
                  <Eye size={14} />
                  Kattintson a részletekért
                </div>

                <div className="services__icon-wrapper">
                  <Icon size={36} strokeWidth={1.8} />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                
                <p className="services__card-short-desc">
                  {service.shortDesc}
                </p>

                <div className="services__card-divider" />

                <ul className="services__list">
                  {service.items.map((item, i) => (
                    <li className="services__list-item" key={i}>
                      <CheckCircle size={18} strokeWidth={2.2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button className={`btn ${isSelected ? 'btn-primary' : 'btn-outline'} services__card-action-btn`}>
                  {isSelected ? 'Részletek bezárása' : 'Részletes információk'}
                  <ChevronRight size={16} className="services__arrow-icon" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Detailed Panel */}
        {activeCard !== null && (
          <div className="services__details-panel glass scroll-animate" id="service-details-panel">
            <button 
              className="services__details-close" 
              onClick={() => setActiveCard(null)}
              aria-label="Részletek bezárása"
            >
              <X size={20} />
            </button>

            <div className="services__details-header">
              <div className="services__details-badge">RÉSZLETES TECHNIKAI INFORMÁCIÓ</div>
              <h3 className="services__details-title gold-text">
                {SERVICES_DATA[activeCard].title} SZOLGÁLTATÁS
              </h3>
            </div>

            <p className="services__details-intro">
              {SERVICES_DATA[activeCard].detailedText}
            </p>

            <div className="services__details-content-grid">
              {/* Left Column: Key Features */}
              <div className="services__details-features-col">
                <h4 className="services__details-section-title">
                  <Shield size={18} className="gold-text" />
                  Kiemelt képességek & Felszereltség
                </h4>
                <div className="services__details-features-list">
                  {SERVICES_DATA[activeCard].features.map((feature, i) => (
                    <div className="services__details-feature-card" key={i}>
                      <h5>{feature.title}</h5>
                      <p>{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Steps / Emergency Checklist */}
              <div className="services__details-checklist-col">
                <h4 className="services__details-section-title">
                  <HelpCircle size={18} className="gold-text" />
                  {SERVICES_DATA[activeCard].checklistTitle}
                </h4>
                <ul className="services__details-check-list">
                  {SERVICES_DATA[activeCard].checklist.map((step, i) => (
                    <li key={i} className="services__details-check-item">
                      <span className="services__details-check-number">{i + 1}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ul>

                {/* Direct Emergency Call */}
                <div className="services__details-call-box">
                  <p>Azonnali indításhoz vagy egyeztetéshez:</p>
                  <a href="tel:+36706002511" className="btn btn-primary services__details-call-btn pulse">
                    <Phone size={18} />
                    HÍVÁS MOST: +36 70 600 2511
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
