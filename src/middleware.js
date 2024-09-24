import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = request.cookies.get('refreshToken')?.value || request.cookies.get('refreshToken');
    if (token) {
        return NextResponse.redirect(new URL('/adminUser', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/login',
};
