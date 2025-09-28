import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import './InternationalTours.css';

const InternationalTours = () => {
  // Tour packages data
  const tourPackages = [
    {
      id: 1,
      title: "5 Days Trip",
      destination: "Baku, Azerbaijan",
      duration: "5 Days",
      image: "https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFrdSUyMGF6ZXJiYWlqYW58ZW58MHx8MHx8fDA%3D",
      price: "$899",
      rating: 4.8
    },
    {
      id: 2,
      title: "7 Days Trip",
      destination: "Malaysia & Thailand",
      duration: "7 Days",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$1,299",
      rating: 4.9
    },
    {
      id: 3,
      title: "21 Days Trip",
      destination: "Umrah Package",
      duration: "21 Days",
      image: "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VW1yYWh8ZW58MHx8MHx8fDA%3D",
      price: "$2,499",
      rating: 5.0
    },
    {
      id: 4,
      title: "10 Days Trip",
      destination: "Turkey",
      duration: "10 Days",
      image: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VHVya2V5fGVufDB8fDB8fHww",
      price: "$1,799",
      rating: 4.7
    },
    {
      id: 5,
      title: "14 Days Trip",
      destination: "Europe Explorer",
      duration: "14 Days",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$3,299",
      rating: 4.8
    },
    {
      id: 6,
      title: "12 Days Trip",
      destination: "Japan Adventure",
      duration: "12 Days",
      image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SmFwYW58ZW58MHx8MHx8fDA%3D",
      price: "$2,899",
      rating: 4.9
    },
    {
      id: 7,
      title: "8 Days Trip",
      destination: "Dubai & UAE",
      duration: "8 Days",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$1,599",
      rating: 4.6
    },
    {
      id: 8,
      title: "15 Days Trip",
      destination: "South Africa Safari",
      duration: "15 Days",
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$3,799",
      rating: 4.8
    }
  ];

  // Top destinations data
  const topDestinations = [
    { name: "Saudi Arabia", image: "https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2F1ZGklMjBBcmFiaWF8ZW58MHx8MHx8fDA%3D" },
    { name: "Azerbaijan", image: "https://images.unsplash.com/photo-1607207685852-51dd32267d26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QXplcmJhaWphbnxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Turkey", image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHVya2V5fGVufDB8fDB8fHww" },
    { name: "Maldives", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
    { name: "Thailand", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
    { name: "Indonesia", image: "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW5kb25lc2lhfGVufDB8fDB8fHww" },
    { name: "Malaysia", image: "https://plus.unsplash.com/premium_photo-1700955569542-735a654503bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWFsYXlzaWF8ZW58MHx8MHx8fDA%3D" },
    { name: "Vietnam", image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div className="international-tours">
      <main>
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">International Tours</h1>
            <p className="hero-subtitle">
              Discover the world's most breathtaking destinations with our expertly curated international tours. Experience diverse cultures, stunning landscapes, and unforgettable adventures.
            </p>
          </div>
        </div>

        {/* Explore the World Section */}
        <section className="explore-section">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">Explore the World with Us</h2>
              <p className="section-description">
                Hand-picked itineraries, great prices, and seamless experiences.
              </p>
            </div>

            <div className="tours-grid">
              {tourPackages.map((pkg) => (
                <div key={pkg.id} className="tour-card">
                  <img src={pkg.image} alt={pkg.destination} className="tour-image" />
                  <div className="tour-content">
                    <h3 className="tour-title">{pkg.title}</h3>
                    <div className="tour-meta">
                      <span className="tour-destination"><MapPin size={16} /> {pkg.destination}</span>
                      <span className="tour-duration"><Clock size={16} /> {pkg.duration}</span>
                    </div>
                    <div className="tour-bottom">
                      <span className="tour-price">{pkg.price}</span>
                      <span className="tour-rating"><Star size={16} /> {pkg.rating}</span>
                    </div>
                    <button className="details-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Destinations Section */}
        <section className="destinations-section">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">Top Destinations</h2>
              <p className="section-description">Explore our most loved travel spots around the world</p>
            </div>

            <div className="destinations-grid">
              {topDestinations.map((destination, index) => (
                <div key={index} className="destination-card">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="destination-image"
                  />
                  <div className="destination-overlay"></div>
                  <div className="destination-content">
                    <h3 className="destination-name">{destination.name}</h3>
                    <button className="explore-btn">Explore Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );

};

export default InternationalTours;
