export default function Hero({ openModal }) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Discover Amazing Events</h1>
          <p>Join thousands of attendees at the best events in town</p>
          <button onClick={openModal} className="btn btn-primary">
            Register for Events
          </button>
        </div>
      </div>
    </section>
  )
}