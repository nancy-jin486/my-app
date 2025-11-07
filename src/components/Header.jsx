import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <img id="logo_header" src="/images/logo.png" alt="Logo" />
      <nav className="site-nav" aria-label="Primary">
        <ul className="navigation">
          <li><Link to="/" aria-label="Go to Home page">Home</Link></li>
          <li><a href="#menu" aria-label="View our Menu">Menu</a></li>          {/* 以后可替换成真实路由 */}
          <li><Link to="/booking"aria-label="Book a Table">Booking</Link></li>
          <li><a href="#about" aria-label="Learn more About us">About</a></li>        {/* 以后可替换成真实路由 */}
        </ul>
      </nav>
    </header>
  );
}