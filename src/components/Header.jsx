export default function Header() {
  return (
    <header className="site-header">
      <img id="logo_header" src="/images/logo.png" alt="Logo" />
      <nav className="site-nav" aria-label="Primary">
        <ul className="navigation">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#booking">Booking</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}