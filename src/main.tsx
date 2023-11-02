"use strict";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Footnotes, FootnoteEntry } from ".";
import { ErrorBoundary } from "../lib/ErrorBoundary";
import "./index.css";

export function Footnote({
  children,
  id,
}: {
  children;
  id: number;
}) {
  return (
    <React.Fragment key={`footnote-${id}}`}>
      {children}
      <a rel="footnote" href={`#footnote-${id}`} id={`footnote-link-${id}`}>
        <sup>{id}</sup>
      </a>
    </React.Fragment>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <Footnotes>
        {({ FootnotesProvider, footnotes }) => {
          return (
            <FootnotesProvider>
              <Footnote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Footnote>{" "}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
              <Footnote>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </Footnote>{" "}
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia <Footnote>deserunt mollit anim id est laborum.</Footnote>{" "}
              <Footnote>Lorem ipsum</Footnote>
              <hr />
              References: should only show {footnotes.size}
              {Array.from(footnotes).map(([id, footnote]: FootnoteEntry) => {
                // console.log(id, footnote);
                return (
                  <div id={`footnote-${id}`} key={`footnote-fragment-${id}`}>
                    <a href={`#footnote-link-${id}`} key={`footnote-link-${id}`}>
                      <sup>{id}</sup>
                    </a>
                    {" "} {footnote}
                  </div>
                )
              })}
            </FootnotesProvider>
          );
        }}
      </Footnotes>
    </ErrorBoundary>
  );
}

const root = document.getElementById("root") as HTMLElement;

root.childNodes.length ||
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
