export function ImageWithAttribution({
  src,
  alt,
  caption,
  attribution,
  figureClassName = "",
  imgClassName = "",
  captionClassName = "",
}) {
  const hasLink = Boolean(attribution?.source?.url);

  const Icon = (
    <span
      aria-label="Copyright information"
      className="
        inline-flex items-center justify-center
        w-3.5 h-3.5 rounded-full
        border border-current text-[9px] font-semibold
        cursor-pointer select-none
      "
    >
      ©
    </span>
  );

  return (
    <figure className={`group relative ${figureClassName}`}>
      <img
        src={src}
        alt={alt}
        className={`
          grayscale transition
          group-hover:grayscale-0
          ${imgClassName}
        `}
      />

      {(caption || attribution) && (
        <figcaption
          className={`
            p-2 text-center text-xs italic
            flex items-center justify-center gap-1
            ${captionClassName}
          `}
        >
          {caption && <span>{caption}</span>}

          {attribution && (
            <div className="relative group/info not-italic">
              {hasLink ? (
                <a
                  href={attribution.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Icon}
                </a>
              ) : (
                Icon
              )}

              <div
                className="
                  absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                  hidden group-hover/info:block
                  w-64 rounded-md bg-black text-white
                  p-2 text-xs shadow-lg z-10
                "
              >
                <div>Author: {attribution.author}</div>
                <div>Source: {attribution.source.label}</div>
                <div>License: {attribution.license}</div>
              </div>
            </div>
          )}
        </figcaption>
      )}
    </figure>
  );
}
