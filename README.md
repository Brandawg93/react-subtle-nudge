# react-subtle-nudge

A collection of animations to subtly nudge users to your React components.

_Note:_ This package is currently in beta. More to come!

[![NPM version](https://img.shields.io/npm/v/react-subtle-nudge.svg?style=flat)](https://npmjs.com/package/react-subtle-nudge)
[![NPM downloads](https://img.shields.io/npm/dm/react-subtle-nudge.svg?style=flat)](https://npmjs.com/package/react-subtle-nudge)
[![Storybook](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg)](https://brandawg93.github.io/react-subtle-nudge/)
[![PayPal](https://img.shields.io/badge/paypal-donate-blue?logo=paypal)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=CEYYGVB7ZZ764&item_name=react-subtle-nudge&currency_code=USD&source=url)

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

```js
import 'react-subtle-nudge/dist/index.css'
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
