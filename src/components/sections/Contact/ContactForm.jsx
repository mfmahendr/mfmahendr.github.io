import { useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useContactForm } from "../../../hooks/useContactForm.js";
import { useTurnstile } from "../../../hooks/useTurnstile.js";
import Modal from "../../ui/Modal.jsx";
import { inkComponents } from "../../../i18n/utils/Components.jsx";

const Contact = () => {
  const { t } = useTranslation("contact");
  const submitRef = useRef(null);
  useTurnstile(submitRef);

  const { handleSubmit, modalVisible, setModalVisible } = useContactForm();

  return (
    <section
      id="contact"
      className="md:col-span-5 p-6 border-2 border-black border-dashed shadow-md relative mail-in-form"
    >
      <div className="rotate-6 shadow-[2px_2px_0_rgba(0,0,0,0.2)] absolute top-0 right-0 bg-black text-white px-2 py-1 text-xs font-bold">
        {t("decorative.cutline")}
      </div>

      {/* HEADER */}
      <div className="border-b-2 border-black mb-6">
        <h2>{t("sub.form.headline")}</h2>
      </div>

      {/* FORM */}
      <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
        <p>{t("sub.form.intro")}</p>

        {/* NAME & EMAIL */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-1">
              {t("sub.form.labels.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="off"
              className="w-full border-2 border-gray-500 px-3 py-2 bg-amber-50 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-1">
              {t("sub.form.labels.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
              className="w-full border-2 border-gray-500 px-3 py-2 bg-amber-50 focus:outline-none"
            />
          </div>

          {/* HONEYPOT */}
          <div className="hidden">
            <label htmlFor="phone">{t("sub.form.labels.phone")}</label>
            <input
              type="text"
              id="phone"
              name="phone"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div>
          <label htmlFor="message" className="block text-sm font-bold mb-1">
            {t("sub.form.labels.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full border-2 border-gray-500 px-3 py-2 bg-amber-50 focus:outline-none"
          ></textarea>
        </div>

        {/* TURNSTILE & BUTTON */}
        <div className="text-center mt-6">
          {/* TURNSTILE */}
          <div
            id="turnstile-widget"
            className="cf-turnstile"
            data-retry="auto"
            data-sitekey="0x4AAAAAABlC7VN9-IAe1vyU"
            data-callback="onTurnstileSuccess"
            data-error-callback="onTurnstileError"
            data-refresh-expired="manual"
            data-refresh-timeout="manual"
            data-retry-interval="10000"
          ></div>

          <button
            id="submit-button"
            type="submit"
            ref={submitRef}
            disabled
            className="hover:bg-black hover:text-[#ffe9a7] py-2 px-6 border-2 border-black shadow-md font-bold transition-all duration-300 transform hover:scale-103 cursor-pointer
              disabled:text-black hover:disabled:text-[#ffe9a7] disabled:shadow-inner disabled:font-semibold disabled:cursor-not-allowed disabled:opacity-50 disabled:border-gray-500"
          >
            {t("sub.form.labels.submit")}
          </button>
        </div>
      </form>

      {modalVisible && <Modal onClick={() => setModalVisible(true)} />}

      {/* MAIL TO ADDRESS */}
      <div className="mail-to-address mt-4 p-2 border border-black text-center text-sm">
        <p>
          <Trans
            i18nKey="contact:decorative.mail_to"
            t={t}
            components={{
              ...inkComponents,
              tech: <span className="filler-text ink-bleed-svg" />,
              code: <span className="filler-text ink-blot" />,
            }}
          />
        </p>
      </div>
    </section>
  );
};

export default Contact;
