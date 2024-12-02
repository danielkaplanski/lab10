// components/Header.js
import Link from 'next/link';

const Header = () => (
    <header style={{ padding: '20px', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        <h1>Moja Aplikacja</h1>
        <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', gap: '20px' }}>
            <li>
            <Link href="/lab10/about">O mnie</Link>
            </li>
            <li>
            <Link href="/lab10/interests">Moje zainteresowania</Link>
            </li>
            <li>
            <Link href="/lab10/favorite">Ulubiony film</Link>
            </li>
            <li>
            <Link href="/lab10/contact">Kontakt</Link>
            </li>
            </ul>
        </nav>
    </header>
);

export default Header;
