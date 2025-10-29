import { Trans, useTranslation } from "react-i18next";
import { inkComponents, textComponents } from "../../../i18n/utils/Components";

export default function LearningSection() {
  const { t } = useTranslation("interests");

  return (
    <article
      id="learning"
      className="p-6 text-sm border-2 md:border-t-0 border-black relative"
    >
      {/* Judul */}
      <h5>{t("sub.learning.title")}</h5>
      <h2 className="text-2xl pb-2 mb-1">{t("sub.learning.headline")}</h2>
      <p className="text-xs italic mb-4">
        <Trans
          i18nKey="interests:sub.learning.published"
          components={textComponents}
        />
      </p>
      {/* Ilustrasi */}
      <img
        src="/images/illustration/learning-illustration.png"
        alt="A Man Learning Things"
        className="w-56 object-cover mb-4 mx-auto"
      />

      <p className="font-serif leading-relaxed mb-6 first-letter:float-left first-letter:text-6xl first-letter:font-newspaper-title first-letter:mr-2 first-letter:mt-1">
        <Trans
          i18nKey="sub.learning.intro"
          t={t}
          components={{
            ...inkComponents,
            ...textComponents,
          }}
        />
      </p>

      <div className="mb-6">
        <h3 className="text-xl mb-3 flex items-center">
          Topics Under Exploration:
        </h3>
        <ol className="space-y-3 pl-8 font-serif">
          {t("sub.learning.topics", { returnObjects: true }).map((_, idx) => (
            <li key={idx} className="relative">
              <Trans
                i18nKey={`sub.learning.topics.${idx}`}
                t={t}
                components={{
                  ...inkComponents,
                  ...textComponents,
                }}
              />
            </li>
          ))}
        </ol>
      </div>

      <p className="font-serif leading-relaxed italic">
        <Trans
          i18nKey="sub.learning.outro"
          t={t}
          components={{
            ...inkComponents,
            ...textComponents,
          }}
        />
      </p>
    </article>
  );
}
