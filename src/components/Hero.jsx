import { useState, useEffect } from 'react';
import './Hero.css';


export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-12-10T00:00:00').getTime();
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>December 10, 2025 • Kigali, Rwanda</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-emoji">🌿</span>
          1st Rwandan Avocado Symposium 2025
        </h1>

        <p className="hero-subtitle">
          Shaping the Future of Rwanda's Most Promising Horticultural Industry
        </p>

        <p className="hero-description">
          A landmark national platform bringing together producers, innovators, investors, 
          and global market partners to elevate Rwanda's avocado sector to new heights.
        </p>

        <div className="hero-organizers">
          <p>Hosted by <strong>Avocado Society of Rwanda (ASR)</strong></p>
          <p>In collaboration with <strong>Ministry of Agriculture and Animal Resources (MINAGRI)</strong></p>
        </div>

        <div className="hero-buttons">
          <button onClick={scrollToRegister} className="btn-primary">
            Register Now
          </button>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-section">
          <h3 className="countdown-title">Event Starts In</h3>
          <div className="countdown-timer">
            <div className="countdown-item">
              <div className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-divider">:</div>
            <div className="countdown-item">
              <div className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-divider">:</div>
            <div className="countdown-item">
              <div className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-divider">:</div>
            <div className="countdown-item">
              <div className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">1st</div>
            <div className="stat-label">National Symposium</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Expected Delegates</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30+</div>
            <div className="stat-label">Partners & Sponsors</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}