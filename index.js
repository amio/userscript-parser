'use strict'

module.exports = userscriptParser

/**
 * Userscript format:
 * http://wiki.greasespot.net/Metadata_Block
 */

function userscriptParser (userscriptText) {
  //
  var meta = {}

  try {
    var metaBlockPattern = /^[\S\s]+\/\/ ==\/UserScript==/
    var metaBlock = userscriptText.match(metaBlockPattern)[0]
    var cleanMeta = metaBlock.replace(/ +/, ' ')
    var metaArray = cleanMeta.match(/\/\/\s+@\w+ .+/g)

    metaArray.forEach(function (m) {
      var parts = m.match(/@(\w+)\s+(.+)/)
      meta[parts[1]] = meta[parts[1]] || []
      meta[parts[1]].push(parts[2])
    })

    meta.content = userscriptText.replace(metaBlockPattern, '')

  } catch(e) {
    if (console) console.log(e)
    return {}
  }

  return meta
}
