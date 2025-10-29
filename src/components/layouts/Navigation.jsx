import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useStickyNav } from "../../hooks/useStickyNav";

const Navigation = ({ heroRef }) => {
  const { t } = useTranslation();
  const { isHidden } = useStickyNav(heroRef);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-transform duration-300 ease-in-out
        bg-[var(--paper-bg)] backdrop-blur-lg
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4),0_2px_4px_-1px_rgba(0,0,0,0.3)] ${isHidden ? "hidden" : ""}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold font-newspaper-title">
            {t("common:site_title")}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 relative">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="nav-link group">
                <span className="relative z-10">{t(`${item.key}:title`)}</span>
                <svg className="nav-underline" viewBox="0 0 152.9 43.4">
                  <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
                </svg>
                <span className="alt-title">{t(`${item.key}:headline`)}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block py-2 px-4 border-b border-gray-200 hover:bg-amber-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(`${item.key}:title`)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
