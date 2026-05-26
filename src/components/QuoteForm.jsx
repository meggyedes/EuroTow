import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, User, Car, MessageSquare, Send } from 'lucide-react';
import './QuoteForm.css';

const contactItems = [
  { icon: Phone, text: '+36 70 600 2511' },
  { icon: Mail, text: 'soosdanielmarcell@gmail.com' },
  { icon: MapPin, text: 'Biatorbány és környéke' },
  { icon: Clock, text: '0-24h, Hétfő-Vasárnap' },
];

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'A név megadása kötelező';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'A telefonszám megadása kötelező';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', phone: '', vehicle: '', location: '', message: '' });
    setErrors({});
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="quote-form" id="contact">
      <div className="container">
        <div className="quote-form__grid scroll-animate">
          {/* Left: Contact Info */}
          <div className="quote-form__info">
            <h2 className="quote-form__title gold-text">GYORS AJÁNLATKÉRÉS</h2>
            <p className="quote-form__subtitle">
              Töltse ki az űrlapot és hamarosan felvesszük Önnel a kapcsolatot!
            </p>

            <div className="quote-form__contact-list">
              {contactItems.map(({ icon: Icon, text }, index) => (
                <div className="quote-form__contact-item" key={index}>
                  <div className="quote-form__contact-icon">
                    <Icon size={22} />
                  </div>
                  <span className="quote-form__contact-text">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="quote-form__card">
            <form className="quote-form__form" onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className={`quote-form__field ${errors.name ? 'quote-form__field--error' : ''}`}>
                <div className="quote-form__input-icon">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Név *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="quote-form__input"
                />
                {errors.name && <span className="quote-form__error">{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className={`quote-form__field ${errors.phone ? 'quote-form__field--error' : ''}`}>
                <div className="quote-form__input-icon">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefonszám *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="quote-form__input"
                />
                {errors.phone && <span className="quote-form__error">{errors.phone}</span>}
              </div>

              {/* Vehicle */}
              <div className="quote-form__field">
                <div className="quote-form__input-icon">
                  <Car size={18} />
                </div>
                <input
                  type="text"
                  name="vehicle"
                  placeholder="Jármű típusa"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="quote-form__input"
                />
              </div>

              {/* Location */}
              <div className="quote-form__field">
                <div className="quote-form__input-icon">
                  <MapPin size={18} />
                </div>
                <input
                  type="text"
                  name="location"
                  placeholder="Helyszín"
                  value={formData.location}
                  onChange={handleChange}
                  className="quote-form__input"
                />
              </div>

              {/* Message */}
              <div className="quote-form__field">
                <div className="quote-form__input-icon quote-form__input-icon--textarea">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  name="message"
                  placeholder="Üzenet"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="quote-form__input quote-form__textarea"
                />
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="quote-form__success">
                  ✓ Köszönjük! Az ajánlatkérését megkaptuk, hamarosan felvesszük Önnel a kapcsolatot.
                </div>
              )}

              {/* Submit */}
              <button type="submit" className="btn btn-primary quote-form__submit">
                AJÁNLATKÉRÉS
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
