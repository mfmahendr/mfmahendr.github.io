export const ProjectCard = ({ project }) => {
  const { title, short, description, tags, source, live } = project;

  return (
    <div className="border-2 border-black p-0 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[3px_3px_0_rgba(0,0,0,0.1)]">
      {/* Header Area */}
      <div className="h-48 border-b-2 border-black p-4 relative">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm italic">{short}</p>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="mb-4">{description}</p>

        {/* Tags */}
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
        <div className="flex flex-wrap gap-3">
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:text-[#ffe9a7] text-white text-xs px-4 py-1 rounded-none border border-black shadow-md transition-all duration-300 transform hover:scale-105"
            >
              SOURCE CODE
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-[#ffe9a7] text-xs px-4 py-1 rounded-none border border-black shadow-md transition-all duration-300 transform hover:scale-105"
            >
              LIVE DOCS
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
