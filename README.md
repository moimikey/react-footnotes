# 👣 react-footnotes

dead simple footnotes, in React

## Installation

```sh
npm install --save react-footnotes
yarn add react-footnotes
```

```js
// esmodules
import { Footnotes } from 'react-footnotes'

// commonjs
var Footnotes = require('react-footnotes').Footnotes
```

## Usage

Pass any props you want to read from `getFootnotes`, to `Footnote`.

```jsx
import * as React from 'react'
import * as Footnotes from 'react-footnotes'

class App extends React.Component {
  render() {
    return (
      <Footnotes>
        {({ Footnote, getFootnotes }) => (
          <React.Fragment>
            <Footnote i={1} desc={`this is a description.`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Footnote> Text that doesnt need to be footnoted, can be passed as normal text.
            <Footnote i={2} desc={`this is a description.`}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Footnote>
            <Footnote i={3} desc={`this is a description.`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Footnote>
            <Footnote i={4} desc={`this is a description.`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Footnote>
            <ol>
              {Object.keys(getFootnotes()).map((i) => {
                return (
                  <li key={`footnote-${i}`} id={`footnote-${i}`}>{getFootnotes()[i].desc}</li>
                )
              })}
            </ol>
          </React.Fragment>
        )}
      </Footnotes>
    )
  }
}
```

## TODO

- [ ] automatically generate the index number so it doesn't have to be passed manually

## Development

```sh
npm run dev

# go to http://localhost:1234
```

### Distribution

```sh
npm run build
```
