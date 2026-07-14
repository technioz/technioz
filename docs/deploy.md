# Deployment

## Live site

- **Domain**: `https://technioz.com` (apex)
- **WWW redirect**: `https://www.technioz.com` → `https://technioz.com` (301)
- **Edge**: Currently served by **Vercel** (apex A-records point at Vercel parking IPs `64.29.17.1` / `216.198.79.1`; `www` CNAMEs to `f2f4c2c19fb4eb04.vercel-dns-017.com`)
- **Origin build**: Vercel auto-deploys from `https://github.com/technioz/technioz` on every push to `main`
- **Alternate origin**: Self-hosted on Coolify (we push to `origin/main` and Coolify pulls), but the live site is **not** hitting Coolify right now

## Environment variables

The following env vars must be set on **whatever deployment is serving the live site** (currently Vercel → Project → Settings → Environment Variables).

| Var | Required? | Used by | Where to set | Notes |
|---|---|---|---|---|
| `DATABASE_URL` | yes | Article webhook, contact form, blog DB articles | Vercel + Coolify + local `.env` | Postgres connection string |
| `ARTICLE_WEBHOOK_SECRET` | yes | Article webhook (`POST /api/articles`) | Vercel + Coolify + local | Bearer token |
| `INDEXNOW_KEY` | yes for sitemap discovery | postbuild IndexNow submitter | Vercel + Coolify + local | The 32-char hex value in the matching `public/{key}.txt` file |
| `NTFY_TOPIC` | yes for contact-form push notifications | Contact form (`POST /api/contact`) | Vercel + Coolify + local | 16-char random hex. Subscribe to it in the ntfy app to receive alerts |
| `NTFY_TOKEN` | optional | Contact form | Vercel + Coolify + local | Only needed for private ntfy.sh topics. Bearer token |

## Setting up ntfy push notifications

The contact form writes submissions to the `contact_submissions` Postgres table
regardless of ntfy. ntfy is only for **push** — to get a phone notification
on every new lead.

1. Install the ntfy app (iOS / Android / F-Droid / web).
2. Pick a hard-to-guess 16-character topic name. Generate one with:
   ```bash
   node -e "console.log(require('crypto').randomBytes(8).toString('hex'))"
   ```
3. Add it to Vercel env vars: `NTFY_TOPIC=<your-topic-hex>`.
4. Subscribe in the ntfy app to topic `https://ntfy.sh/<your-topic-hex>`.
5. Trigger a Vercel redeploy (Deployments → ⋯ → Redeploy) so the build reads the new env.
6. Test: `POST` a payload to `/api/contact` on the live site, then check the ntfy app for a notification within 2 seconds.

## Verifying what's serving the live site

```bash
curl -sI https://technioz.com/ | grep -E "^(Server|X-Vercel|X-Nextjs)"
```

Expected (currently): `Server: Vercel`, `X-Nextjs-Prerender: 1`.

If you see `Server: Caddy` or `Server: nginx` instead, the apex DNS is
pointed at Coolify.

## DNS notes

- Apex `technioz.com`: A records at `64.29.17.1` / `216.198.79.1` (Vercel parking).
- `www.technioz.com`: CNAME `f2f4c2c19fb4eb04.vercel-dns-017.com` (Vercel).
- To move off Vercel: change the apex A records to the Coolify server IP, and
  either keep the `www` CNAME pointed at Vercel (and let it 301 to apex
  via our `next.config.ts` redirect) or remove the `www` entirely.

## Post-deploy verification

After any deploy, run:

```bash
curl -sI https://technioz.com/ | head -1       # Expect: HTTP/2 200
curl -s https://technioz.com/sitemap.xml | head -5
curl -s -X POST https://technioz.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Smoke","email":"s@t.com","message":"This is a smoke-test message."}'
# Expect: {"ok":true,"status":"received","id":"..."}
# Expect: ntfy push on phone within 2 seconds
```
