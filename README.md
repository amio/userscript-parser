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
// @include     http://www.youtube.com/*
// @include     https://www.youtube.com/*
// @exclude     http://www.youtube.com/embed/*
// @exclude     https://www.youtube.com/embed/*
// @match       http://www.youtube.com/*
// @match       https://www.youtube.com/*
// @match       http://s.ytimg.com/yts/jsbin/html5player*
// @match       https://s.ytimg.com/yts/jsbin/html5player*
// @match       http://manifest.googlevideo.com/*
// @match       https://manifest.googlevideo.com/*
// @match       http://*.googlevideo.com/videoplayback*
// @match       https://*.googlevideo.com/videoplayback*
// @match       http://*.youtube.com/videoplayback*
// @match       https://*.youtube.com/videoplayback*
// @grant       GM_xmlhttpRequest
// @grant       GM_getValue
// @grant       GM_setValue
// @run-at      document-end
// @license     MIT License
// ==/UserScript==

var mynameis = 'USERSCRIPT!'

```

will produce this meta object:

```javascript
{
  name: [ 'Awesome Script' ],
  description: [ 'This script even does the laundry!' ],
  downloadURL: [ 'https://www.example.com/myscript.user.js' ],
  homepageURL: [ 'https://github.com/gantt/downloadyoutube' ],
  author: [ 'Gantt' ],
  version: [ '1.8.3' ],
  date: [ '2015-05-17' ],
  include: [ 'http://www.youtube.com/*', 'https://www.youtube.com/*' ],
  exclude:
   [ 'http://www.youtube.com/embed/*',
     'https://www.youtube.com/embed/*' ],
  match:
   [ 'http://www.youtube.com/*',
     'https://www.youtube.com/*',
     'http://s.ytimg.com/yts/jsbin/html5player*',
     'https://s.ytimg.com/yts/jsbin/html5player*',
     'http://manifest.googlevideo.com/*',
     'https://manifest.googlevideo.com/*',
     'http://*.googlevideo.com/videoplayback*',
     'https://*.googlevideo.com/videoplayback*',
     'http://*.youtube.com/videoplayback*',
     'https://*.youtube.com/videoplayback*' ],
  grant: [ 'GM_xmlhttpRequest', 'GM_getValue', 'GM_setValue' ],
  license: [ 'MIT License' ],
  content: '\n\nvar mynameis = \'USERSCRIPT!\'\n'
}
```
