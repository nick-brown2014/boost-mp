"use server";
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
  // TODO: Wire an email provider here before enabling real inquiries.
  console.info("Boost by Mike demo contact form validated");
  return {
    status: "success",
    message:
      "Thanks! This preview form validated your message, but it was not sent yet.",
  };
}
