import React from 'react';
import { Zap, ShieldCheck, BadgeDollarSign, PhoneCall } from 'lucide-react';
import './WhyUs.css';

const features = [
  {
    icon: Zap,
    title: 'GYORS KIÉRKEZÉS',
    description: '15-30 perc',
    delay: 'delay-1',
  },
  {
    icon: ShieldCheck,
    title: 'BIZTONSÁGOS SZÁLLÍTÁS',
    description: 'Profi felszerelés',
    delay: 'delay-2',
  },
  {
    icon: BadgeDollarSign,
    title: 'KEDVEZŐ ÁRAK',
    description: 'Rejtett költségek nélkül',
    delay: 'delay-3',
  },
  {
    icon: PhoneCall,
    title: '24 ÓRÁS ÜGYFÉLSZOLGÁLAT',
    description: 'Nonstop elérhetőség',
    delay: 'delay-4',
  },
];

const WhyUs = () => {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <h2 className="section-title">
          MIÉRT <span className="gold-text">MINKET</span> VÁLASSZON?
        </h2>

        <div className="why-us__grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                className={`why-us__card scroll-animate ${feature.delay}`}
                key={index}
              >
                <div className="why-us__icon-wrapper">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="why-us__card-title">{feature.title}</h3>
                <p className="why-us__card-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
