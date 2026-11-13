# Boost by Mike

Website for [boostbymike.com](https://boostbymike.com): mental performance coaching with Mike Mata, CMPC®. Next.js App Router, TypeScript, Tailwind CSS.

## Development

Use Node.js 22 and npm. No environment variables are required for this preview.

```sh
npm install
npm run dev -- --port 3000
npm run lint
npm run build
npm start
```

## Pages

- `/` — parallax hero, the work, approach, specialties, credentials, contact CTA
- `/about` — Mike's bio, credentials, specialties, CMPC® accreditation
- `/contact` — validated demo contact form (first/last name, email, subject, message)
- `/tools` — coming soon

Images live in `public/images/`; the favicon/app icons are `src/app/favicon.ico`, `icon.png`, and `apple-icon.png`. Shared copy (specialties, LinkedIn/Instagram URLs) is in `src/lib/site.ts`.

## Before launch

Set `linkedinUrl` / `instagramUrl` in `src/lib/site.ts` to show those links. The contact server action validates input and logs only a non-sensitive demo event; it does not send email or persist inquiries. Connect an email provider in `src/app/contact/actions.ts`, add abuse protection and privacy information, and update the preview notice and success message before accepting real inquiries.
