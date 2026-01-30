import { useTranslation, Trans } from "react-i18next";
import { textComponents } from "../../../i18n/utils/Components";

export default function HardSkills() {
  const { t } = useTranslation("skills");

  // ambil array items dari i18n json
  const techItems = t("sub.classifieds.technical.items", {
    returnObjects: true,
  });

  return (
    <section className="py-0">
      <h5 className="m-2">
        {t("sub.classifieds.technical.title", "Technical Skills")}
      </h5>
      <h3 className="tracking-widest uppercase m-2">
        {t("sub.classifieds.technical.headline", "Services Offered")}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black text-[0.83rem] leading-tight">
        {techItems?.map((item, index) => (
          <article
            key={index}
            className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[3px_3px_0_rgba(0,0,0,0.1)] mx-px border! border-black!"
          >
            <h4 className="block w-full px-1 py-2 mb-1 bg-black text-[#fdfdfd]">
              <Trans
                i18nKey={`skills:sub.classifieds.technical.items.${index}.heading`}
                components={textComponents}
              >
                {/* fallback kalau i18n belum kebaca */}
                <strong>{item.heading}</strong>
              </Trans>
            </h4>
            <p>{item.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
