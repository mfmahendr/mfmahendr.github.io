import { InkSpan } from "../../components/ui/InkSpan";

export const inkComponents = {
  filler: <InkSpan effects={["filter-text"]} />,
  faded: <InkSpan effects={["faded"]} />,
  smudge: <InkSpan effects={["smudge"]} />,
  blurred: <InkSpan effects={["blurred"]} />,
  blot: <InkSpan effects={["blot"]} />,
};

export const textComponents = {
  b: <span className="font-bold" />,
  i: <span className="italic" />,
  bi: <span className="font-bold italic" />,
  u: <span className="underline" />,
  biu: <span className="font-bold italic underline" />,
};
