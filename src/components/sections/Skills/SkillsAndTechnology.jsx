import Skills from "./Skills";
import Tools from "./Tools";
import { useTranslation } from "react-i18next";

export default function SkillsAndTechnology() {
  const { t } = useTranslation("skills");
  return (
    <section id="skills" className="md:col-span-8">
      {/* Header */}
      <div className="relative py-4">
        <h5 className="mb-2">{t("title")}</h5>
        <h2>{t("headline")}</h2>
        <div className="absolute bottom-0 left-0 right-0 flex">
          <div className="h-1 bg-black w-8"></div>
          <div className="h-1 bg-black flex-grow"></div>
          <div className="h-1 bg-black w-8"></div>
          <div className="h-1 bg-black flex-grow"></div>
          <div className="h-1 bg-black w-8"></div>
        </div>
      </div>

      <Skills />
      <Tools />
    </section>
  );
}
