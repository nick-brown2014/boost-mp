"use server";
import { Resend } from "resend";

const CONTACT_INBOX = process.env.CONTACT_INBOX ?? "michaelsmata@gmail.com";
const FROM_ADDRESS =
  process.env.CONTACT_FROM_EMAIL ?? "Boost by Mike <contact@boostbymike.com>";

export type ContactState = {
  status: "idle" | "error" | "success";
  message: string;
};
export async function submitContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const read = (key: string) =>
    typeof formData.get(key) === "string"
      ? (formData.get(key) as string).trim()
      : "";
  const firstName = read("firstName"),
    lastName = read("lastName"),
    email = read("email"),
    subject = read("subject"),
    message = read("message");
  if (
    !firstName ||
    firstName.length > 60 ||
    !lastName ||
    lastName.length > 60 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    !subject ||
    subject.length > 150 ||
    !message ||
    message.length > 3000
  ) {
    return {
      status: "error",
      message:
        "Please enter your first and last name, a valid email, a subject, and a message (up to 3,000 characters).",
    };
  }
  const apiKey = process.env.BOOST_BY_MIKE_RESEND ?? process.env.RESEND_API_KEY;
  const failure: ContactState = {
    status: "error",
    message:
      "Sorry, your message couldn’t be sent right now. Please try again in a few minutes.",
  };
  if (!apiKey) {
    console.error("Contact form: BOOST_BY_MIKE_RESEND is not set");
    return failure;
  }
  const name = `${firstName} ${lastName}`;
  const { error } = await new Resend(apiKey).emails.send({
    from: FROM_ADDRESS,
    to: [CONTACT_INBOX],
    replyTo: `${name} <${email}>`,
    subject: `Boost by Mike inquiry: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
  });
  if (error) {
    console.error("Contact form: Resend send failed", error);
    return failure;
  }
  return {
    status: "success",
    message: "Thanks for reaching out! Mike will get back to you soon.",
  };
}
