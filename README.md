# Multiline concat

Concatenation of multi-lined strings side-by-side (line-by-line).

## Install

```shell
yarn add multiline-concat

or

npm install multiline-concat
```

## Usage

```js
let mConcat = require("multiline-concat");
```

## API

### mConcat(st1, str2, separator)

## Example

### Making Table from multiple columns

```js
let mConcat = require("multiline-concat");

let cName = `
 Name     |
-----------
 Peter    |
 Jonathan |
 Alois    |
 Ruby     |`;

let cAge = `
 Age      |
-----------
 23       |
 18       |
 33       |
 42       |`;

console.log(mConcat(cName, cAge));

//console.log:

// | Name     || Age      |
// ------------------------
// | Peter    || 23       |
// | Jonathan || 18       |
// | Alois    || 33       |
// | Ruby     || 42       |

```

### Concate multiline string with different row numbers

```js
let mConcat = require("multiline-concat");

let first = `
 ^
 |
 |
`;

let second = `

^
|
|
|
|
|
|`;

console.log(mConcat(first, second, " "));

//console.log:

//  ^ 
//  | ^
//  | |
//  |
//  |
//  |
//  |
//  |
```
