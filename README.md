# extalibur

> **Archetype:** Node.js package

**extalibur** change the extension on a path or remove it using a well engineered atomic function.

## Install

`npm install extalibur`

## Usage

```js
import setExt from 'extalibur';

const filePath = './path/to/content.txt';
console.log(setExt(filePath, '.md'));
//./path/to/content.md

console.log(setExt(filePath, null));
//./path/to/content
```

## Links

### Development Homepage:

[https://github.com/alexstevovich/extalibur](https://github.com/alexstevovich/extalibur)

_This link might become extalibur-node in the future if conflicts arise._

## License

Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
