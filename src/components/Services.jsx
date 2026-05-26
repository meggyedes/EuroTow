import React from 'react';
import { Car, Truck, CheckCircle } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Car,
    title: 'AUTÓMENTÉS',
    items: [
      'Sérült, műszaki hibás autók',
      'Baleseti mentés',
      'Elakadt járművek',
    ],
  },
  {
    icon: Truck,
    title: 'AUTÓSZÁLLÍTÁS',
    items: [
      'Belföldi szállítás',
      'Nemzetközi szállítás',
      'Új autók szállítása',
    ],
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">
          <span className="gold-text">SZOLGÁLTATÁSAINK</span>
        </h2>
        <p className="section-subtitle">
          Prémium autómentés és szállítás Land Rover Discovery 3 vontatóval
        </p>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                className={`services__card scroll-animate delay-${index + 1}`}
                key={index}
              >
                <div className="services__icon-wrapper">
                  <Icon size={36} strokeWidth={1.8} />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <ul className="services__list">
                  {service.items.map((item, i) => (
                    <li className="services__list-item" key={i}>
                      <CheckCircle size={18} strokeWidth={2.2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
