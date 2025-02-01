import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
  );
return NextResponse.next({
    request: {
      headers: headers,
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};