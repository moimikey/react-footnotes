"use strict";
import React, {
  Children,
  cloneElement,
  createContext,
  ElementType,
  ReactNode,
  useRef,
  useState,
} from "react";

export type FootnoteEntry = [number, ElementType];
export type FootnotesMap = Map<number, FootnoteEntry>;
export type FootnotesCallback = (props: {
  Footnote: ElementType;
  FootnotesProvider: React.Provider<FootnotesMap>;
  footnotes: FootnotesMap;
}) => ElementType;

export const FootnoteContext = createContext(0);

export function Footnote({
  children,
  id,
}: {
  children: ReactNode;
  id: number;
}): ReactNode {
  return (
    <React.Fragment key={`footnote-${id}}`}>
      {children}
      <a href={`#footnote-${id}`} id={`footnote-link-${id}`}>
        <sup>{id}</sup>
      </a>
    </React.Fragment>
  );
}

Footnote.displayName = "WrappedFootnote";

export const FootnotesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  let index = 0;
  const numberedChildren = Children.map(
    children,
    (child) => {
      if (child?.type?.name !== "Footnote") {
        return child;
      }
      return cloneElement(child, {
        id: ++index,
        key: `footnote-sorted-${index}`,
      });
    },
  );
  return (
    <FootnoteContext.Provider value={0}>
      {numberedChildren}
    </FootnoteContext.Provider>
  );
};

export function Footnotes(props: {
  children: FootnotesCallback;
}): ElementType {
  const children = props.children;
  const initialized = useRef<boolean>(false);
  const [footnotes, setFootnotes] = useState<FootnotesMap>(new Map());
  const newFootnotes = new Map<number, FootnoteEntry>();

  const visit = (el) => {
    if (el.type?.name === "Footnote") {
      const footnoteContent = Array.isArray(el.props.children)
        ? el.props.children[0]
        : el.props.children;
      newFootnotes.set(newFootnotes.size + 1, footnoteContent);
      setFootnotes(newFootnotes);
    }
  };

  function walker(node, visitor) {


    if (node.props && node.props.children) {
      const children = Array.isArray(node.props.children) ? node.props.children : [node.props.children];
      const withFootnotesOnly = (footnote) => {
        return footnote.type?.name === 'Footnote'
      }
      children.filter(withFootnotesOnly).forEach(child => {
        if (child && child.type) {
          visitor(child);
          walker(child, visitor);
        }
      });
    }
  }

  if (!initialized.current) {
    initialized.current = true;
    walker(children({ Footnote, FootnotesProvider, footnotes }), visit);
  }

  return children({ Footnote, FootnotesProvider, footnotes });
}
Footnotes.displayName = "Footnotes";

export default Footnotes;
