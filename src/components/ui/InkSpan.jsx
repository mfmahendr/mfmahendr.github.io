export const InkSpan = ({ effects = [], children }) => {
  const className = effects
    .map((e) => {
      switch (e) {
        case "faded":
          return "faded-ink";
        case "smudge":
          return "ink-smudge";
        case "blurred":
          return "blurred-ink";
        case "blot":
          return "ink-blot";
        case "filter":
          return "filler-text";
        default:
          return "";
      }
    })
    .join(" ");

  return <span className={className}>{children}</span>;
};
