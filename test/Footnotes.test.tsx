/**
 * @jest-environment jsdom
 */
// ^^^^^^^^^^^^^^^^^^^^^^^ DO NOT REMOVE
import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Footnotes } from "../src";

let container: Element | null = null;

beforeEach(() => {
  if (!container) {
    container = document.createElement("div");
    document.body.appendChild(container);
  }
});

afterEach(() => {
  if (container) {
    document.body.removeChild(container);
    container = null;
  }
});

/**
 * NOTE: WRAP YOUR RENDERS IN <React.StrictMode> TO ENSURE IDEMPOTENCE!
 */

it("collects and provides footnotes correctly", async () => {
  let collectedFootnotes;
  const testFootnoteA =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const testFootnoteB =
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  await act(() => {
    if (!container) {
      throw Error("Missing `container` element in DOM!");
    }
    createRoot(container).render(
      <React.StrictMode>
        <Footnotes>
          {({ Footnote, footnotes }) => {
            collectedFootnotes = footnotes;
            return (
              <React.Fragment>
                <Footnote id={1}>{testFootnoteA}</Footnote>
                <Footnote id={2}>{testFootnoteB}</Footnote>
              </React.Fragment>
            );
          }}
        </Footnotes>
      </React.StrictMode>
    );
  });
  expect(collectedFootnotes.size).toBe(2);
  expect(collectedFootnotes.get(1)).toBe(testFootnoteA);
  expect(collectedFootnotes.get(2)).toBe(testFootnoteB);
});

it("collects and provides footnotes correctly", async () => {
  const testFootnoteA =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const testFootnoteB =
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const expectedOutput = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<div id=\"footnote-1\"><sup>1</sup> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div><div id=\"footnote-2\"><sup>2</sup> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>`;

  await act(() => {
    if (!container) {
      throw Error("Missing `container` element in DOM!");
    }
    createRoot(container).render(
      <React.StrictMode>
        <Footnotes>
          {({ Footnote, footnotes }) => {
            return (
              <React.Fragment>
                <Footnote id={1}>{testFootnoteA}</Footnote>
                <Footnote id={2}>{testFootnoteB}</Footnote>
                {Array.from(footnotes).map(([id, footnote]) => (
                  <div key={`footnote-${id}`} id={`footnote-${id}`}>
                    <sup>{id}</sup> {footnote}
                  </div>
                ))}
              </React.Fragment>
            );
          }}
        </Footnotes>
      </React.StrictMode>
    );
  });
  expect(container?.innerHTML).toBe(expectedOutput);
});
