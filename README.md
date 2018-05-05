# userscript-parser

Userscript metadata parser.

## Usage

```javascript
var userscriptText = '...'
var userscriptParser = require('userscript-parser')

var meta = userscriptParser(userscriptText)
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
// @match       https://manifest.googlevideo.com/*
// @match       https://*.googlevideo.com/videoplayback*
// @match       https://*.youtube.com/videoplayback*
// @grant       GM_xmlhttpRequest
// @grant       GM_getValue
// @grant       GM_setValue
// @run-at      document-end
// @license     MIT License
// ==/UserScript==

var whoami = 'USERSCRIPT'
```

will produce this meta object:

```javascript
{
  description: [ 'This script even does the laundry!', ],
  downloadURL: [ 'https://www.example.com/myscript.user.js' ],
  name: [ 'Awesome Script' ],
  homepageURL: [ 'https://github.com/gantt/downloadyoutube' ],
  author: [ 'Gantt' ],
  version: [ '1.8.3' ],
  date: [ '2015-05-17' ],
  include: [ 'https://www.youtube.com/*' ],
  exclude: [ 'https://www.youtube.com/embed/*' ],
  match: [
    'https://www.youtube.com/*',
    'https://manifest.googlevideo.com/*',
    'https://*.googlevideo.com/videoplayback*',
    'https://*.youtube.com/videoplayback*' ],
  grant: [ 'GM_xmlhttpRequest', 'GM_getValue', 'GM_setValue' ],
  license: [ 'MIT License' ],
  content: "\n\nvar whoami = 'USERSCRIPT'\n"
}
```
