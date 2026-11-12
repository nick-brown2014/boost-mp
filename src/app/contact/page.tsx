import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about mental performance consulting for you or your team.",
};
export default function Contact() {
  return (
    <section className="wrap split section contact">
      <div>
        <p className="eyebrow">LET’S CONNECT</p>
        <h1>
          Big goals.
          <br />
          <em>First step.</em>
        </h1>
        <p className="intro">
          Tell us a little about yourself and what you’re working toward. Let’s
          explore what mental performance support could look like for you.
        </p>
        <div className="contact-note">
          <span aria-hidden="true">↗</span>
          <h3>A conversation, not a commitment.</h3>
          <p>
            Whether you’re an athlete, coach, or part of an organization, this
            is a place to start.
          </p>
        </div>
      </div>
      <div className="form-panel">
        <h2>Start a conversation</h2>
        <p className="notice">
          Preview form: submissions are validated for demonstration only. They
          are not emailed or saved, and you will not receive a reply. Please
          don’t share sensitive information.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
