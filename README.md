# 👣 react-footnotes

Dead simple footnotes, in React!

- Doesn't alter wrapped element or add any extra divs or spans
- Automatically increments footnote identifier number with every new footnote

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
import { Footnotes } from 'react-footnotes'

// commonjs
const Footnotes = require('react-footnotes').Footnotes
```

### 2. Create a wrapper `Footnote` component

*This let's you customize each footnote line:*

> **Example**
> Lorem ipsum dolor sit amet, consectetur adipiscing elit.^1^
>

```tsx
export const createFootnoteComponentWith = (Component: React.ElementType) => {
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

### 3. Render the `Footnotes`

```tsx
<Footnotes>
{({ Footnote, footnotes }) => {
  const Note = createFootnoteComponentWith(Footnote);
  return (
    <React.Fragment>
      <Note>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Note>{" "}
      <Note>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </Note>{" "}
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
