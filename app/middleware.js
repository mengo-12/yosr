import { NextResponse } from 'next/server'

export function middleware(req) {
    const url = req.nextUrl
    const token = req.cookies.get('adminToken')?.value

    // صفحات الإدارة
    if (url.pathname.startsWith('/admin') && url.pathname !== '/admin/login' && token !== 'VALID_ADMIN') {
        return NextResponse.redirect(new URL('/admin/login', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*'],
}
