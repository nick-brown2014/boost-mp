import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About",
  description:
    "The mission, approach, and values behind Boost MP mental performance consulting.",
};
export default function About() {
  return (
    <div className="wrap">
      <section className="page-intro">
        <p className="eyebrow">ABOUT BOOST MP</p>
        <h1>
          Better performance.
          <br />
          <em>More possibility.</em>
        </h1>
        <p className="intro">
          Our mission is to help athletes and teams develop the mental skills to
          pursue their potential — without losing sight of the person behind the
          performance.
        </p>
      </section>
      <section className="split section">
        <div className="bio-art">
          <span aria-hidden="true">↗</span>
          <p>THE PERSON BEHIND BOOST MP</p>
        </div>
        <div>
          <p className="eyebrow">MEET YOUR CONSULTANT</p>
          <h2>[Consultant Name]</h2>
          <p>
            <strong>Consultant biography coming soon.</strong>
          </p>
          <p>
            This space will introduce your consultant’s background,
            qualifications, sporting experience, and personal approach to mental
            performance.
          </p>
          <p>
            We start by listening, build a practical mental skills toolkit
            together, and apply it to the moments that matter to you.
          </p>
        </div>
      </section>
      <section className="section">
        <p className="eyebrow">OUR VALUES</p>
        <h2>
          Grounded in you.
          <br />
          Built for real life.
        </h2>
        <div className="cards three">
          {[
            [
              "People first",
              "You are more than your results. Your experiences, strengths, and goals shape our work together.",
            ],
            [
              "Intentional practice",
              "Mental skills take practice, just like physical skills. We focus on small, repeatable actions.",
            ],
            [
              "Growth over perfection",
              "Setbacks are information, not identity. We build curiosity, adaptability, and a sustainable way forward.",
            ],
          ].map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <p className="note">
          Boost MP provides mental performance education and consulting, not
          diagnosis or treatment of mental health conditions.
        </p>
      </section>
      <div className="cta">
        <h2>Your goals. Our starting point.</h2>
        <Link className="button" href="/contact">
          Let’s connect ↗
        </Link>
      </div>
    </div>
  );
}
