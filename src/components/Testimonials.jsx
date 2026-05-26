import React, { useState } from 'react';
import { Star, MessageSquare, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS_DATA = [
  {
    name: 'Kovács Péter',
    role: 'BMW E60 tulajdonos',
    text: 'Az autóm lerobbant az autópályán éjszaka. 25 percen belül kiértek a Land Rover-rel és rendkívül szakszerűen, sérülésmentesen szállították le a szervizbe. Igazi prémium szolgáltatás korrekt áron!',
    rating: 5,
    date: '2026.05.12.',
    avatarInitials: 'KP',
    avatarColor: '#D4A73A',
  },
  {
    name: 'Nagy Andrea',
    role: 'Opel Astra tulajdonos',
    text: 'A tesco parkolóban ragadtam lemerült akkumulátorral. Nagyon gyorsan kiérkezett a szakember, bikázással azonnal beindította a járművet és még a generátort is ellenőrizte. Nagyon hálás vagyok!',
    rating: 5,
    date: '2026.05.08.',
    avatarInitials: 'NA',
    avatarColor: '#E8C45A',
  },
  {
    name: 'Szabó Gábor',
    role: 'Land Rover Discovery tulajdonos',
    text: 'A Discovery 3-as vontató bámulatos erőt képvisel. Két tonnás SUV-mat szállították vele nehéz terepviszonyok között is teljesen rezzenéstelenül. Csak ajánlani tudom a csapatot!',
    rating: 5,
    date: '2026.04.29.',
    avatarInitials: 'SZG',
    avatarColor: '#C9952B',
  },
  {
    name: 'Tóth Eszter',
    role: 'Audi Q5 tulajdonos',
    text: 'Defektet kaptam és nem volt nálam pótkerék. A telefonhívás után szinte azonnal ott voltak, segítettek a kerékcserében és rendkívül udvariasan bántak velem. 5 csillagos hozzáállás!',
    rating: 5,
    date: '2026.04.15.',
    avatarInitials: 'TE',
    avatarColor: '#A87D1F',
  },
];

export default function Testimonials() {
  const [filterRating, setFilterRating] = useState('all');

  const filteredReviews = filterRating === 'all'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((r) => r.rating === parseInt(filterRating));

  const averageRating = 5.0;

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title scroll-animate">
          ÜGYFELEINK <span className="gold-text">VÉLEMÉNYE</span>
        </h2>
        <p className="section-subtitle scroll-animate">
          Nézze meg, mit mondanak rólunk azok az autósok, akiknek gyors és szakszerű mentésre volt szükségük.
        </p>

        {/* Review Dashboard Widget */}
        <div className="testimonials__dashboard glass scroll-animate">
          <div className="testimonials__db-grid">
            {/* Main Score */}
            <div className="testimonials__db-score-col">
              <span className="testimonials__db-rating-num">{averageRating.toFixed(1)}</span>
              <div className="testimonials__db-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={22} fill="var(--primary)" color="var(--primary)" />
                ))}
              </div>
              <span className="testimonials__db-based-on">
                100% elégedettségi ráta
              </span>
            </div>

            {/* Stats Bars */}
            <div className="testimonials__db-stats-col">
              <div className="testimonials__stat-row">
                <span className="testimonials__stat-label">5 csillag</span>
                <div className="testimonials__stat-bar-bg">
                  <div className="testimonials__stat-bar-fill" style={{ width: '100%' }} />
                </div>
                <span className="testimonials__stat-percent">100%</span>
              </div>
              <div className="testimonials__stat-row">
                <span className="testimonials__stat-label">4 csillag</span>
                <div className="testimonials__stat-bar-bg">
                  <div className="testimonials__stat-bar-fill" style={{ width: '0%' }} />
                </div>
                <span className="testimonials__stat-percent">0%</span>
              </div>
              <div className="testimonials__stat-row">
                <span className="testimonials__stat-label">3 csillag</span>
                <div className="testimonials__stat-bar-bg">
                  <div className="testimonials__stat-bar-fill" style={{ width: '0%' }} />
                </div>
                <span className="testimonials__stat-percent">0%</span>
              </div>
            </div>

            {/* Verified Seal */}
            <div className="testimonials__db-badge-col">
              <div className="testimonials__verified-seal">
                <ShieldCheck size={36} className="gold-text" />
                <div className="testimonials__verified-text">
                  <h4>VERIFIKÁLT FEEDBACK</h4>
                  <p>Minden vélemény valós ügyfelektől származik.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="testimonials__grid">
          {filteredReviews.map((review, index) => (
            <div
              key={index}
              className={`testimonials__card-premium scroll-animate delay-${index + 1}`}
            >
              {/* Card Header */}
              <div className="testimonials__card-header">
                <div 
                  className="testimonials__avatar"
                  style={{ backgroundColor: review.avatarColor }}
                >
                  {review.avatarInitials}
                </div>
                <div className="testimonials__author-info">
                  <h4 className="testimonials__author-name">{review.name}</h4>
                  <span className="testimonials__author-role">{review.role}</span>
                </div>
                <div className="testimonials__verified-badge">
                  <ShieldCheck size={14} />
                  <span>Verifikált</span>
                </div>
              </div>

              {/* Rating & Date */}
              <div className="testimonials__card-rating-row">
                <div className="testimonials__card-stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                  ))}
                </div>
                <span className="testimonials__card-date">{review.date}</span>
              </div>

              {/* Text */}
              <p className="testimonials__card-text">
                "{review.text}"
              </p>

              {/* Footer Badge */}
              <div className="testimonials__card-footer">
                <Heart size={14} className="testimonials__heart-icon" />
                <span>Ajánlja a szolgáltatást</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="testimonials__cta-row scroll-animate">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline testimonials__google-btn"
          >
            <span>Összes értékelés megtekintése Google-ön</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
