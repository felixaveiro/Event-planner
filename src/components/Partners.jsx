import './Partners.css';

export default function Partners() {
  const partners = [
    'Kwihaza Project', 'AGRA', 'Kilimo Trust', 'Cordaid', 'HEAR',
    'Equity Bank Rwanda', 'BPR Bank Rwanda', 'Radiant Yacu', 'BK Insurance',
    'MasterCard Foundation', 'Access to Finance Rwanda (AFR)', 'Yara',
    'Holland GreenTech Africa', 'One Acre Fund', 'LuxDev', 'RAB',
    'RDB', 'BRD', 'RFA', 'Wildlife Conservation Society (WCS)',
    'Rwanda Green Fund', 'African Solidarity Fund', 'MoneyPhone Africa Ltd',
    'ProxFresh Farms Ltd'
  ];

  const categories = [
    { icon: '🌾', title: 'Farmers', desc: 'The foundation of our avocado industry' },
    { icon: '🤝', title: 'Development Partners', desc: 'Supporting agricultural transformation' },
    { icon: '💼', title: 'Financial Institutions', desc: 'Enabling growth and investment' },
    { icon: '🏢', title: 'Corporate Sponsors', desc: 'Investing in Rwanda\'s future' },
  ];

  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">
        {/* Header */}
        <div className="partners-header">
          <span className="section-badge">Our Supporters</span>
          <h2 className="section-title">Partners & Sponsors</h2>
          <p className="section-description">
            This Symposium is made possible through the collective generosity of our farmers, 
            individual contributors, and development partners committed to Rwanda's agricultural transformation.
          </p>
        </div>

        {/* Categories */}
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.desc}</p>
            </div>
          ))}
        </div>

        {/* Partners List */}
        <div className="partners-list-section">
          <h3 className="partners-list-title">Supporting Organizations</h3>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-tag">
                {partner}
              </div>
            ))}
          </div>
          <p className="partners-note">...and many more dedicated partners who believe in the future of Rwanda's avocado value chain.</p>
        </div>

        {/* Become Partner CTA */}
        <div className="become-partner">
          <div className="become-partner-content">
            <h3>Become a Partner</h3>
            <p>
              Join us in shaping the future of Rwanda's avocado industry. 
              Partner with us to create lasting impact and sustainable growth.
            </p>
            <button className="partner-button">Contact Partnership Team</button>
          </div>
        </div>
      </div>
    </section>
  );
}