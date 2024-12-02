import './styles.css';

export const metadata = {
  title: 'Laboratoria',
  description: 'Przykładowy projekt Next.js',
};

function Header() {
  return (
    <header>
      <h1>Witaj w Laboratoria!</h1>
      <nav>
        <ul>
          <li><a href="/">Strona główna</a></li>
          <li><a href="/about">O nas</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2024 Laboratoria. Wszystkie prawa zastrzeżone.</p>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl"> {/* Zmieniłem język na polski */}
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
