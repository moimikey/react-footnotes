# 👣 react-footnotes

Dead simple footnotes, in React!
Works with React 18!

- Removes `react-tree-walker` for a super tiny, pure component with no side-effects!
- Doesn't alter wrapped element (NO EXTRA divs or spans!)
- Automatic number increments for each Footnote
- Automatic footnote anchoring and linking

## Authors

- [@moimikey](https://www.github.com/moimikey)

## Demo

Insert gif or link to demo

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Installation

```sh
npm install react-footnotes
# OR
yarn add react-footnotes
# OR
pnpm install react-footnotes
# OR
bun install react-footnotes
```

## Usage/Examples

### 1. Import the `Footnotes` component

```js
// esmodules
import { Footnotes } from "react-footnotes";

// commonjs
const { Footnotes } = require("react-footnotes");
```

### 2. Use the built-in Footnote component, or make your own

```tsx
{({ Footnote, FootnotesProvider, footnotes }) => {
  return (
    <FootnotesProvider>
      <Footnote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Footnote>{" "}
      ...
```

or create your own:

```jsx
function SpecialFootnote({ children, id }) {
  return (
    <React.Fragment key={`footnote-${id}}`}>
      {children}
      <a rel="footnote" href={`#footnote-${id}`} id={`footnote-link-${id}`}>
        <sup>{id}</sup>
      </a>
    </React.Fragment>
  );
}
...
{({ FootnotesProvider, footnotes }) => {
  return (
    <FootnotesProvider>
      <SpecialFootnote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SpecialFootnote>
      ...
```

### 3. Render it

```tsx
export function App() {
  return (
    <ErrorBoundary>
      <Footnotes>
        {({ FootnotesProvider, footnotes }) => {
          return (
            <FootnotesProvider>
              <SpecialFootnote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </SpecialFootnote>{" "}
              <Footnote>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Footnote>{" "}
              <hr />
              References: should only show {footnotes.size}
              {Array.from(footnotes).map(([id, footnote]: FootnoteEntry) => {
                return (
                  <div id={`footnote-${id}`} key={`footnote-fragment-${id}`}>
                    <a
                      href={`#footnote-link-${id}`}
                      key={`footnote-link-${id}`}
                    >
                      <sup>{id}</sup>
                    </a>{" "}
                    {footnote}
                  </div>
                );
              })}
            </FootnotesProvider>
          );
        }}
      </Footnotes>
    </ErrorBoundary>
  );
}
```

## Run Locally

Clone the project

```sh
git clone git@github.com:moimikey/react-footnotes.git
```

Go to the project directory

```sh
cd react-footnotes
```

Install dependencies

```sh
pnpm install
```

Start the server

```sh
pnpm dev
```

## Running Tests

To run tests, run the following command

```sh
pnpm run test
```

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
