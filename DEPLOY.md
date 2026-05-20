# Marina Guesthouse — Deploy Guide

Total time: ~15-20 minutes if Cloudflare + GitHub accounts are ready.

## Step 1 — Create the GitHub repo (3 min)

1. Go to https://github.com/new
2. Name: `marina-guesthouse`
3. Set to **Public** (or Private — Cloudflare can read either)
4. Do NOT initialize with README/license/.gitignore (this folder already has them)
5. Click **Create repository**
6. Copy the SSH or HTTPS URL it shows you

## Step 2 — Push this folder to the repo (3 min)

Open a terminal in this folder (`marina-site/`) and run:

```bash
git init
git add .
git commit -m "Initial Marina Guesthouse static site"
git branch -M main
git remote add origin <PASTE_REPO_URL_HERE>
git push -u origin main
```

If git asks for credentials, use a Personal Access Token (Settings → Developer Settings → Tokens) instead of your password.

## Step 3 — Connect Cloudflare Pages (5 min)

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. Authorize GitHub (first time only) and select the `marina-guesthouse` repo
3. **Build settings:**
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/` (or leave empty)
   - Root directory: *(leave empty)*
4. Click **Save and Deploy**
5. Wait ~1 minute. You'll get a URL like `marina-guesthouse.pages.dev` — open it and verify the site works.

## Step 4 — Link your custom domain marinaguesthouse.co (5 min)

In the Pages project dashboard:

1. Click **Custom domains** tab → **Set up a custom domain**
2. Enter `marinaguesthouse.co` → **Continue**
3. Cloudflare will detect whether your DNS is already on Cloudflare:
   - **If yes** → it adds the DNS records automatically. Done.
   - **If no** → it shows you DNS records (CNAME) to add at your domain registrar. Add them, wait a few minutes for propagation.
4. Repeat for `www.marinaguesthouse.co` (recommended — Cloudflare auto-redirects to apex).

**Tip:** Moving the domain to Cloudflare DNS first (Add Site → Free plan → update nameservers at registrar) gives you free SSL, faster propagation, and the auto-DNS in step 3.

## Step 5 — Activate forms (2 min, can be done after launch)

The 3 forms (booking, contact, mailing list) POST to formsubmit.co. After deploy:

1. Visit `marinaguesthouse.co/contact` → submit the contact form once with any test message
2. Check `marinaguesthouse24@gmail.com` for an email from formsubmit asking you to confirm — click the link inside
3. Repeat for `/bookings` and the mailing list signup on home

Until you click the confirmation links, form submissions will be held by formsubmit (not lost — just not forwarded).

## Done

Live site: https://marinaguesthouse.co
Auto-deploy: any push to `main` triggers a redeploy in ~30 seconds.

---

## Future iterations (when you're ready)

- Replace Wix-hotlinked images with self-hosted ones in `/assets/images/`
- Migrate forms to Cloudflare Pages Functions (memory has the spec)
- Add a CMS (Decap or Tina) if Marina wants to self-edit
- Port to Astro for component reuse and easier multi-page maintenance
