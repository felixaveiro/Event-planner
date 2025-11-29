import './About.css';

export default function About() {
  const attendees = [
    { icon: '🌾', title: 'Producers', desc: 'Large-scale, medium, and smallholder farmers' },
    { icon: '📦', title: 'Exporters', desc: 'Packers and processors' },
    { icon: '🏦', title: 'Financiers', desc: 'Banks and insurance providers' },
    { icon: '💡', title: 'Innovators', desc: 'Tech companies and input suppliers' },
    { icon: '🤝', title: 'Partners', desc: 'Development organizations' },
    { icon: '🔬', title: 'Experts', desc: 'Researchers and specialists' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <span className="section-badge">About the Symposium</span>
          <h2 className="section-title">A Gathering of Minds, Markets, and Possibilities</h2>
          <p className="section-description">
            An UnConference environment designed to spark conversation, collaboration, 
            and real business opportunities across Rwanda's avocado value chain.
          </p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-card">
              <div className="card-icon">🌍</div>
              <h3>What is an UnConference?</h3>
              <p>
                A dynamic, participant-driven event where you shape the agenda. 
                Engage in open discussions, workshops, and networking sessions that matter most to you and the industry.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">💼</div>
              <h3>Business Opportunities</h3>
              <p>
                Co-create dialogue on sustainable pricing, quality assurance, export logistics, 
                climate resilience, and investment opportunities that support Rwanda's rapidly expanding avocado industry.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🎯</div>
              <h3>Key Focus Areas</h3>
              <ul>
                <li>Sustainable pricing strategies</li>
                <li>Quality assurance standards</li>
                <li>Export logistics optimization</li>
                <li>Climate resilience practices</li>
                <li>Investment & financing</li>
                <li>Market access opportunities</li>
              </ul>
            </div>
          </div>

          <div className="attendees-section">
            <h3 className="attendees-title">Who Will You Meet?</h3>
            <div className="attendees-grid">
              {attendees.map((attendee, index) => (
                <div key={index} className="attendee-card">
                  <div className="attendee-icon">{attendee.icon}</div>
                  <h4>{attendee.title}</h4>
                  <p>{attendee.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}