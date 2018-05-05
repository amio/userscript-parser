const fs = require('fs')
const tape = require('tape')
const usp = require('../')

const validUserscript = fs.readFileSync('./test/valid-userscript.user.js', { encoding: 'utf8' })
const validResult = {
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

tape.test('export a parser function', function (t) {
  t.equal(typeof usp, 'function', 'require("userscript") should be a function')
  t.end()
})

tape.test('parse a valid userscript', function (t) {
  t.deepEqual(usp(validUserscript), validResult)
  t.end()
})

tape.test('parse an invalid userscript', function (t) {
  t.equal(usp(''), null)
  t.end()
})
