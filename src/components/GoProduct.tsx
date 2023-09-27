'use client';

import { useRouter } from 'next/navigation';

export default function GoProduct() {
    const router = useRouter();
    return (
        <button
            onClick={() => {
                router.push('/product');
            }}
        >
            제품 페이지로 이동
        </button>
    );
}
