# Multiline concat

Concatenation of multi-lined art side-by-side.

## Install

```shell
yarn add multiline-concat

or

npm install multiline-concat
```

## Example

```js
let mConcat = require("multiline-concat");

let card1 = `
┌─────────┐
│A        │
│         |
│         │
│    ♥    │
│         │
│         │
│        A│
└─────────┘`;

let card2 = `
┌─────────┐
│░░░░░░░░░│
│░░░░░░░░░│
│░░░░░░░░░│
│░░░░░░░░░│
│░░░░░░░░░│
│░░░░░░░░░│
│░░░░░░░░░│
└─────────┘`;

console.log(mConcat(card1, card2));

//console.log:

// ┌─────────┐ ┌─────────┐
// │A        │ │░░░░░░░░░│
// │         | │░░░░░░░░░│
// │         │ │░░░░░░░░░│
// │    ♥    │ │░░░░░░░░░│
// │         │ │░░░░░░░░░│
// │         │ │░░░░░░░░░│
// │        A│ │░░░░░░░░░│
// └─────────┘ └─────────┘
```
