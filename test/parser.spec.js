const fs = require('fs')
const tape = require('tape')
const usp = require('../')

tape.test('export a parser function', function (t) {
  t.equal(typeof usp, 'function', 'require("userscript") should be a function')
  t.end()
})

tape.test('parse a valid userscript -> { meta, metablock, content }', function (t) {
  const userscript = fs.readFileSync('./test/valid-userscript.user.js', 'utf8')
  const result = usp(userscript)

  t.deepEqual(result.meta, {
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
    license: [ 'MIT License' ]
  })
  t.equal(result.metablock.trim(), `// ==UserScript==
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
// ==/UserScript==`)
  t.equal(result.content.trim(), 'var whoami = "USERSCRIPT"')
  t.end()
})

tape.test('parse an invalid userscript -> null', function (t) {
  t.equal(usp(''), null)
  t.end()
})
