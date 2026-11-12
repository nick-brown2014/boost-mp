"use client";
import { useActionState } from "react";
import { submitContact, type ContactState } from "./actions";
const initialState: ContactState = { status: "idle", message: "" };
export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);
  return (
    <form action={action}>
      <div className="field-row">
        <label>
          Your name *
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Full name"
          />
        </label>
        <label>
          Email address *
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <div className="field-row">
        <label>
          Phone (optional)
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            placeholder="Your phone number"
          />
        </label>
        <label>
          I’m reaching out as… *
          <select name="type" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option>Athlete</option>
            <option>Team</option>
            <option>Organization</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label>
        What’s on your mind? *
        <textarea
          name="message"
          required
          rows={5}
          maxLength={3000}
          placeholder="Tell us about your goals and what brings you here."
        />
      </label>
      <p className="note">* Required fields</p>
      <button className="button" type="submit" disabled={pending}>
        {pending ? "Submitting…" : "Submit demo inquiry ↗"}
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
