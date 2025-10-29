import React, { useMemo, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { stampTags, stamps } from "../../../assets/data/skillStamps";
import Stamp from "./Stamp";
import { inkComponents, textComponents } from "../../../i18n/utils/Components";

const logos = import.meta.glob("../../../assets/images/tools/*", {
  eager: true,
  query: "?url",
  import: "default",
});
export default function Tools() {
  const { t } = useTranslation("skills");

  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredStamps = useMemo(() => {
    if (selectedTags.length === 0) return stamps;
    return stamps.filter((stamp) =>
      selectedTags.every((tag) =>
        stamp.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()),
      ),
    );
  }, [selectedTags]);

  const suggestions = useMemo(() => {
    const filtered = stampTags.filter((tag) => {
      if (tag === "All") return false;
      return tag.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return filtered.filter((tag) => !selectedTags.includes(tag));
  }, [searchTerm, selectedTags]);

  const handleAddTag = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
      setSearchTerm("");
      setShowSuggestions(false);
    }
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const handleClearAll = () => {
    setSelectedTags([]);
    setSearchTerm("");
    setShowSuggestions(false);
  };

  const logoMap = Object.fromEntries(
    Object.entries(logos).map(([fullPath, url]) => {
      const filename = fullPath.split("/").pop(); // "mysql-white.svg"
      return [filename, url];
    }),
  );

  return (
    <article id="tools" className="relative z-0 border-2 border-black p-6">
      {/* decorative elements */}
      <div className="absolute top-2 left-2 w-12 h-12 border-t-4 border-l-4"></div>

      {/* header */}
      <div className="relative z-10 text-center mb-8">
        <h5 className="text-center">
          {t("sub.tools.title", "Tech and Tools")}
        </h5>
        <h3 className="text-3xl uppercase tracking-wider mb-2 border-b-2 border-black pb-2 inline-block px-8">
          {t("sub.tools.headline", "Stamp Exchange")}
        </h3>
        <p className="text-base italic max-w-2xl mx-auto">
          <Trans
            i18nKey="skills:sub.tools.intro"
            components={{ ...textComponents }}
          />
        </p>
      </div>

      {/* === Filter Bar === */}
      <div className="relative flex flex-wrap items-center justify-center gap-2 mb-8">
        <button
          onClick={handleClearAll}
          className={`border border-black px-3 py-1 text-sm font-medium transition-all duration-200 ${
            selectedTags.length === 0
              ? "bg-black text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          All
        </button>

        {/* searchable Tag Input */}
        <div className="relative flex flex-wrap items-center border border-black rounded-md px-2 py-1 bg-white w-[280px] sm:w-[340px]">
          {selectedTags.map((tag) => (
            <div
              key={tag}
              className="flex items-center bg-black text-white text-xs px-2 py-1 rounded mr-1 mb-1"
            >
              <span>{tag}</span>
              <button
                onClick={() => handleRemoveTag(tag)}
                className="ml-1 text-white hover:text-red-400"
              >
                ✕
              </button>
            </div>
          ))}

          <input
            type="text"
            value={searchTerm}
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={selectedTags.length === 0 ? "Filter by tags..." : ""}
            className="flex-grow text-sm outline-none py-1 min-w-[100px]"
          />

          {/* dropdown suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border border-black mt-1 max-h-40 overflow-y-auto z-20 shadow-md text-sm">
              {suggestions.map((tag) => (
                <li
                  key={tag}
                  onClick={() => handleAddTag(tag)}
                  className="px-3 py-1 hover:bg-black hover:text-white cursor-pointer"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Stamp Items */}
      <div className="flex flex-wrap relative gap-[1.2rem_0.7rem] justify-center items-stretch">
        {filteredStamps.map((stamp, index) => (
          <Stamp key={index} stamp={stamp} logoMap={logoMap} />
        ))}
      </div>

      {/* closing */}
      <div className="mt-8 pt-4 border-t-2 border-dashed border-black text-center italic text-sm">
        <p>
          <Trans i18nKey="skills:sub.tools.footer" components={inkComponents} />
        </p>
      </div>
    </article>
  );
}
