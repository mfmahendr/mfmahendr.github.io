import { useTranslation } from "react-i18next";

export default function Modal({ onClick = () => {} }) {
  const [t] = useTranslation("common");

  return (
    <div id="thank-you-modal" className="modal">
      <div className="modal-content">
        <span className="close-modal" onClick={onClick}>
          &times;
        </span>
        <h2 className="mb-4">{t("modal.thanks.title")}</h2>
        <p className="text-xl mb-6">{t("modal.thanks.message_body")}</p>
        <p>{t("modal.thanks.message_info")}</p>
      </div>
    </div>
  );
}
