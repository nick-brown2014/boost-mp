import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a project in mind, or want to work with Mike? Get in touch with Boost by Mike.",
};

export default function Contact() {
  return (
    <section className="page-top fold-slate contact">
      <div className="wrap contact-inner">
        <h1>
          If you have a project in mind, or if you’d like to work with Mike,
          please complete the form below.
        </h1>
        <p className="notice">
          Preview form: submissions are validated but not yet emailed or saved.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
