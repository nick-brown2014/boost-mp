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
  const name = read("name"),
    email = read("email"),
    phone = read("phone"),
    type = read("type"),
    message = read("message");
  if (
    !name ||
    name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    phone.length > 40 ||
    !["Athlete", "Team", "Organization", "Other"].includes(type) ||
    !message ||
    message.length > 3000
  ) {
    return {
      status: "error",
      message:
        "Please enter your name, a valid email, your role, and a message (up to 3,000 characters). Phone numbers must be under 40 characters.",
    };
  }
  // TODO: Wire an email provider here before enabling real inquiries.
  console.info("Boost MP demo contact form validated", { type });
  return {
    status: "success",
    message:
      "Demo submission validated successfully. No email was sent and no inquiry was saved.",
  };
}
