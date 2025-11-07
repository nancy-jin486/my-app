import { Link } from "react-router-dom";

export default function Highlights() {
    return (
      <section className="content" aria-label="Highlights">
      <article className="highlight" id="hours">
        <h2>Opening Hours</h2>
        <img src="/images/opening_hours.jpg" alt="Opening Hours" />
        <p>
        Join us for coffee in the morning, a relaxed lunch, or a cozy dinner
        with friends and family.
        </p>
        <a href="#hours" className="btn">See Hours</a>
      </article>
    
      <article className="highlight" id="menu">
        <h2>Our New Menu</h2>
        <img src="/images/our_new_menu.jpg" alt="New Menu" />
        <p>
        Seasonal dishes with vibrant flavors — refreshing salads, hearty mains,
        and delightful desserts.
        </p>
        <a href="#menu" className="btn">View Menu</a>
      </article>
    
      <article className="highlight" id="booking">
        <h2>Book a table</h2>
        <img src="/images/book_a_table.jpg" alt="Book a table" />
        <p>
        Book your table online in seconds and enjoy a memorable Mediterranean dining experience at Little Lemon.
        </p>
        <Link to="/booking" className="btn">Book Now</Link>
      </article>
      </section>
    );
  }