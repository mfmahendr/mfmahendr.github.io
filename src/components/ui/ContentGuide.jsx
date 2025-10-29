import { useTranslation, Trans } from "react-i18next";
import { inkComponents, textComponents } from "../../i18n/utils/Components";
import CorrectionTape from "./CorrectionTape";

const ContentGuide = () => {
  const { t } = useTranslation();

  const menuItems = [
    { id: "about", subMenu: [{ id: "availability" }] },
    {
      id: "interests",
      subMenu: [{ id: "pursuits" }, { id: "learning" }],
    },
    {
      id: "skills",
      subMenu: [{ id: "classifieds" }, { id: "tools" }],
    },
    {
      id: "projects",
    },
    {
      id: "contact",
      subMenu: [{ id: "social" }, { id: "form" }],
    },
  ];

  const getSubTitle = (mainId, subId) => {
    const components = { ...textComponents, ...inkComponents };

    const renderTrans = (key) => (
      <Trans i18nKey={key} components={components} />
    );

    switch (mainId) {
      case "about":
      case "skills":
        return (
          <>
            {renderTrans(`${mainId}:sub.${subId}.title`)} —{" "}
            {renderTrans(`${mainId}:sub.${subId}.headline`)}
          </>
        );

      default:
        return renderTrans(`${mainId}:sub.${subId}.headline`);
    }
  };

  return (
    <section
      className="menu md:w-1/2 relative p-6 border-4 border-black transform rotate-[-0.5deg] hover:rotate-0 transition-transform duration-300"
      aria-labelledby="menu-title"
    >
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-black" />

      <h2
        id="menu-title"
        className="tracking-widest pb-3 border-b-2 border-black flex items-center justify-center"
      >
        {t("common:content_guide_title")}
      </h2>

      <ol>
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <a href={`#${item.id}`} className="group flex items-center">
              <span className="text-lg font-bold flex items-center transition-opacity duration-300">
                <span>{t(`${item.id}:title`, item.id.toUpperCase())}</span>
                <span className="mx-2">—</span>
              </span>

              <span className="text-base italic group-hover:underline group-hover:font-bold transition-all duration-300">
                <Trans
                  i18nKey={`${item.id}:headline`}
                  components={{
                    str: (
                      <CorrectionTape
                        replacementText={t(`${item.id}:headline_correct_word`)}
                        className="mx-1"
                        tapeHeight="h-3/5"
                        replacementSize="text-xs"
                      />
                    ),
                  }}
                />
              </span>
            </a>

            {item.subMenu && (
              <ol className="sub-menu text-base">
                {item.subMenu.map((sub) => (
                  <li key={sub.id} className="menu-item">
                    <a href={`#${sub.id}`}>{getSubTitle(item.id, sub.id)}</a>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};
export default ContentGuide;
