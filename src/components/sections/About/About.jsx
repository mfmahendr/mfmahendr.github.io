import { useTranslation, Trans } from "react-i18next";
import { useMemo } from "react";
import { textComponents } from "../../../i18n/utils/Components";

const About = () => {
  const { t } = useTranslation("about");
  const queryId =
    new URLSearchParams(window.location.search).get("job_exp") ||
    "backend_cloud";

  const articles = t("articles", { returnObjects: true });

  const selectedArticle = useMemo(() => {
    if (!articles) return null;
    const found = articles.find((a) => a.query_id === queryId);
    return found || articles.find((a) => a.query_id === "backend_cloud");
  }, [articles, queryId]);

  return (
    <div id="about" className="md:col-span-4 p-4">
      <h5>{t("title")}</h5>
      <h2 className="my-4">
        <span className="text-5xl">Fadhil |</span> {t("headline")}
      </h2>

      <div className="relative leading-relaxed mb-4">
        {/* picture */}
        <div className="md:float-right mx-auto md:ml-6 mb-4 w-48 md:w-1/4 sm:w-2/5 border border-black p-1">
          <img
            src={t("image.src")}
            alt={t("image.alt")}
            className="w-full h-auto object-cover"
          />
          <div className="p-2 border-t border-black text-center text-xs italic">
            <p>M. Fadhil Mahendra</p>
          </div>
        </div>

        {/* articles */}
        <article className="gap-8 columns-2 text-justify text-base">
          {selectedArticle?.contents?.map((content, idx) => {
            const key = Object.keys(content)[0];
            return (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "first-letter:float-left first-letter:text-6xl first-letter:font-newspaper-title first-letter:mr-2 first-letter:mt-1 mb-4"
                    : "mb-4"
                }
              >
                <Trans
                  i18nKey={`about:articles.${articles.indexOf(selectedArticle)}.contents.${idx}.${key}`}
                  t={t}
                  values={{
                    name: "M. Fadhil Mahendra",
                    univ: "Universitas Gadjah Mada",
                    major: t("profile.major"),
                    career: selectedArticle.job_expectation,
                  }}
                  components={textComponents}
                />
              </p>
            );
          })}
        </article>
      </div>

      <a
        href="#contact"
        className="inline-block mr-2 mb-4 px-6 py-2 border border-black shadow-md transition-all duration-300 transform hover:scale-105"
      >
        {t("hire_cta")}
      </a>
    </div>
  );
};

export default About;
