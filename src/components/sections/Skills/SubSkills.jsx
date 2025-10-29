import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { textComponents } from "../../../i18n/utils/Components";

export default function SubSkills({ type, titleKey, headlineKey }) {
  const [activeCols, setActiveCols] = useState(1);

  useEffect(() => {
    const mediaSm = window.matchMedia("(min-width: 648px)");
    const updateCols = () => {
      if (mediaSm.matches) {
        setActiveCols(3);
      } else setActiveCols(1);
    };

    updateCols();
    mediaSm.addEventListener("change", updateCols);

    return () => {
      mediaSm.removeEventListener("change", updateCols);
    };
  });

  const { t } = useTranslation("skills");
  const rawItems = t(`sub.classifieds.${type}.items`, { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems : [];

  const itemCount = items.length;
  let gridCols = 1;

  if (itemCount % 3 === 0 || (itemCount % 3 === 2 && itemCount % 2 === 1)) {
    gridCols = 3;
  } else if (itemCount % 3 === 1) {
    gridCols = 2;
  }

  const remainder = itemCount % gridCols;
  const needsPlaceholder = remainder !== 0 && activeCols > 1 ? true : false;

  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
  }[gridCols];

  return (
    <section className="py-0">
      <h5 className="m-2">{t(titleKey)}</h5>
      <h3 className="tracking-widest uppercase m-2">{t(headlineKey)}</h3>

      <div
        className={`grid grid-cols-1 md:${gridClass} divide-y md:divide-y-0 md:divide-x divide-black text-[0.83rem] leading-tight`}
      >
        {items.length > 0 ? (
          items.map((item, index) => (
            <article
              key={index}
              className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[3px_3px_0_rgba(0,0,0,0.1)] mx-px border border-black"
            >
              <h4 className="block w-full px-1 py-2 mb-1 bg-black text-[#fdfdfd] font-bold">
                <Trans
                  i18nKey={`skills:sub.classifieds.${type}.items.${index}.heading`}
                  components={textComponents}
                >
                  {item.heading}
                </Trans>
              </h4>
              <p className="p-1">
                <Trans
                  i18nKey={`skills:sub.classifieds.${type}.items.${index}.content`}
                  components={textComponents}
                >
                  {item.content}
                </Trans>
              </p>
            </article>
          ))
        ) : (
          <p>Loading...</p>
        )}

        {needsPlaceholder && (
          <article className="flex items-center justify-center border border-dashed border-gray-400 text-gray-500 italic text-sm p-4">
            Iklan disewakan
          </article>
        )}
      </div>
    </section>
  );
}
