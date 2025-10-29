import { useTranslation, Trans } from "react-i18next";
import { inkComponents, textComponents } from "../../../i18n/utils/Components";

//! this should be dynamically determined
const availabilityStatus = "available"; //* options: "availability", "unavailable", "employed"
// const availabilityStatus = process.env.AVAILABILITY_STATUS || "available"; //* options: "availability", "unavailable", "employed"

const Availability = () => {
  const { t } = useTranslation("about:sub.availability");
  const imgSrc =
    availabilityStatus === "available"
      ? "/images/illustration/opentowork.png"
      : "/images/illustration/unavailablework.png";

  return (
    <section
      id="status"
      className="border-2 border-black md:border-t-0 md:border-r-0 md:border-b-0 p-4 h-full flex flex-col md:col-span-2"
    >
      <h5 className="text-center">{t("title", "Availability Status")}</h5>
      <h2 className="tracking-widest text-center my-4 blurred-ink">
        <Trans
          i18nKey="about:sub.availability.headline"
          components={inkComponents}
        />
      </h2>
      <div className="flex-1 flex flex-col sm:flex-row md:flex-col items-center gap-4">
        <div className="pb-3">
          <img
            src={imgSrc}
            alt={t(
              `${availabilityStatus}.img_alt`,
              "Developer declares ready to work",
            )}
            className="object-cover h-auto w-60 sm:max-w-50 md:max-w-5/6 mx-auto"
          />
        </div>
        <article className="text-sm leading-relaxed flex-1 text-center sm:text-left">
          <h3 className="text-lg pb-1">
            {t(
              `${availabilityStatus}.lead`,
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
