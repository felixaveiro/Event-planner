import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🥑</span>
              <span className="logo-text">
                <strong>Rwandan Avocado Symposium</strong>
                <small>2025</small>
              </span>
            </div>
            <p className="footer-tagline">
              Shaping the future of Rwanda's horticulture export. 
              Welcome to the community that grows together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#promise">Our Promise</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#register">Register</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li>📧 info@avocadosymposium.rw</li>
              <li>📱 +250 XXX XXX XXX</li>
              <li>📍 Kigali, Rwanda</li>
            </ul>
          </div>

          {/* Organizers */}
          <div className="footer-section">
            <h4>Organized By</h4>
            <ul>
              <li><strong>Avocado Society of Rwanda (ASR)</strong></li>
              <li>In collaboration with</li>
              <li><strong>MINAGRI</strong></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Rwandan Avocado Symposium. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}