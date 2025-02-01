import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales } from './lib/i18n/navigation';


const i18nMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always'
});

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
  );
 const secureRequest = new NextRequest(request.url, {
    headers,
  });
  return i18nMiddleware(secureRequest);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};