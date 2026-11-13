import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import clouds from "../../public/images/logo-clouds.png";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "opsz"],
});
const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Boost by Mike | Mental Performance Coaching",
    template: "%s | Boost by Mike",
  },
  description:
    "Mike Mata, CMPC®, is a mental skills coach for athletes, performing artists, leaders, and organizations — virtual and in-person.",
  openGraph: {
    siteName: site.name,
    url: site.url,
    images: ["/images/snow-hike.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="wrap footer-inner">
            <div>
              <Link className="footer-brand" href="/">
                <Image src={clouds} alt="" width={56} height={56} />
                Boost by Mike
              </Link>
              <p>{site.tagline}</p>
            </div>
            <nav aria-label="Footer" className="footer-links">
              <Link href="/about">About Mike</Link>
              <Link href="/tools">Tools</Link>
              <Link href="/contact">Contact</Link>
              {site.linkedinUrl && <a href={site.linkedinUrl}>LinkedIn</a>}
              {site.instagramUrl && <a href={site.instagramUrl}>Instagram</a>}
            </nav>
          </div>
          <div className="wrap footer-legal">
            <small>© Boost by Mike · boostbymike.com</small>
            <small>
              Mental performance coaching, not diagnosis or treatment of mental
              health conditions.
            </small>
          </div>
        </footer>
      </body>
    </html>
  );
}
