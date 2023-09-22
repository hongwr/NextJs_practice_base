import getProducts from '@/service/products';
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

// ISR Rendering, 3초마다 re rendering
// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    // next: { revalidate: 0 },
    // cache: 'no-store'
  }).then(res => res.json()).then(data => data.data[0]);

  return (
    <>
        <h1>제품 소개 페이지!</h1>
        <ul>
            {products.map((product, index) => (
                    <li key={index}>
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </li>
            ))}
        </ul>
        <article className={styles.article}>{res}</article>
    </>
  )
}
