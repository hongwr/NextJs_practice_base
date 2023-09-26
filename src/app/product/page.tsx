import getProducts from '@/service/products';
import Link from 'next/link';
import React from 'react';
import MeowArticle from '@/components/MeowArticle';
import clothes from '../../../public/images/clothes.jpeg';
import Image from 'next/image';

// ISR Rendering, 3초마다 re rendering
// export const revalidate = 3;

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <>
            <h1>제품 소개 페이지!</h1>
            <Image src={clothes} alt='Clothes' priority />
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <Link href={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
            <MeowArticle />
        </>
    );
}
