import SocialPages from "./SocialPages";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <section id="contact" className="mb-12 p-6">
      <div className="relative mb-8 pb-4 border-b-2 border-black">
        <h5 className="mb-2">{t("title")}</h5>
        <h2 className="tracking-wider text-center inline-block rotate-[-2deg] px-4 py-2">
          {t("headline")}
        </h2>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
      </div>

      <div className="grid md:grid-cols-8 gap-6 mb-6">
        <SocialPages />

        <ContactForm />
      </div>
    </section>
  );
}
