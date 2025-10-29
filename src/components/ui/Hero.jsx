import { useTranslation, Trans } from "react-i18next";
import { inkComponents, textComponents } from "../../i18n/utils/Components";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="md:w-1/2 relative px-6 py-16 transform rotate-[-1deg]">
      <div className="pl-4">
        <h3 className="text-3xl md:text-4xl leading-tight">
          <span className="ink-bleed-svg">{t("hero:headline_main")}</span>
          <br />
          <span className="italic">{t("hero:headline_sub")}</span>
        </h3>

        <div className="mt-4 pt-4">
          <p className="text-lg leading-relaxed font-serif">
            <Trans
              i18nKey="hero:intro"
              values={{ name: "M. Fadhil Mahendra" }}
              components={{ ...textComponents, ...inkComponents }}
            />
          </p>

          <div className="mt-4 flex items-center">
            <span className="border border-black px-3 py-1 text-sm italic mr-3">
              <a href="#about">
                <Trans
                  i18nKey="hero:continued_cta"
                  components={inkComponents}
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
