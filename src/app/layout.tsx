import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Boost MP | Sports & Mental Performance", template: "%s | Boost MP" },
  description: "Mental performance consulting for athletes and teams. Build confidence, focus, and resilience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body><a className="skip" href="#main">Skip to content</a><Header /><main id="main">{children}</main><footer className="wrap"><Link className="brand" href="/">boost<span>mp</span> ↗</Link><p>Stronger mind. Greater possibility.</p><div className="footer-links"><Link href="/about">About</Link><Link href="/tools">Tools</Link><Link href="/contact">Let’s connect ↗</Link></div><small>© Boost MP · Sports & Mental Performance</small></footer></body>
    </html>
  );
}
