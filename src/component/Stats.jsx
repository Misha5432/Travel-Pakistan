import React, { useEffect, useRef, useState } from 'react'
import { FaSmile, FaBus, FaBriefcase, FaComments } from 'react-icons/fa'
import './Stats.css'

const statsData = [
  {
    icon: <FaSmile size={32} />,
    value: 70101,
    label: 'Happy Customers',
  },
  {
    icon: <FaBus size={32} />,
    value: 109,
    label: 'Amazing Tours',
  },
  {
    icon: <FaBriefcase size={32} />,
    value: 6409,
    label: 'In Business',
  },
  {
    icon: <FaComments size={32} />,
    value: 10876,
    label: 'Support Cases',
  },
];

function useCountUp(target, inView, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const val = Math.floor(progress * target);
      setCount(val);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [inView, target]);
  return count;
}

const Stats = () => {
  const sectionRef = useRef();
  const [inView, setInView] = useState(false);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="stats" ref={sectionRef} id="stats">
        <div className="stats__container">
          {statsData.map((stat, i) => {
            const count = useCountUp(stat.value, inView, 1800 + i * 200);
            return (
              <div className="stats__item" key={stat.label}>
                <div className="stats__icon">{stat.icon}</div>
                <div className="stats__number">{count.toLocaleString()}</div>
                <div className="stats__label">{stat.label.toUpperCase()}</div>
              </div>
            );
          })}
        </div>
      </section>
      
    </>
  )
}

export default Stats