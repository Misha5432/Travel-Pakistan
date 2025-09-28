import React, { useState } from 'react';
import './Footer.css';

const LINKS = [
  { label: 'Home', href: '#home', section: 'home' },
  { label: 'Services', href: '#service', section: 'service' },
  { label: 'About', href: '#about', section: 'about' },
  { label: 'Contact', href: '#contact', section: 'contact' },
];

const INSTAGRAM_PLACEHOLDERS = Array.from({ length: 6 });

const Footer = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState({ type: '', text: '' });

  // Smooth scroll to section
  const handleNavClick = (e, section) => {
    e.preventDefault();
    const el = document.getElementById(section);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Newsletter subscription handler
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Email validation regex
    const valid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email.trim()) {
      setMsg({ type: 'error', text: 'Please enter your email.' });
      return;
    }
    if (!valid.test(email)) {
      setMsg({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    // Store in localStorage
    const prev = JSON.parse(localStorage.getItem('newsletterEmails') || '[]');
    if (prev.includes(email)) {
      setMsg({ type: 'error', text: 'You have already subscribed.' });
      return;
    }
    localStorage.setItem('newsletterEmails', JSON.stringify([...prev, email]));
    setMsg({ type: 'success', text: 'Thank you for subscribing!' });
    setEmail('');
    setTimeout(() => setMsg({ type: '', text: '' }), 3000);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          {/* Brand Info */}
          <div className="footer__section footer__brand">
            <h2 className="footer__title">Travel Pakistan</h2>
            <p className="footer__tagline">
              Discover the breathtaking beauty and rich culture of Pakistan. Your perfect travel experience awaits.
            </p>
          </div>
          {/* Useful Links */}
          <nav className="footer__section footer__links" aria-label="Useful Links">
            <h3 className="footer__heading">Useful Links</h3>
            <ul>
              {LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={e => handleNavClick(e, link.section)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
      
          {/* Newsletter */}
          <div className="footer__section footer__newsletter">
            <h3 className="footer__heading">Newsletter</h3>
            <p className="footer__newsletter-desc">
              Subscribe to get the latest travel updates and offers.
            </p>
            <form className="footer__form" onSubmit={handleSubscribe} autoComplete="off">
              <input
                type="email"
                className="footer__input"
                placeholder="Your email"
                aria-label="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button className="footer__btn" type="submit" aria-label="Subscribe">
                Subscribe
              </button>
            </form>
            {msg.text && (
              <div
                className={`footer__msg footer__msg--${msg.type}`}
                role={msg.type === 'error' ? 'alert' : 'status'}
                aria-live="polite"
              >
                {msg.text}
              </div>
            )}
          </div>
        </div>
        {/* Bottom bar */}
        <div className="footer__bottom">
          <div>
            &copy; {new Date().getFullYear()} Travel Pakistan. All rights reserved.
          </div>
          <div className="footer__legal">
            <a href="#privacy" className="footer__legal-link">Privacy Policy</a>
            <span aria-hidden="true">|</span>
            <a href="#terms" className="footer__legal-link">Terms of Service</a>
            <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
          &#8679;
        </button>
          </div>
        </div>
      </footer>
      {/* Scroll to top button */}
        {/* <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
          &#8679;
        </button> */}
      </>
    );
  };
  
  export default Footer;