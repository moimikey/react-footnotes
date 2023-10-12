"use strict";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Footnotes, FootnoteEntry } from ".";
import "./index.css";

const createFootnoteComponentWith = (FootnoteComponent: React.ElementType) => {
  return ({ children, id }: { children: React.ReactNode; id: number }) => {
    return (
      <FootnoteComponent>
        {children}
        <a href={`#footnote-${id}`}>
          <sup>{id}</sup>
        </a>
      </FootnoteComponent>
    );
  };
};

export function App() {
  return (
    <Footnotes>
      {({ Footnote, footnotes }) => {
        const Note = createFootnoteComponentWith(Footnote);
        return (
          <React.Fragment>
            <Note id={15}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Note>{" "}
            <Note id={22}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Note>{" "}
            <Note id={35}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </Note>{" "}
            <Note id={42}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Note>{" "}
            <Note id={0}>Lorem ipsum</Note> <hr />
            References: should only show {footnotes.size}
            {Array.from(footnotes).map(([id, footnote]: FootnoteEntry) => (
              <div key={`footnote-${id}`} id={`footnote-${id}`}>
                <sup>{id}</sup> {footnote}
              </div>
            ))}
          </React.Fragment>
        );
      }}
    </Footnotes>
  );
}

let root = document.getElementById("root") as HTMLElement;

root.childNodes.length ||
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
