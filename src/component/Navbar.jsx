import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', path: '#home' },
  { label: 'Service', path: '#service' },
  { label: 'About', path: '#about' },
  { label: 'Reviews', path: '#reviews' },
  { label: 'Contact', path: '#contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Handle scroll for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state - show solid background after scrolling past 100px
      setScrolled(window.scrollY > 100);
      
      // Update active link based on scroll position
      const scrollPosition = window.scrollY + 100;
      
      // Get all sections
      const sections = ['home', 'service', 'about', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling for navigation links
  const handleNavClick = (e, path) => {
    e.preventDefault();
    setOpen(false);
    
    if (path.startsWith('#')) {
      const id = path.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        const yOffset = -80; // Adjust for fixed header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({ top: y, behavior: 'smooth' });
        
        // Update URL without causing a page reload
        window.history.pushState(null, '', path);
        setActiveLink(path);
      }
    } else {
      // For non-hash links
      window.location.href = path;
    }
  };

  return (
    <nav
      className={`navbar-custom${scrolled ? ' navbar--scrolled' : ''}`}
      aria-label="Main navigation"
      style={{
        background: scrolled ? 'rgba(26, 32, 44, 0.95)' : 'linear-gradient(rgba(0, 0, 0, 0.5), transparent)'
      }}
    >
      <div className="navbar__container">
        <div className="navbar__brand">
          <img src={logo} alt="Logo" className="navbar__logo" />
          <span className="navbar__company">Travel Pakistan</span>
        </div>
        
        <div className="navbar__nav">
          <ul className={`navbar__links${open ? ' open' : ''}`}>
            {NAV_LINKS.map((link) => {
              const isActive = activeLink === link.path || 
                             (location.pathname === link.path && !link.path.startsWith('#')) ||
                             (link.path === '#home' && location.pathname === '/');
                            
              return (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`navbar__link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            className={`navbar__toggle${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="navbar__links"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





















