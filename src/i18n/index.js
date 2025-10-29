import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// translations
import enCommon from "./locales/en/common.json";
import enHero from "./locales/en/hero.json";
import enAbout from "./locales/en/about.json";
import enInterests from "./locales/en/interests.json";
import enSkills from "./locales/en/skills.json";
import enProjects from "./locales/en/projects.json";
import enContact from "./locales/en/contact.json";

import idCommon from "./locales/id/common.json";
import idHero from "./locales/id/hero.json";
import idAbout from "./locales/id/about.json";
import idInterests from "./locales/id/interests.json";
import idSkills from "./locales/id/skills.json";
import idProjects from "./locales/id/projects.json";
import idContact from "./locales/id/contact.json";

const resources = {
  en: {
    common: enCommon,
    hero: enHero,
    about: enAbout,
    interests: enInterests,
    skills: enSkills,
    projects: enProjects,
    contact: enContact,
  },
  id: {
    common: idCommon,
    hero: idHero,
    about: idAbout,
    interests: idInterests,
    skills: idSkills,
    projects: idProjects,
    contact: idContact,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    // debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    ns: [
      "common",
      "hero",
      "about",
      "interests",
      "skills",
      "projects",
      "contact",
    ],
  });

export default i18n;
