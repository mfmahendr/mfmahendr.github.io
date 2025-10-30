import { useState } from "react";

export function useContactForm() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
      if (!result.ok) alert(result.error || "Failed to send message.");

      form.reset();
      window.turnstile?.reset("#turnstile-widget");
      setModalVisible(true);
    } catch (error) {
      console.log("Failed to submit. Please try again later.");
      console.log(error);
      setModalVisible(false);
    } finally {
      setSubmitting(false);
    }
  };

  return { handleSubmit, modalVisible, setModalVisible, isSubmitting };
}
