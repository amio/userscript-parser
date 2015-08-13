const tape = require('tape')
const us = require('./')

tape.test('parser', function(t){
  t.equal(typeof us.parse, 'function')
  t.end()
})

tape.test('validator', function(t){
  t.equal(typeof us.parse, 'function')
  t.end()
})
