import { useState } from 'react';
import './Registration.css';

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for registering! We will contact you soon with more details.');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      role: '',
      category: ''
    });
  };

  return (
    <section id="register" className="registration-section">
      <div className="registration-container">
        {/* Header */}
        <div className="registration-header">
          <span className="section-badge">Join Us</span>
          <h2 className="section-title">Register for the Symposium</h2>
          <p className="section-description">
            Confirm your place among the pioneers, builders, and visionaries 
            elevating Rwanda's avocado sector to new heights.
          </p>
        </div>

        <div className="registration-content">
          {/* Benefits */}
          <div className="benefits-section">
            <h3>What You'll Gain</h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-icon">🤝</span>
                <div>
                  <h4>Networking Opportunities</h4>
                  <p>Connect with producers, exporters, and investors</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💡</span>
                <div>
                  <h4>Knowledge Exchange</h4>
                  <p>Learn best practices and innovations</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💼</span>
                <div>
                  <h4>Business Deals</h4>
                  <p>Negotiate and close real opportunities</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🎯</span>
                <div>
                  <h4>Market Insights</h4>
                  <p>Access to export market intelligence</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🌱</span>
                <div>
                  <h4>Sustainability Focus</h4>
                  <p>Learn climate-resilient practices</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🏆</span>
                <div>
                  <h4>Be a Pioneer</h4>
                  <p>Part of Rwanda's agricultural history</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="form-section">
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+250 XXX XXX XXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="organization">Organization *</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  placeholder="Your company or organization"
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">Your Role *</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  placeholder="e.g., CEO, Farmer, Investor"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Participant Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select category</option>
                  <option value="producer">Producer/Farmer</option>
                  <option value="exporter">Exporter/Processor</option>
                  <option value="finance">Financial Institution</option>
                  <option value="tech">Technology Provider</option>
                  <option value="partner">Development Partner</option>
                  <option value="government">Government</option>
                  <option value="researcher">Researcher/Academic</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button type="submit" className="submit-button">
                Complete Registration
              </button>

              <p className="form-note">
                * Required fields. Your information will be used only for symposium purposes.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}