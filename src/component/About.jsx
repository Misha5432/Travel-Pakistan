import React from 'react'
import { motion } from "framer-motion"
import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.h2
        className="about-heading"
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 80, damping: 18, duration: 0.7 }}
      >
        About Travel Pakistan
      </motion.h2>
      <motion.p
        className="about-para"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 60, damping: 16, duration: 0.8, delay: 0.1 }}
      >
        At Travel Pakistan, our mission is to turn your journeys into unforgettable memories. We are passionate about showcasing the breathtaking landscapes, vibrant cultures, and hidden gems of Pakistan. Whether you seek adventure, relaxation, or discovery, our dedicated team crafts seamless and personalized travel experiences that inspire and delight every traveler.
      </motion.p>
      <motion.div
        className="about-quote"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 60, damping: 14, duration: 0.7, delay: 0.3 }}
      >
        "Life is meant for good friends and great adventures. Let Travel Pakistan be your guide to the extraordinary!"
      </motion.div>
    </section>
  )
}

export default About