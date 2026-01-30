import { useTranslation, Trans } from "react-i18next";
import { inkComponents, textComponents } from "../../../i18n/utils/Components";
import { ImageWithAttribution } from "../../ui/ImageWithAttribution";
import { breakingNewsIllustratin } from "../../../assets/data/illustrationsData";

//! this should be dynamically determined
const availabilityStatus = "available"; //* options: "availability", "unavailable", "employed"
// const availabilityStatus = process.env.AVAILABILITY_STATUS || "available"; //* options: "availability", "unavailable", "employed"

const Availability = () => {
  const { t } = useTranslation("about");
  const imgSrc =
    availabilityStatus === "available"
      ? breakingNewsIllustratin.opento
      : breakingNewsIllustratin.notopento;

  return (
    <section
      id="status"
      className="border-2 border-black md:border-t-0 md:border-r-0 md:border-b-0 p-4 h-full flex flex-col md:col-span-2"
    >
      <h5 className="text-center">
        {t("sub.availability.title", "Availability Status")}
      </h5>
      <h2 className="tracking-widest text-center my-4 blurred-ink">
        <Trans
          i18nKey="about:sub.availability.headline"
          components={inkComponents}
        />
      </h2>
      <div className="flex-1 flex flex-col sm:flex-row md:flex-col items-center gap-4">
        <div className="pb-3">
          <ImageWithAttribution
            src={`/images/illustration/${imgSrc.file}`}
            alt={t(
              `sub.availability.${availabilityStatus}.img_alt`,
              "Developer declares ready to work",
            )}
            caption={t(
              `sub.availability.${availabilityStatus}.img_alt`,
              "Developer Declares",
            )}
            attribution={imgSrc.attribution}
            imgClassName="object-cover h-auto w-60 sm:max-w-50 md:max-w-5/6 mx-auto"
          />
        </div>
        <article className="text-sm leading-relaxed flex-1 text-center sm:text-left">
          <h3 className="text-lg pb-1">
            {t(
              `sub.availability.${availabilityStatus}.lead`,
              "LOCAL DEV DECLARES “READY TO WORK!”",
            )}
          </h3>
          <p className="pb-2">
            <Trans
              i18nKey={`about:sub.availability.${availabilityStatus}.desc`}
              components={{ ...inkComponents, ...textComponents }}
            />
          </p>
        </article>
      </div>
    </section>
  );
};

export default Availability;
