import { useLocation, Navigate, Link } from "react-router-dom";

export default function ConfirmedBooking() {
  const { state } = useLocation();
  const booking = state?.booking;
  if (!booking) return <Navigate to="/booking" replace />;

  const { date, time, guests, occasion } = booking;

  return (
    <section className="confirmed-page">
      <header className="page-header success">
        <span className="badge">Confirmed</span>
        <h1>Booking Confirmed</h1>
        <p>Your table has been reserved. See you at Little Lemon!</p>
      </header>

      <div className="details-card">
        <ul className="details-list">
          <li><strong>Date:</strong> {date}</li>
          <li><strong>Time:</strong> {time}</li>
          <li><strong>Guests:</strong> {guests}</li>
          <li><strong>Occasion:</strong> {occasion}</li>
        </ul>

        <div className="form-actions" style={{ marginTop: 20 }}>
          <Link className="btn" to="/booking">Make another reservation</Link>
          <Link className="btn" to="/">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}

