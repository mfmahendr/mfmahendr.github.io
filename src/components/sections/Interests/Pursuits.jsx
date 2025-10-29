import { useTranslation, Trans } from "react-i18next";
import { inkComponents, textComponents } from "../../../i18n/utils/Components";
import CorrectionTape from "../../ui/CorrectionTape";

export default function Pursuits() {
  const { t } = useTranslation("interests");

  const lists = t("sub.pursuits.lists", { returnObjects: true });
  return (
    <section
      id="interests"
      className="p-6 border-2 md:border-t-0 border-black relative pb-4"
    >
      <div className="text-center mb-6 relative">
        <h5 className="text-center">{t("sub.pursuits.title", "Interests")}</h5>
        <h2 className="inline-block px-6 relative">
          <Trans
            i18nKey="interests:headline"
            components={{
              str: (
                <CorrectionTape
                  replacementText={t("headline_correct_word")}
                  className="mx-1"
                  tapeHeight="h-3/5"
                  replacementSize="text-2xl leading-snug uppercase"
                />
              ),
            }}
          >
            'Cabinet' of Curiosities
          </Trans>
        </h2>
        <p className="text-xs italic mt-1">
          <Trans
            i18nKey="interests:sub.pursuits.published"
            values={{
              month: new Date().toLocaleString("default", { month: "long" }),
            }}
            components={inkComponents}
          />
        </p>
      </div>

      <div className="font-serif text-sm leading-relaxed">
        <p className="first-letter:float-left first-letter:text-5xl first-letter:font-newspaper-title first-letter:mr-2 first-letter:mt-1">
          <Trans
            i18nKey="interests:sub.pursuits.intro"
            components={{
              str: (
                <CorrectionTape
                  replacementText={t(
                    "interests:sub.pursuits.intro_correct_word",
                  )}
                  className="mx-1"
                  tapeHeight="h-3/5"
                  replacementSize="text-xs"
                />
              ),
            }}
          />
        </p>

        <h3 className="text-xl mt-8 mb-4 border-b border-dotted border-black pb-1 flex items-center">
          {t("sub.pursuits.headline")}
        </h3>

        <ul className="space-y-3 pl-4">
          {lists?.map((item, idx) => (
            <li key={idx} className="relative pl-6">
              <span className="absolute left-0">◆</span>
              <Trans
                i18nKey={`interests:sub.pursuits.lists.${idx}`}
                components={textComponents}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
