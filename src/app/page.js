
// app/home/page.js
import Link from 'next/link';
import Header from '@src/app/components/Header';
import Footer from '@src/app/components/Footer';
import Title from '@src/app/components/Title';


export default function Home() {


    return (
        <div>
            <Header />
            <main style={{ padding: '20px' }}>
                <Title>Witaj w Mojej Aplikacji!</Title>
                <p>To jest strona główna.</p>
                <Link href="/lab10">Lab 10</Link>
            </main>
            <Footer />
        </div>
    );
}
