import React from 'react'
import { FaStar, FaHeart, FaThumbsUp } from 'react-icons/fa'
import mountainBg from '../assets/why_bg.jpg'
import './Why_us.css'

const features = [
  {
    icon: <FaStar size={28} />,
    title: 'Handpicked Hotels',
    desc: 'Experience the finest stays with our carefully selected hotels, ensuring comfort and luxury at every destination.',
    color: '#dc2626',
    link: '#'
  },
  {
    icon: <FaHeart size={28} />,
    title: 'World Class Service',
    desc: 'Our dedicated team provides personalized service, making your journey smooth, memorable, and truly special.',
    color: '#dc2626',
    link: '#'
  },
  {
    icon: <FaThumbsUp size={28} />,
    title: 'Best Price Guarantee',
    desc: 'Enjoy unbeatable prices and exclusive deals, so you can travel more and worry less about your budget.',
    color: '#dc2626',
    link: '#'
  }
]

const Why_us = () => {
  return (
    <section
      className="whyus"
      style={{
        backgroundImage: `url(${mountainBg})`
      }}
      id="whyus"
    >
      <h2 className="whyus__heading">WHY CHOOSE US</h2>
      <div className="whyus__cards">
        {features.map((f, i) => (
          <div className="whyus__card" key={i}>
            <div className="whyus__icon-container" style={{ background: f.color }}>
              {React.cloneElement(f.icon, { color: '#fff' })}
            </div>
            <div className="whyus__card-title">{f.title}</div>
            <div className="whyus__card-desc">{f.desc}</div>
            {/* <a href={f.link} className="whyus__learn-more">
              learn more
            </a> */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Why_us