# Marina Guesthouse — Static Site

Static site for [marinaguesthouse.co](https://marinaguesthouse.co). Co-built with [Fontein.Digital](https://fontein.digital).

## Stack (v1 — static)
- Pure HTML/CSS/JS (no build step required)
- Tailwind CSS via CDN
- Cormorant Garamond + Inter via Google Fonts
- Forms via [formsubmit.co](https://formsubmit.co) (no signup, one-time email confirmation)
- Hosted on Cloudflare Pages

## Pages
- `/` Home
- `/about` About
- `/amenities` Amenities
- `/rooms` Rooms & Rates
- `/gallery` Gallery
- `/contact` Contact (incl. contact form + map)
- `/bookings` Booking enquiry form
- `/terms` Terms (links to external PDF)
- `/thanks` Form submission confirmation
- `/404` Not found page

## Local preview
Just open `index.html` in a browser, or:
```
python3 -m http.server 8000
```
then visit http://localhost:8000

## First-time form activation
Forms POST to `formsubmit.co`. After deploy, submit each form ONCE — formsubmit will send a confirmation email to `marinaguesthouse24@gmail.com`. Click the link inside to activate that form endpoint. Until you click it, submissions won't be forwarded.

## Known v1 limitations (fix in v2)
- Images hotlinked from Wix CDN — replace with self-hosted images in `/assets/images/`
- Terms PDF still hosted on Wix CDN — re-upload to `/assets/marina-terms.pdf`
- Logo asset over-cropped — replace with cleaner version
- Forms via formsubmit.co — migrate to Cloudflare Pages Functions for full control
- No CMS — content edits via GitHub for now

## Deploy
See `DEPLOY.md` (or the deployment instructions Claude provided in chat).
