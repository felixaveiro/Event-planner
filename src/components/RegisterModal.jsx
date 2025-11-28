import { useState } from 'react'

export default function RegisterModal({ isOpen, closeModal }) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', event: 'Music Festival 2025'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you ${formData.name}! You've registered for ${formData.event}`)
    closeModal()
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Event Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <select name="event" value={formData.event} onChange={handleChange}>
            <option>Music Festival 2025</option>
            <option>Tech Conference</option>
            <option>Food & Wine Expo</option>
          </select>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  )
}