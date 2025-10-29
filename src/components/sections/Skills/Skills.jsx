import { useTranslation } from "react-i18next";
// import HardSkills from "./HardSkills";
// import SoftSkills from "./SoftSkills";
import SubSkills from "./SubSkills";

export default function Skills() {
  const { t } = useTranslation("skills");

  return (
    <article id="classifieds" className="border-2 border-black relative">
      <h3 className="text-3xl uppercase tracking-wider mb-2 border-b-2 border-black pb-2 text-center px-8">
        {t("sub.classifieds.headline")}
      </h3>
      <div>
        <SubSkills
          type="technical"
          titleKey="sub.classifieds.technical.title"
          headlineKey="sub.classifieds.technical.headline"
        />

        <SubSkills
          type="softskills"
          titleKey="sub.classifieds.softskills.title"
          headlineKey="sub.classifieds.softskills.headline"
        />
      </div>
      {/* Footer */}
      <div className="my-6 text-xs text-center italic">
        <p>
          Interested? Contact the
          <span className="font-bold">
            <a href="mail-in" className="filler-text ink-blot">
              press at page E1
            </a>
          </span>{" "}
          for inquiries
        </p>
      </div>
    </article>
  );
}
