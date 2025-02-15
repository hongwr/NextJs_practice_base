import styles from './layout.module.css';
import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Open_Sans } from 'next/font/google';
import { Nanum_Gothic } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({
    weight: '700',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: '제품 사이트',
    description: '제품을 판매하는 곳',
    icons: '/favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={sans.className}>
            <body>
                <header className={styles.header}>
                    <h1 className={gothic.className}>Demo Note</h1>
                    <nav className={styles.nav}>
                        <Link href='/product'>Products</Link>
                        <Link href='/contact'>Contact</Link>
                        <Link href='/about'>About</Link>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
