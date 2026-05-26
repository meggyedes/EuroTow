import React from 'react';
import { BatteryCharging, CircleDot, Fuel, KeyRound } from 'lucide-react';
import './RoadAssistance.css';

const services = [
  {
    icon: BatteryCharging,
    title: 'Bikázás',
    description: 'Akkumulátor lemerülés esetén gyors segítség',
    delay: 'delay-1',
  },
  {
    icon: CircleDot,
    title: 'Kerékcsere',
    description: 'Defektes kerék helyszíni cseréje',
    delay: 'delay-2',
  },
  {
    icon: Fuel,
    title: 'Üzemanyagpótlás',
    description: 'Ha kifogyott az üzemanyag, mi hozunk',
    delay: 'delay-3',
  },
  {
    icon: KeyRound,
    title: 'Zárnyitás',
    description: 'Autóba zárt kulcs? Megoldjuk!',
    delay: 'delay-4',
  },
];

const RoadAssistance = () => {
  return (
    <section id="road-assistance" className="road-assistance">
      <div className="container">
        <h2 className="section-title">
          KÖZÚTI <span className="gold-text">SEGÍTSÉGNYÚJTÁS</span>
        </h2>
        <p className="section-subtitle">
          Bármilyen helyzetben számíthat ránk az út szélén
        </p>

        <div className="road-assistance__grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`road-assistance__card scroll-animate ${service.delay}`}
              >
                <div className="road-assistance__icon-wrapper">
                  <IconComponent
                    className="road-assistance__icon"
                    size={32}
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="road-assistance__card-title">{service.title}</h3>
                <p className="road-assistance__card-desc">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadAssistance;
