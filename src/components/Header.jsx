import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <img id="logo_header" src="/images/logo.png" alt="Logo" />
      <nav className="site-nav" aria-label="Primary">
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><a href="#menu">Menu</a></li>          {/* 以后可替换成真实路由 */}
          <li><Link to="/booking">Booking</Link></li>
          <li><a href="#about">About</a></li>        {/* 以后可替换成真实路由 */}
        </ul>
      </nav>
    </header>
  );
}