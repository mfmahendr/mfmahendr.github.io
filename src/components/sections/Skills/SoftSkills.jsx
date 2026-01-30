import { useTranslation, Trans } from "react-i18next";
import { textComponents } from "../../../i18n/utils/Components";

export default function SoftSkills() {
  const { t } = useTranslation("skills");

  const softItems = t("sub.classifieds.soft.items", { returnObjects: true });

  return (
    <section id="softskills" className="py-0">
      <h5 className="m-2">{t("sub.classifieds.soft.title", "Soft Skills")}</h5>
      <h3 className="tracking-widest uppercase m-2">
        {t("sub.classifieds.soft.headline", "Announcements and Notices")}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black text-[0.83rem] leading-tight">
        {softItems?.map((item, index) => (
          <article
            key={index}
            className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[3px_3px_0_rgba(0,0,0,0.1)] mx-px border! border-black!"
          >
            <h4 className="block w-full px-1 py-2 mb-1 font-bold bg-black text-[#fdfdfd]">
              <Trans
                i18nKey={`skills:sub.classifieds.soft.items.${index}.heading`}
                components={textComponents}
              >
                {item.heading}
              </Trans>
            </h4>
            <p className="p-1">
              <Trans
                i18nKey={`skills:sub.classifieds.soft.items.${index}.content`}
                components={textComponents}
              >
                {item.content}
              </Trans>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
