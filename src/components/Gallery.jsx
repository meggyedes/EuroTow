import React, { useState, useCallback, useEffect, useRef } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Eye, 
  Maximize2, Minimize2, ZoomIn, ZoomOut, 
  Play, Pause, Download 
} from 'lucide-react';
import './Gallery.css';

const GALLERY_ITEMS = [
  {
    id: 1,
    src: '/images/towing-landrover.jpg',
    title: 'Land Rover Szállítás Speciális Tréleren',
    category: 'autosszallitas',
    categoryLabel: 'Autószállítás',
    desc: 'Egy másik prémium Land Rover Discovery szállítása hidraulikus, alacsony dőlésszögű kéttengelyes trélerünkön.',
  },
  {
    id: 2,
    src: '/images/towing-sunset.jpg',
    title: 'Személyautó Szállítás Naplementében',
    category: 'autosszallitas',
    categoryLabel: 'Autószállítás',
    desc: 'Műszakilag meghibásodott Opel kombi biztonságos hazaszállítása az autópályáról éjszakába nyúlóan, professzionálisan rögzítve.',
  },
  {
    id: 3,
    src: '/images/towing-blue-polo.jpg',
    title: 'Műszaki Hibás Jármű Szállítása',
    category: 'automentes',
    categoryLabel: 'Autómentés',
    desc: 'Megbízható közúti autómentés a helyszínről, egy műszaki hibás VW Polo szakszerű elszállítása vidéki környezetben.',
  },
  {
    id: 4,
    src: '/images/towing-blue-opel.jpg',
    title: 'Mozgásképtelen Jármű Mentése',
    category: 'automentes',
    categoryLabel: 'Autómentés',
    desc: 'Műszakilag teljesen mozgásképtelen jármű szakszerű felrakodása és elszállítása lakótelepi övezetben.',
  },
  {
    id: 5,
    src: '/images/trailer-ramps.jpg',
    title: 'Előkészített Autómentő Tréler',
    category: 'automentes',
    categoryLabel: 'Autómentés',
    desc: 'Bevetésre kész, hidraulikusan billenthető, kifejezetten alacsony hasmagasságú autókhoz is alkalmas trailerünk leengedett rámpákkal.',
  },
  {
    id: 6,
    src: '/images/towing-loading.png',
    title: 'Szakszerű és Biztonságos Rögzítés',
    category: 'segelynyujtas',
    categoryLabel: 'Közúti Segély',
    desc: 'Minden egyes kerék hevederes rögzítése a tréleren a szállítás megkezdése előtt. Nálunk a sérülésmentes szállítás és a biztonság az első.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Összes kép' },
  { id: 'automentes', label: 'Autómentés' },
  { id: 'autosszallitas', label: 'Autószállítás' },
  { id: 'segelynyujtas', label: 'Közúti Segély' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  // --- Lightgallery Premium Features ---
  const [zoomScale, setZoomScale] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const lightboxRef = useRef(null);

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setZoomScale(1);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoomScale(1);
    setIsPlaying(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setIsFullscreen(false);
  };

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    setZoomScale(1);
  }, [filteredItems]);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    setZoomScale(1);
  }, [filteredItems]);

  // Autoplay Slideshow Effect
  useEffect(() => {
    if (!isPlaying || lightboxIndex === null) return;
    const timer = setInterval(() => {
      nextPhoto();
    }, 3000);
    return () => clearInterval(timer);
  }, [isPlaying, lightboxIndex, nextPhoto]);

  // Handle Fullscreen Toggle
  const toggleFullscreen = () => {
    if (!lightboxRef.current) return;

    if (!document.fullscreenElement) {
      lightboxRef.current.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {});
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
    }
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') { e.preventDefault(); nextPhoto(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prevPhoto(); }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextPhoto, prevPhoto]);

  // Listen to native fullscreen exit (e.g. via ESC key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <section className="gallery page-fade-in" id="gallery">
      <div className="container">
        <h2 className="section-title">
          MUNKA közben: <span className="gold-text">GALÉRIA</span>
        </h2>
        <p className="section-subtitle">
          Nézze meg képeinket legutóbbi sikeres mentéseinkről és szállításainkról! A minőség nálunk garantált.
        </p>

        {/* Category Filters */}
        <div className="gallery__filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`gallery__filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery__grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery__item scroll-animate visible"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(index);
                }
              }}
            >
              <div className="gallery__image-wrapper">
                <img
                  src={item.src}
                  alt={item.title}
                  className="gallery__image"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="gallery__overlay">
                  <div className="gallery__overlay-icon">
                    <Eye size={24} className="gold-text" />
                  </div>
                  <span className="gallery__item-category">{item.categoryLabel}</span>
                  <h3 className="gallery__item-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Lightgallery-style Lightbox Modal */}
        {lightboxIndex !== null && (
          <div 
            className="gallery__lightbox" 
            ref={lightboxRef}
            onClick={closeLightbox}
          >
            {/* Top Bar Controls */}
            <div className="gallery__lightbox-topbar" onClick={(e) => e.stopPropagation()}>
              {/* Image Counter */}
              <div className="gallery__lightbox-counter">
                {lightboxIndex + 1} / {filteredItems.length}
              </div>

              {/* Action Buttons */}
              <div className="gallery__lightbox-actions">
                {/* Play/Pause Autoplay */}
                <button 
                  className={`gallery__action-btn ${isPlaying ? 'active' : ''}`}
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? "Diavetítés szüneteltetése" : "Diavetítés indítása"}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>

                {/* Zoom In */}
                <button 
                  className="gallery__action-btn"
                  onClick={() => setZoomScale(prev => Math.min(prev + 0.25, 2))}
                  title="Nagyítás"
                  disabled={zoomScale >= 2}
                >
                  <ZoomIn size={20} />
                </button>

                {/* Zoom Out */}
                <button 
                  className="gallery__action-btn"
                  onClick={() => setZoomScale(prev => Math.max(prev - 0.25, 0.75))}
                  title="Kicsinyítés"
                  disabled={zoomScale <= 0.75}
                >
                  <ZoomOut size={20} />
                </button>

                {/* Fullscreen Toggle */}
                <button 
                  className="gallery__action-btn"
                  onClick={toggleFullscreen}
                  title={isFullscreen ? "Kilépés a teljes képernyőből" : "Teljes képernyő"}
                >
                  {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>

                {/* Direct Download */}
                <a 
                  href={filteredItems[lightboxIndex].src}
                  download={`automento-galeria-${filteredItems[lightboxIndex].id}.jpg`}
                  className="gallery__action-btn"
                  title="Kép letöltése"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={20} />
                </a>

                {/* Divider */}
                <span className="gallery__actions-divider" />

                {/* Close Button */}
                <button 
                  className="gallery__action-btn gallery__action-btn--close" 
                  onClick={closeLightbox}
                  title="Galéria bezárása"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Left Navigation Arrow */}
            <button 
              className="gallery__lightbox-arrow gallery__lightbox-arrow--left" 
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              aria-label="Előző kép"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Central Content */}
            <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="gallery__lightbox-image-wrapper">
                <img 
                  src={filteredItems[lightboxIndex].src} 
                  alt={filteredItems[lightboxIndex].title} 
                  className="gallery__lightbox-image" 
                  style={{ transform: `scale(${zoomScale})`, transition: 'transform 0.2s ease-out' }}
                />
              </div>
              
              <div className="gallery__lightbox-info glass">
                <span className="gallery__lightbox-category gold-text">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <h3 className="gallery__lightbox-title">{filteredItems[lightboxIndex].title}</h3>
                <p className="gallery__lightbox-desc">{filteredItems[lightboxIndex].desc}</p>
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <button 
              className="gallery__lightbox-arrow gallery__lightbox-arrow--right" 
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              aria-label="Következő kép"
            >
              <ChevronRight size={36} />
            </button>

            {/* Bottom Thumbnail Bar */}
            <div className="gallery__lightbox-bottombar" onClick={(e) => e.stopPropagation()}>
              <div className="gallery__thumbnails-track">
                {filteredItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`gallery__thumb-wrapper ${idx === lightboxIndex ? 'active' : ''}`}
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="gallery__thumb-img" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
