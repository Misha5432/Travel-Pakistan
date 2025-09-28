import React, { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import './Home.css';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import pak from "../assets/pak.avif";

const destinations = [
  'Hunza',
  'Kashmir',
  'Murree',
  'swat',
  'gilgit',
  'New York',
  'Tokyo',
  'London',
  'Rome',
  'Sydney',
  'Bali',
  'Bangkok',
  'Dubai',
  'Istanbul',
];

const Home = () => {
  const [where, setWhere] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const searchRef = useRef(null);

  const fuse = new Fuse(destinations, {
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 1,
    threshold: 0.4,
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setWhere(value);
    if (value) {
      const searchResults = fuse.search(value).slice(0, 8);
      setResults(searchResults);
      setIsDropdownOpen(true);
    } else {
      setResults(destinations.slice(0, 8).map(d => ({ item: d, matches: [] })));
      setIsDropdownOpen(true);
    }
    setActiveSuggestionIndex(0);
  };

  const handleKeyDown = (e) => {
    if (!isDropdownOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex < results.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : 0
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[activeSuggestionIndex]) {
        handleSuggestionClick(results[activeSuggestionIndex].item);
      }
    }
  };

  const handleSuggestionClick = (destination) => {
    setWhere(destination);
    setIsDropdownOpen(false);
  };

  const renderHighlightedText = (text, indices) => {
    const parts = [];
    let lastIndex = 0;
    indices.forEach(([start, end]) => {
      if (start > lastIndex) {
        parts.push(text.substring(lastIndex, start));
      }
      parts.push(<strong key={start}>{text.substring(start, end + 1)}</strong>);
      lastIndex = end + 1;
    });
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    return <span>{parts}</span>;
  };

  return (
    <div className="home-hero" style={{ backgroundImage: `url(${pak})` }} id="home">
      <div className="home-overlay" />
      <div className="home-center-content">
        <h1 className="home-tagline">Discover Your Next Adventure</h1>
        <p className="home-subtagline">Where do you want to go?</p>
        <form className="home-searchbar" onSubmit={(e) => e.preventDefault()}>
          <div className="home-input-group" ref={searchRef}>
            <FaMapMarkerAlt className="home-input-icon" />
            <input
              type="text"
              placeholder="Where"
              value={where}
              onChange={handleInputChange}
              onFocus={() => {
                if (where) {
                  const searchResults = fuse.search(where).slice(0, 8);
                  setResults(searchResults);
                } else {
                  setResults(destinations.slice(0, 8).map(d => ({ item: d, matches: [] })));
                }
                setIsDropdownOpen(true);
              }}
              onKeyDown={handleKeyDown}
              className="home-input"
              aria-label="Destination"
              autoComplete="off"
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              aria-controls="suggestions-list"
              aria-activedescendant={isDropdownOpen && results.length > 0 ? `suggestion-${activeSuggestionIndex}` : ''}
            />
            {isDropdownOpen && results.length > 0 && (
              <ul id="suggestions-list" className="home-suggestions-list" role="listbox">
                {results.map(({ item, matches }, index) => (
                  <li
                    key={index}
                    id={`suggestion-${index}`}
                    className={index === activeSuggestionIndex ? 'suggestion-active' : ''}
                    onClick={() => handleSuggestionClick(item)}
                    onMouseOver={() => setActiveSuggestionIndex(index)}
                    role="option"
                    aria-selected={index === activeSuggestionIndex}
                  >
                    {matches.length > 0 && matches[0].indices ? renderHighlightedText(item, matches[0].indices) : item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="home-input-group">
            <FaCalendarAlt className="home-input-icon" />
            <input
              type="date"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="home-input"
              aria-label="From date"
            />
          </div>
          <div className="home-input-group">
            <FaCalendarAlt className="home-input-icon" />
            <input
              type="date"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="home-input"
              aria-label="To date"
            />
          </div>
          <button className="home-search-btn" type="submit">
            Let’s Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;