const fs = require('fs')
const tape = require('tape')
const usp = require('../')

const validUserscript = fs.readFileSync('./test/valid-userscript.user.js', { encoding: 'utf8' })

tape.test('parser', function (t) {
  //
  t.equal(typeof usp, 'function', 'require("userscript") should be a function')

  const result = usp(validUserscript)
  console.log(result)

  t.end()
})
