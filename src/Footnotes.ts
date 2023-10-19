import React, { useEffect, ReactNode, useState, useRef } from "react";
import walker from "react-tree-walker";

export function Footnote({
  children,
  id,
}: {
  children: ReactNode;
  id: number;
}) {
  return React.createElement(React.Fragment, { key: id }, children);
}

Footnote.displayName = "Footnote";

export type FootnoteEntry = [number, ReactNode];
export type FootnotesChildren = (props: {
  Footnote: typeof Footnote;
  footnotes: Map<number, ReactNode>;
}) => ReactNode;

export function Footnotes(props: { children: FootnotesChildren }) {
  const initialized = useRef(false);
  const [footnotes, setFootnotes] = useState<Map<number, ReactNode>>(new Map());
  const newFootnotes = new Map<number, ReactNode>();

  const visit = (el: any) => {
    if (el.type && el.type.displayName === "Footnote") {
      const footnoteContent = Array.isArray(el.props.children)
        ? el.props.children[0]
        : el.props.children;
      newFootnotes.set(newFootnotes.size + 1, footnoteContent);
      setFootnotes(newFootnotes);
    }
  };

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      walker(props.children({ Footnote, footnotes: newFootnotes }), visit);
    }
  }, []);

  return props.children({ Footnote, footnotes });
}

Footnotes.displayName = "Footnotes";

export default Footnotes;
