import React, {
  JSXElementConstructor,
  ReactElement,
  useRef,
  useState,
} from "react";
import walker from "react-tree-walker";

export function Footnote({
  children,
  id,
}: {
  children: ReactElement;
  id: number;
}) {
  return React.createElement(React.Fragment, { key: id }, children);
}
Footnote.displayName = "Footnote";

export type FootnoteEntry = [number, ReactElement];
export type FootnotesChildren = (props: {
  Footnote: typeof Footnote;
  footnotes: Map<number, ReactElement>;
}) => ReactElement;

export function Footnotes(props: {
  children: FootnotesChildren;
}): ReactElement<any, string | JSXElementConstructor<any>> {
  const initialized = useRef(false);
  const [footnotes, setFootnotes] = useState<Map<number, ReactElement>>(
    new Map()
  );
  const newFootnotes = new Map<number, ReactElement>();

  const visit = (el: any) => {
    if (el.type && el.type.displayName === "Footnote") {
      const footnoteContent = Array.isArray(el.props.children)
        ? el.props.children[0]
        : el.props.children;
      newFootnotes.set(newFootnotes.size + 1, footnoteContent);
      setFootnotes(newFootnotes);
    }
  };

  if (!initialized.current) {
    initialized.current = true;
    walker(props.children({ Footnote, footnotes: newFootnotes }), visit);
  }

  return props.children({ Footnote, footnotes });
}
Footnotes.displayName = "Footnotes";

export default Footnotes;
