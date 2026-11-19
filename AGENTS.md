<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Dependencies

- Nick's local npm registry (a package proxy) rejects any package version published less than 7 days ago, including transitive versions pinned in `package-lock.json` (`E403 ... blocked_by_policy`). When adding or upgrading dependencies, pick versions at least 7 days old and don't commit a lockfile that resolves anything newer.
- Keep every `resolved` URL in `package-lock.json` on `https://registry.npmjs.org/`. A lockfile regenerated through the local proxy records `https://pkg.cognition.build/npm/` URLs instead; rewrite that prefix to `https://registry.npmjs.org/` (paths and integrity hashes are identical).
