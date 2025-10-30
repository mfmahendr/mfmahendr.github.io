import { useState } from "react";

export function useContactForm() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [modal, setModal] = useState({
    visible: false,
    type: "success",
    message: "",
  });

  const handleSubmit = async (e) => {
    console.log("Submitting your mail form...");
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitting(true);

    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    data.cf_token =
      document.querySelector('input[name="cf-turnstile-response"]')?.value ||
      "";

    try {
      const response = await fetch(
        "https://mfadhilmahendra.my.id/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();
      console.log("[DEBUG] result of submitting data:", result);

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      form.reset();
      window.turnstile?.reset("#turnstile-widget");
      setModal({
        visible: true,
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
    } catch (error) {
      console.error("Failed to submit:", error);
      setModal({
        visible: true,
        type: "error",
        message:
          "We couldn't send your message at this time. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return { handleSubmit, modal, setModal, isSubmitting };
}
