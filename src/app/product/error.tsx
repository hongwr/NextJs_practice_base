'use client';

import React, { useEffect } from 'react';

type Props = { error: Error; reset: () => void };

export default function ProductError({ error, reset }: Props) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
