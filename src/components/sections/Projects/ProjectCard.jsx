export const ProjectCard = ({ project }) => {
  const {
    title,
    short,
    description,
    tags,
    source,
    sources,
    live_docs,
    live_apps,
    release,
  } = project;

  const links = [
    source && {
      label: "Source Code",
      url: source,
    },
    sources?.frontend && {
      label: "FE Code",
      url: sources.frontend,
    },
    sources?.backend && {
      label: "BE Code",
      url: sources.backend,
    },
    live_docs && {
      label: "Docs",
      url: live_docs,
    },
    live_apps && {
      label: "Live",
      url: live_apps,
    },
    release && {
      label: "Release",
      url: release,
    },
  ].filter(Boolean);

  return (
    <div className="border-2 border-black p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[3px_3px_0_rgba(0,0,0,0.1)]">
      <div className="h-48 border-b-2 border-black p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm italic">{short}</p>
      </div>

      <div className="p-4">
        <p className="mb-4">{description}</p>

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-bold border border-black"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        {links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {links.map(({ label, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-black text-white hover:text-[#ffe9a7] text-xs px-4 py-1 border border-black shadow-md transition-all hover:scale-105"
              >
                {label}
                <span aria-hidden className="text-[10px] leading-none">
                  ↗
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
