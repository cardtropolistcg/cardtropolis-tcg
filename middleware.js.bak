// Vercel Edge Middleware — server-side maintenance gate.
// Every page request is forced through the maintenance page until the
// correct password sets the "ct_open" cookie. Static assets pass through
// so the maintenance page can load its styles and logo.

export const config = {
  matcher: '/((?!maintenance\\.html|.*\\.(?:png|jpe?g|gif|svg|ico|css|js|txt|xml|json|webmanifest|woff2?)).*)',
};

const PASSWORD = 'cardtropolis123';

export default function middleware(request) {
  const url = new URL(request.url);
  const cookie = request.headers.get('cookie') || '';
  const authed = cookie.split(/;\s*/).includes('ct_open=1');

  // Password submitted from the maintenance page: /?pw=...
  const pw = url.searchParams.get('pw');
  if (pw !== null) {
    if (pw === PASSWORD) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: '/',
          'Set-Cookie': 'ct_open=1; Path=/; Max-Age=1209600; HttpOnly; SameSite=Lax',
          'Cache-Control': 'no-store',
        },
      });
    }
    return new Response(null, {
      status: 303,
      headers: { Location: '/maintenance.html?e=1', 'Cache-Control': 'no-store' },
    });
  }

  // Already unlocked — let the real page through.
  if (authed) return;

  // Locked — serve the maintenance page for any URL.
  return new Response(null, {
    status: 302,
    headers: { Location: '/maintenance.html', 'Cache-Control': 'no-store' },
  });
}
