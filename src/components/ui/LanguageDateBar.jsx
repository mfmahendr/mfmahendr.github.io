import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const LanguageDateBar = () => {
  const { t, i18n } = useTranslation("common");
  const [dateParts, setDateParts] = useState({});

  useEffect(() => {
    const now = new Date();
    const day = now.getDate();
    const year = now.getFullYear();
    const lang = i18n.language;

    const isIndonesian = lang === "id";

    if (isIndonesian) {
      const shortOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      const longOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const shortDate = now
        .toLocaleDateString("id-ID", shortOptions)
        .toUpperCase()
        .replace(/\./g, "");
      const longDate = now
        .toLocaleDateString("id-ID", longOptions)
        .toUpperCase();

      const [shortWeekday, shortRest] = shortDate.split(",");
      const [, shortMonth] = shortRest.trim().split(" ");

      const [longWeekday, longRest] = longDate.split(",");
      const [, longMonth] = longRest.trim().split(" ");

      setDateParts({
        isIndonesian: true,
        shortWeekday: shortWeekday.trim(),
        longWeekday: longWeekday.trim(),
        day,
        shortMonth: shortMonth.trim(),
        longMonth: longMonth.trim(),
        year,
      });
    } else {
      const weekdayShort = now
        .toLocaleDateString("en-US", { weekday: "short" })
        .toUpperCase();
      const weekdayLong = now
        .toLocaleDateString("en-US", { weekday: "long" })
        .toUpperCase();
      const monthShort = now
        .toLocaleDateString("en-US", { month: "short" })
        .toUpperCase();
      const monthLong = now
        .toLocaleDateString("en-US", { month: "long" })
        .toUpperCase();

      const ordinal = (d) => {
        const s = ["TH", "ST", "ND", "RD"];
        const v = d % 100;
        return d + (s[(v - 20) % 10] || s[v] || s[0]);
      };

      setDateParts({
        isIndonesian: false,
        weekdayShort,
        weekdayLong,
        monthShort,
        monthLong,
        dayOrdinal: ordinal(day),
        year,
      });
    }
  }, [i18n.language]);

  const handleLanguageChange = (e) => {
    console.log(
      "%c[INFO]%c: Language switched to " + e.target.value,
      "color: #8b5a2b; font-weight: bold;",
      "color: initial;",
    );
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="border-t-2 border-b-4 border-black border-double pt-1 pb-2">
      <div className="flex justify-between items-center mt-1 text-xs md:text-sm font-medium text-black">
        {/* Language Selector */}
        <select
          aria-label="Select language"
          value={i18n.language}
          onChange={handleLanguageChange}
          className="ml-3 border border-[#8b5a2b] rounded-none py-1.5 px-8 pr-8 text-xs text-gray-800 cursor-pointer 
             appearance-none shadow-[2px_2px_0_rgba(0,0,0,0.2)] 
             hover:bg-[#e8e0d0] hover:shadow-[0_0_1px_rgba(0,0,0,0.3)] 
             bg-[right_8px_center]"
        >
          <option value="en" className="bg-black text-[#ffe9a7] italic px-auto">
            {t("language.english")}
          </option>
          <option value="id" className="bg-black text-[#ffe9a7] italic px-auto">
            {t("language.indonesian")}
          </option>
        </select>

        {/* Site established info */}
        <p className="italic text-center flex-1 hidden md:block">
          {t("site_est")}
        </p>

        {/* Date Display */}
        <div
          id="newspaper-date"
          className="newspaper-date px-3 py-1 text-xs font-bold whitespace-nowrap"
        >
          {dateParts.isIndonesian ? (
            <>
              {/* Desktop: "RABU, 24 JULI 2024" */}
              <span className="hidden md:inline">
                {dateParts.longWeekday},{" "}
              </span>
              {dateParts.day}{" "}
              <span className="hidden md:inline">{dateParts.longMonth}</span>
              {/* Mobile: "RAB, 24 JUL 2024" */}
              <span className="md:hidden">{dateParts.shortMonth}</span>{" "}
              {dateParts.year}
            </>
          ) : (
            <>
              {/* Desktop: "WEDNESDAY, JULY 24TH, 2024" */}
              <span className="hidden md:inline">
                {dateParts.weekdayLong},{" "}
              </span>
              <span className="hidden md:inline">{dateParts.monthLong}</span>
              {/* Mobile: "WED, JUL 24TH, 2024" */}
              <span className="md:hidden">{dateParts.monthShort}</span>{" "}
              <span>{dateParts.dayOrdinal}, </span>
              {dateParts.year}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageDateBar;
