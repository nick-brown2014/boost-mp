import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clouds from "../../../public/images/logo-clouds.png";

export const metadata: Metadata = {
  title: "Tools",
  description: "Mental performance tools from Boost by Mike. Coming soon.",
};

export default function Tools() {
  return (
    <section className="page-top fold-slate tools">
      <div className="wrap tools-inner">
        <Image src={clouds} alt="" width={140} height={140} />
        <p className="eyebrow">Tools</p>
        <h1>Coming soon.</h1>
        <p className="muted">
          Applied tools for everyday life and performance are on the way. In the
          meantime, reach out to start working with Mike.
        </p>
        <Link className="button" href="/contact">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
