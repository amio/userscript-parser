const fs = require('fs')
const tape = require('tape')
const usp = require('../')

const validUserscript = fs.readFileSync('./test/valid-userscript.user.js', { encoding: 'utf8' })

tape.test('parser', function (t) {
  //
  t.equal(typeof usp, 'function', 'require("userscript") should be a function')

  const parsed = usp(validUserscript)
  const expected = {
    description: [ 'This script even does the laundry!', ],
    downloadURL: [ 'https://www.example.com/myscript.user.js' ],
    name: [ 'Awesome Script' ],
    homepageURL: [ 'https://github.com/gantt/downloadyoutube' ],
    author: [ 'Gantt' ],
    version: [ '1.8.3' ],
    date: [ '2015-05-17' ],
    include: [ 'http://www.youtube.com/*', 'https://www.youtube.com/*' ],
    exclude: [
      'http://www.youtube.com/embed/*',
      'https://www.youtube.com/embed/*' ],
    match: [
      'http://www.youtube.com/*',
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
    content: "\n\nvar mynameis = 'USERSCRIPT!'\n"
  }
  t.deepEqual(parsed, expected)

  t.end()
})

tape.test('parse invalid userscript', function (t) {
  t.equal(usp(''), null)
  t.end()
})
