# 👣 react-footnotes

Dead simple footnotes, in React!

- Doesn't alter wrapped element or add any extra divs or spans
- Automatically increments footnote identifier number with every new footnote

## New in 1.0!

- Smaller package size
- Uses Vite

## Usage

### Install react-footnotes to your project

```sh
npm install react-footnotes
# OR
yarn add react-footnotes
# OR
pnpm install react-footnotes
# OR
bun install react-footnotes
```

### Import the `Footnotes` component

```js
// esmodules
import { Footnotes } from 'react-footnotes'

// commonjs
const Footnotes = require('react-footnotes').Footnotes
```

### In the same file, create a wrapper component for single Footnotes

**Example:**
*This let's you customize each footnote line*
> Lorem ipsum dolor sit amet, consectetur adipiscing elit.^1^

```tsx
const createFootnoteComponentWith = (Component: React.ElementType) => {
  return ({ children, id }: { children: React.ReactNode; id: number }) => {
    return (
      <Component>
        {children}
        <a href={`#footnote-${id}`}> {/* perhaps use Link instead? */}
          <sup>{id}</sup>            {/* maybe <sub> instead? */}
        </a>
      </Component>
    );
  };
};
```

### Finally, render Footnotes! :)

```tsx
 <Footnotes>
  {({ Footnote, getFootnotes }) => {
    const footnotes = getFootnotes();
    const Note = createFootnoteComponentWith(Footnote);
    return (
      <React.Fragment>
        <Note key={`note-1`} id={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Note>{" "}
        <Note key={`note-2`} id={2}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </Note>{" "}
        <Note key={`note-3`} id={3}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </Note>{" "}
        <Note key={`note-4`} id={4}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </Note>{" "}
        <hr />
        References: should only show {footnotes.size} footnotes
        {Array.from(footnotes).map(
          ([noteId, footnote]: FootnoteEntry) => (
            <div key={`footnote-${noteId}`} id={`footnote-${noteId}`}>
              <sup>{noteId}</sup>: {footnote}
            </div>
          )
        )}
      </React.Fragment>
    );
  }}
</Footnotes>
```

### Create

Pass any props you want to read from `getFootnotes`, to `Footnote`.

```jsx
import * as React from 'react'
import { Footnotes } from 'react-footnotes'

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
              {Object.keys(getFootnotes()).map(i => {
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

- [ ] automatically generate the index number so it doesn't have to be passed manually...

## Development

```sh
# go to http://localhost:1234
npm run dev
```


{
  /*{Object.keys(footnotes).map((id, index) => {
  const footnote = footnotes[index];
  return footnote ? (
    <div key={`footnote-${id}-${index}`} id={`footnote-${id}`}>{id} xxx {JSON.stringify(footnote)}</div>
  ) : null
})}*/
}
