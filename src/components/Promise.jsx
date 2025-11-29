import './Promise.css';

export default function Promise() {
  const promises = [
    {
      icon: '💰',
      title: 'Reliable Income',
      description: 'For farming households across Rwanda'
    },
    {
      icon: '👥',
      title: 'Youth & Women',
      description: 'Growing opportunities for entrepreneurs'
    },
    {
      icon: '💼',
      title: 'New Jobs',
      description: 'Hundreds in production, processing & logistics'
    },
    {
      icon: '📈',
      title: 'Export Growth',
      description: 'Fast-rising commodity strengthening national earnings'
    },
    {
      icon: '🌱',
      title: 'Soil Health',
      description: 'Anchor crop for biodiversity and conservation'
    },
    {
      icon: '🐝',
      title: 'Bee Conservation',
      description: 'Blossoms shelter beneficial insects'
    }
  ];

  return (
    <section id="promise" className="promise-section">
      <div className="promise-container">
        {/* Header */}
        <div className="promise-header">
          <span className="section-badge">The Promise</span>
          <h2 className="section-title">Rwanda's Avocado: More Than a Fruit</h2>
          <p className="section-description">
            On our rolling hills and fertile valleys—where seven to nine months of rain nourish the land—
            avocado trees stand as guardians of our ecosystems and engines of rural prosperity.
          </p>
        </div>

        {/* Promise Grid */}
        <div className="promise-grid">
          {promises.map((promise, index) => (
            <div key={index} className="promise-card">
              <div className="promise-icon">{promise.icon}</div>
              <h3>{promise.title}</h3>
              <p>{promise.description}</p>
            </div>
          ))}
        </div>

        {/* Ecosystem Section */}
        <div className="ecosystem-section">
          <div className="ecosystem-content">
            <div className="ecosystem-text">
              <h3>A Symbol of Prosperity</h3>
              <div className="ecosystem-items">
                <div className="ecosystem-item">
                  <span className="ecosystem-emoji">🌸</span>
                  <p>Their blossoms shelter bees and beneficial insects</p>
                </div>
                <div className="ecosystem-item">
                  <span className="ecosystem-emoji">🌳</span>
                  <p>Their roots hold our soil and prevent erosion</p>
                </div>
                <div className="ecosystem-item">
                  <span className="ecosystem-emoji">🥑</span>
                  <p>Their fruits feed our families, markets, and dreams</p>
                </div>
              </div>
            </div>

            <div className="ecosystem-visual">
              <div className="visual-card">
                <h4>From Our Tables to the World</h4>
                <p>
                  From creamy smoothies to rice-and-beans accompaniments, from traditional 
                  plates to global cuisines like guacamole, Rwanda's avocado continues to 
                  claim its place on tables across the world—pure, nutritious, and unmistakably ours.
                </p>
                <div className="visual-icons">
                  <span>🥗</span>
                  <span>🥤</span>
                  <span>🍽️</span>
                  <span>🌎</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="promise-cta">
          <h3>Join a Movement of Generational Wealth</h3>
          <p>
            By joining the Avocado Symposium 2025, you become part of an ecosystem built on 
            collaboration, innovation, sustainability, and market excellence.
          </p>
          <button className="cta-button">Be Part of the Future</button>
        </div>
      </div>
    </section>
  );
}