import React from "react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  const { t } = useTranslation("projects");
  const projects = t("projects", { returnObjects: true });

  return (
    <section id="projects" className="mb-12">
      {/* Header */}
      <div className="border-b-2 border-black mb-6">
        <h5 className="mb-2">{t("title", "Projects")}</h5>
        <h2>{t("headline", "Featured Articles")}</h2>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects?.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
