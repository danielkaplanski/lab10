import Link from 'next/link';

export default function Lab10() {
  return (
    <div className="container">
      <h1>Laboratorium 10</h1>
      <ul>
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
    </div>
  );
}
