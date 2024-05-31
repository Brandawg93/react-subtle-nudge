# react-subtle-nudge

A collection of animations to subtly nudge users to your React components.

_Note:_ This package is currently in beta. More to come!

[Docs](https://brandawg93.github.io/react-subtle-nudge/)

## Installation

npm

```bash
npm install --save react-subtle-nudge
```

pnpm

```bash
pnpm install --save react-subtle-nudge
```

yarn

```bash
yarn add react-subtle-nudge
```

Add the following CSS to your entry file

```bash
import 'react-subtle-nudge/dist/esm/index.css'
```

## Usage

Simply wrap your component in one of the animation components.

```js
import { Bounce } from 'react-subtle-nudge'

const BtnBounce = () => {
  return (
    <Bounce>
      <button>Click Me!</button>
    </Bounce>
  )
}
```
