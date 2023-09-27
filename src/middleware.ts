import { NextRequest, NextResponse } from 'next/server';

// 전체 페이지에서 작동함
export function middleware(request: NextRequest) {
    console.log('middleware');
    if (request.nextUrl.pathname.startsWith('/product/1004')) {
        console.log('미들웨어 - 경로 리다이렉팅');
        return NextResponse.redirect(new URL('/product', request.url));
    }
}

// 특정한 페이지에서만 가능하도록 설정(config)
export const config = {
    matcher: ['/product/:path*'],
};
