'use strict'

module.exports = {
  parse: parse,
  validate: validate,
}

/**
 * Userscript format:
 * http://wiki.greasespot.net/Metadata_Block
 */

function parse(userscriptText){
  //
  if(!validate(userscriptText)) throw new Error('Invalid userscript format!')
}

function validate(userscriptText){
  //
}
