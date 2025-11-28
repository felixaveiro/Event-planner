export default function Events({ openModal }) {
  const events = [
    { id: 1, title: "Music Festival 2025", date: "15 Dec 2025", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3" },
    { id: 2, title: "Tech Conference", date: "20 Jan 2026", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87" },
    { id: 3, title: "Food & Wine Expo", date: "5 Feb 2026", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" }
  ]

  return (
    <section id="events">
      <div className="container">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <img src={event.img} alt={event.title} />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p className="event-date">📅 {event.date}</p>
                <button onClick={openModal} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}