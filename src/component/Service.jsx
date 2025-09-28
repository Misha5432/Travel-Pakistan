import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import intlImg from '../assets/international_tour.jpg';
import roadImg from '../assets/road_trip.jpg';
import airImg from '../assets/by_air_trip.jpg';
import corpImg from '../assets/corporate_trip.jpg';
import customImg from '../assets/customize_trip.jpg';

const services = [
  {
    title: "International Tours",
    img: intlImg,
    desc: "Explore the world with our expertly planned international tours."
  },
  {
    title: "Road Trips",
    img: roadImg,
    desc: "Hit the road for adventure and scenic journeys across the country."
  },
  {
    title: "By Air Trips",
    img: airImg,
    desc: "Fly in comfort and style to your dream destinations."
  },
  {
    title: "Corporate Tours",
    img: corpImg,
    desc: "Professional, seamless travel solutions for your business needs."
  },
  {
    title: "Customize Trips",
    img: customImg,
    desc: "Tailor your travel experience to your unique preferences."
  }
];

const Service = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.service-card');
      if (!card) return;
      const cardWidth = card.offsetWidth + 24; // card width + gap
      sliderRef.current.scrollBy({
        left: direction === 'right' ? cardWidth : -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="service-section" id="service">
      <h2 className="service-heading">Tour Services We Offer</h2>
      <p className="service-subheading">
        Discover a variety of travel experiences, from international adventures to custom journeys, all designed for your comfort and excitement.
      </p>
      <div className="service-slider-container">
        <button className="slider-arrow left" onClick={() => scroll('left')} aria-label="Previous">
          &#8592;
        </button>
        <div className="service-slider" ref={sliderRef}>
          {services.map((service, idx) => {
            const cardContent = (
              <div className="service-card">
                <img src={service.img} alt={service.title} className="service-img" />
                <div className="service-title">{service.title}</div>
                <div className="service-desc">{service.desc}</div>
              </div>
            );

            return service.title === 'International Tours' ? (
              <Link 
                to="/international-tours" 
                className="service-card-link" 
                key={idx}
                onClick={(e) => e.stopPropagation()}
              >
                {cardContent}
              </Link>
            ) : (
              <div key={idx}>
                {cardContent}
              </div>
            );
          })}
        </div>
        <button className="slider-arrow right" onClick={() => scroll('right')} aria-label="Next">
          &#8594;
        </button>
      </div>
    </section>
  )
}

export default Service