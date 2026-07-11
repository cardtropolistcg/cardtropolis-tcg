# Cardtropolis TCG — Deployment Notes

The site is static (HTML/CSS, no build step). Upload the whole `cardtropolis-site` folder to any static host (Netlify, Vercel, Cloudflare Pages, or shared hosting).

## Before / after going live

1. **Domain**: once you have one (e.g. cardtropolistcg.com), update in every page's `<head>`:
   - Add `<link rel="canonical" href="https://yourdomain.com/...">`
   - Add `<meta property="og:url" content="https://yourdomain.com/...">`
   - Change `og:image` and the JSON-LD `image` (index.html) to absolute URLs, e.g. `https://yourdomain.com/assets/logo.jpg`
2. **Discord**: the invite link still needs to be added — send the QR code from the business card (photo of it) or the discord.gg link, and it should go in the nav/footer and a callout on the Events page.
3. **404 page**: `404.html` is included — most static hosts pick it up automatically; on Netlify/Cloudflare it works out of the box.
4. **Google Business Profile**: add the website URL to the profile so the site appears in the Maps/search panel.
5. **Facebook**: add the site to the page's Links section (currently only tcgplayerpro.com is listed).
6. **"We Buy Cards" section**: competitor Discordia Games advertises their buylist prominently. If Cardtropolis buys collections, a short section with the policy would be an easy win — needs the store's actual policy.
7. **Hours**: hours came from Google/Yelp listings (Mon–Fri 1–9, Sat–Sun 11–7). Double-check they're current; they appear on index, contact, footer, and in the JSON-LD structured data (index.html).
8. **Weekly schedule**: from the March Facebook "Weekly Events Schedule" post — worth re-checking each season (events.html).
