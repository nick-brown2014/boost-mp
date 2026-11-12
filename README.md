# Boost MP

A Next.js App Router website for Sports & Mental Performance consulting, built with TypeScript and Tailwind CSS.

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

- `/` — landing page, services, and approach
- `/about` — mission, values, and placeholder consultant biography
- `/contact` — validated demo contact form
- `/tools` — Coming soon — TBD

## Before launch

Replace `[Consultant Name]` and the biography placeholder with approved information. The contact server action validates input and logs only a non-sensitive demo event; it does not send email or persist inquiries. Connect an email provider in `src/app/contact/actions.ts`, add abuse protection and privacy information, and update the demo notice and success message before accepting real inquiries.
