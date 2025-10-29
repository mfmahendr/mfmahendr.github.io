import { useTranslation } from "react-i18next";
import linkedinLogo from "../../../assets/images/common/linkedin.svg";
import githubLogo from "../../../assets/images/common/github.svg";
// import igLogo from "././assets/images/common/instagram.svg";

export default function SocialPages() {
  const { t } = useTranslation("contact");
  return (
    <article className="md:col-span-3 space-y-6">
      <div className="p-4 border-2 border-black">
        <h3 className="text-lg mb-3 font-serif flex items-center">
          {t("sub.social.headline")}
        </h3>
        <ul className="text-sm space-y-2">
          <li className="flex items-center space-x-2">
            <a
              href="https://linkedin.com/in/m-fadhil-mahendra"
              className="underline hover:text-blue-600 flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="w-4 h-4" />
              <span>LinkedIn:</span>
              <span>/in/m-fadhil-mahendra</span>
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a
              href="https://github.com/mfmahendr"
              className="underline hover:text-blue-600 flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="GitHub" className="w-4 h-4" />
              <span>GitHub:</span>
              <span>@mfmahendr</span>
            </a>
          </li>
          {/* <li className="flex items-center space-x-2">
                    <a href="https://instagram.com/by.fadhil"
                        className="underline hover:text-blue-600 flex items-center space-x-2" target="_blank"
                        rel="noopener noreferrer">
                        <img src={igLogo} alt="LinkedIn" className="w-4 h-4" />
                        <span>Instagram:</span>
                        <span>@by.fadhil</span>
                    </a>
                </li> */}
        </ul>
      </div>

      <div className="p-4 border-2 border-black">
        <h3 className="text-lg mb-3 font-serif border-b border-black pb-1">
          {t("sub.social.web_headline")}
        </h3>
        <a
          href="https://www.mfadhilmahendra.my.id"
          className="text-sm hover:text-blue-600 underline text-center block"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.mfadhilmahendra.my.id
        </a>
        <p className="text-xs italic text-right">
          (Est. <span className="filler-text ink-smudge">2025</span>)
        </p>
      </div>
    </article>
  );
}
