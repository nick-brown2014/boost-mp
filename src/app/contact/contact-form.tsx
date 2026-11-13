"use client";
import { useActionState } from "react";
import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

function Req() {
  return <span className="req">(required)</span>;
}

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);
  return (
    <form action={action} className="contact-form">
      <fieldset>
        <legend>Name</legend>
        <div className="field-row">
          <label>
            <span>
              First Name <Req />
            </span>
            <input
              name="firstName"
              autoComplete="given-name"
              required
              maxLength={60}
            />
          </label>
          <label>
            <span>
              Last Name <Req />
            </span>
            <input
              name="lastName"
              autoComplete="family-name"
              required
              maxLength={60}
            />
          </label>
        </div>
      </fieldset>
      <label>
        <span>
          Email <Req />
        </span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
        />
      </label>
      <label>
        <span>
          Subject <Req />
        </span>
        <input name="subject" required maxLength={150} />
      </label>
      <label>
        <span>
          Message <Req />
        </span>
        <textarea name="message" required rows={5} maxLength={3000} />
      </label>
      <button className="button" type="submit" disabled={pending}>
        {pending ? "Submitting…" : "Submit"}
      </button>
      <p
        className={`form-status ${state.status}`}
        role={state.status === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {state.message}
      </p>
    </form>
  );
}
