import React, { useState, useRef } from 'react';
import './Reviews.css';
import { FaStar, FaGoogle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';

// Mock Data for Reviews
const reviewsData = [
  {
    name: 'Aisha Khan',
    date: 'October 20, 2024',
    rating: 5,
    avatar: 'https://i.pravatar.cc/48?img=1',
    review: 'An absolutely breathtaking experience! The trip to Hunza was perfectly organized. The views were surreal, and our guide was fantastic. Highly recommend for anyone looking to explore the mountains.',
    verified: true,
  },
  {
    name: 'Bilal Ahmed',
    date: 'September 15, 2024',
    rating: 5,
    avatar: 'https://i.pravatar.cc/48?img=2',
    review: 'Our family trip to Kashmir exceeded all expectations. The houseboats, the gardens, and the gondola ride in Gulmarg were highlights. Everything was seamless, from transport to accommodation.',
    verified: true,
  },
  {
    name: 'Fatima Ali',
    date: 'August 5, 2024',
    rating: 4,
    avatar: 'https://i.pravatar.cc/48?img=3',
    review: 'A wonderful getaway to Murree. The colonial architecture and cool climate were a refreshing break. The tour was well-paced, though I wish we had a bit more time at the Mall Road.',
    verified: true,
  },
  {
    name: 'Usman Malik',
    date: 'July 28, 2024',
    rating: 5,
    avatar: 'https://i.pravatar.cc/48?img=4',
    review: 'Swat Valley is truly the Switzerland of Pakistan. The landscape is stunningly beautiful. Our driver was skilled and navigated the mountain roads with ease. A must-visit destination!',
    verified: true,
  },
    {
    name: 'Zainab Hassan',
    date: 'July 10, 2024',
    rating: 5,
    avatar: 'https://i.pravatar.cc/48?img=5',
    review: 'The journey to Gilgit was an adventure in itself. The raw beauty of the Karakoram Highway is something to behold. The local culture and hospitality were heartwarming. Unforgettable trip!',
    verified: true,
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className="star"
        color={i <= rating ? '#FFD700' : '#E0E0E0'}
      />
    );
  }
  return <div className="star-rating">{stars}</div>;
};

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const needsTruncation = review.review.length > 150;
  const reviewText = isExpanded || !needsTruncation ? review.review : `${review.review.substring(0, 150)}...`;

  return (
    <div className="review-card">
      <div className="review-card-header">
        <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
        <div className="reviewer-info">
          <p className="reviewer-name">{review.name}</p>
          <p className="review-date">{review.date}</p>
        </div>
        <FaGoogle className="google-logo" />
      </div>
      <div className="review-card-body">
        <div className="rating-line">
          <StarRating rating={review.rating} />
          {review.verified && <GoVerified className="verified-badge" />}
        </div>
        <p className="review-text">{reviewText}</p>
        {needsTruncation && (
          <button onClick={toggleExpanded} className="read-more-btn">
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
    </div>
  );
};

const Reviews = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 340; // Corresponds to card width + gap
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-overlay"></div>
      <div className="reviews-container">
        <h2 className="reviews-main-title">Our Travel Reviews</h2>
        <p className="reviews-subtitle">See what our travelers have to say about their journeys with us.</p>
        <div className="reviews-grid" ref={scrollContainerRef}>
          {reviewsData.map((review, index) => (
            <ReviewCard review={review} key={index} />
          ))}
        </div>
        <div className="scroll-arrows">
          <button className="scroll-arrow left" onClick={() => scroll('left')} aria-label="Scroll left">
            <FaChevronLeft />
          </button>
          <button className="scroll-arrow right" onClick={() => scroll('right')} aria-label="Scroll right">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
