import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tools",
  description: "Boost MP mental performance tools. Coming soon.",
};
export default function Tools() {
  return (
    <section className="wrap page-intro tools">
      <p className="eyebrow">YOUR MENTAL TOOLKIT</p>
      <h1>
        Tools for
        <br />
        <em>what’s next.</em>
      </h1>
      <div className="coming">
        <span aria-hidden="true">✳</span>
        <h2>Coming soon — TBD</h2>
        <p>Watch this space. More to come.</p>
      </div>
    </section>
  );
}
