import './App.css';

export default function App() {
  return (
    <div className="container">
      <header className="site-header">
        <h1>Little Lemon</h1>
      </header>

      <nav className="site-nav" aria-label="Primary">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <h2 className="visually-hidden">Main content</h2>

        {/* 响应式网格区块 */}
        <section className="grid">
          <article className="card">Menu</article>
          <article className="card">Reserve a table</article>
          <article className="card">Specials</article>
        </section>

        <section className="content">
          <h3>hi</h3>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2023 Little Lemon</p>
      </footer>
    </div>
  );
}
