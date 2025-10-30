import { useTranslation } from "react-i18next";

export default function Modal({ type = "success", message = "", onClose = () => {} }) {
  const [t] = useTranslation("common");
  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`modal-content bg-white border-2 border-black p-6 shadow-xl max-w-md text-center ${
          isSuccess ? "text-green-800" : "text-red-700"
        }`}
      >
        <button
          className="absolute top-2 right-3 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl mb-3 font-bold">
          {isSuccess ? t("modal.thanks.title") : t("modal.error.title")}
        </h2>

        <p className="mb-4">{message}</p>

        <p className="text-sm opacity-80">
          {isSuccess
            ? t("modal.thanks.message_info")
            : t("modal.error.message")}
        </p>
      </div>
    </div>
  );
}
