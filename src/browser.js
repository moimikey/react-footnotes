import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Footnotes from './Footnotes'

const Browser = React.createElement(
  Footnotes,
  null,
  function (_ref) {
    var Footnote = _ref.Footnote,
        getFootnotes = _ref.getFootnotes;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        Footnote,
        { i: 1, source: "https://google.com", desc: "this is a description." },
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      ),
      React.createElement(
        Footnote,
        { i: 2, source: "https://google.com", desc: "this is a description." },
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ),
      React.createElement(
        Footnote,
        { i: 3, source: "https://google.com", desc: "this is a description." },
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ),
      React.createElement(
        Footnote,
        { i: 4, source: "https://google.com", desc: "this is a description." },
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ),
      React.createElement(
        "code",
        null,
        JSON.stringify(getFootnotes())
      )
    );
  }
);

ReactDOM.render(Browser, document.body)
