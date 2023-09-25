
import Link from 'next/link'
import styles from './layout.module.css'


export default function productsLayout({ children }: {
    children: React.ReactNode
  }) {
  return (
    <>
        <nav className={styles.nav}>
            <Link href="/product/woman">여성옷</Link>
            <Link href="/product/man">남성옷</Link>
        </nav>
        <section className={styles.product}>{children}</section>
    </>
    
    
  )
}
