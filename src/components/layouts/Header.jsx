import { useTranslation } from "react-i18next";
import Hero from "../ui/Hero.jsx";
import ContentGuide from "../ui/ContentGuide.jsx";
import LanguageDateBar from "../ui/LanguageDateBar.jsx";

const Header = ({ heroRef }) => {
  const { t } = useTranslation("common");

  return (
    <header ref={heroRef} className="border-b-4 border-black relative">
      <div id="home" className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1>{t("site_title")}</h1>
          <p className="italic text-center block md:hidden">{t("site_est")}</p>
          <LanguageDateBar />
        </div>

        <article className="mt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <Hero />
          <ContentGuide />
        </article>
      </div>
    </header>
  );
};

export default Header;
