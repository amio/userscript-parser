# userscript-parser [![npm-version][npm-badge]][npm-link] [![install size][pp-badge]][pp-link]

Userscript metadata parser.

## Usage

```javascript
const userscriptText = '// ==UserScript==...'
const usp = require('userscript-parser')

const { meta, metablock, content } = usp(userscriptText)
```

Given this userscript:
```javascript
// ==UserScript==
// @name        Awesome Script
// @description This script even does the laundry!
// @downloadURL https://www.example.com/myscript.user.js
// @homepageURL https://github.com/gantt/downloadyoutube
// @author      Gantt
// @version     1.8.3
// @date        2015-05-17
// @include     https://www.youtube.com/*
// @exclude     https://www.youtube.com/embed/*
// @match       https://www.youtube.com/*
// @grant       GM_xmlhttpRequest
// @grant       GM_getValue
// @grant       GM_setValue
// @run-at      document-end
// @license     MIT License
// ==/UserScript==

var whoami = 'USERSCRIPT'
```

will produce this parsed object:

```javascript
{
  meta: {
    description: [ 'This script even does the laundry!', ],
    downloadURL: [ 'https://www.example.com/myscript.user.js' ],
    name: [ 'Awesome Script' ],
    homepageURL: [ 'https://github.com/gantt/downloadyoutube' ],
    author: [ 'Gantt' ],
    version: [ '1.8.3' ],
    date: [ '2015-05-17' ],
    include: [ 'https://www.youtube.com/*' ],
    exclude: [ 'https://www.youtube.com/embed/*' ],
    match: [ 'https://www.youtube.com/*' ],
    grant: [ 'GM_xmlhttpRequest', 'GM_getValue', 'GM_setValue' ],
    'run-at': [ 'document-end' ],
    license: [ 'MIT License' ]
  },
  metablock: "// ==UserScript==...",
  content: "\n\nvar whoami = 'USERSCRIPT'\n"
}
```

## License

MIT @ Amio

[npm-badge]: https://badgen.net/npm/v/userscript-parser
[npm-link]: https://www.npmjs.com/package/userscript-parser
[pp-badge]: https://badgen.net/packagephobia/publish/userscript-parser
[pp-link]: https://packagephobia.now.sh/result?p=userscript-parser
