import './App.css';

export default function App() {
  return (
    <div className="app">
      <header>
        <div>
          <img id="logo_header" src="images/logo.png" alt="Logo" />
        </div>
        <nav aria-label="Primary">
          <ul className="navigation">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero" id="home">
          <article className="promotion">
            <img src="images/hero_landing.jpg" alt="Hero" />
            <div className="promo-copy">
              <h1>Welcome to Little Lemon</h1>
              <p>
                A family-owned Mediterranean restaurant in the heart of Chicago.
                Discover authentic flavors inspired by Italy, Greece, and Turkey —
                crafted with fresh ingredients and served with a modern twist.
              </p>
            </div>
          </article>
        </section>

        {/* Highlights */}
        <section className="content" aria-label="Highlights">
          <article className="highlight" id="hours">
            <h2>Opening Hours</h2>
            <img src="images/opening_hours.jpg" alt="Opening Hours" />
            <p>
              We’re here for you all day, every day. Join us for a quick coffee in
              the morning, a relaxed lunch, or a cozy dinner with friends and family.
            </p>
            <a href="#hours" className="btn">See Hours</a>
          </article>

          <article className="highlight" id="menu">
            <h2>Our New Menu</h2>
            <img src="images/our_new_menu.jpg" alt="New Menu" />
            <p>
              Our chefs rotate the menu seasonally with 12–15 vibrant dishes. Taste
              refreshing salads, hearty mains, and delightful desserts.
            </p>
            <a href="#menu" className="btn">View Menu</a>
          </article>

          <article className="highlight" id="booking">
            <h2>Book a table</h2>
            <img src="images/book_a_table.jpg" alt="Book a table" />
            <p>
              Reserve your spot easily online. Whether it’s a romantic evening or a
              gathering with friends, we’ll make sure your dining experience is memorable.
            </p>
            <a href="#booking" className="btn">Book Now</a>
          </article>
        </section>
      </main>

      <footer>
        <div>
          <img id="logo_footer" src="images/logo_footer.png" alt="Footer Logo" />
        </div>
        <div>
          <p>Copyright Little Lemon</p>
        </div>
      </footer>
    </div>
  );
}
