'use strict'

module.exports = userscriptParser

/**
 * Userscript format:
 * http://wiki.greasespot.net/Metadata_Block
 */

function userscriptParser (userscriptText) {
  //
  let meta = {}

  try {
    const metaBlockPattern = /^[\S\s]+\/\/ ==\/UserScript==/
    const metaBlock = userscriptText.match(metaBlockPattern)[0]
    const cleanMeta = metaBlock.replace(/ +/, ' ')
    const metaArray = cleanMeta.match(/\/\/ @\w+ .+/g)

    metaArray.forEach(function (m) {
      const parts = m.match(/@(\w+) (.+)/)
      meta[parts[1]] = meta[parts[1]] || []
      meta[parts[1]].push(parts[2])
    })

    meta.content = userscriptText.replace(metaBlockPattern, '')

  } catch(e) {
    if (console) console.log(e)
    return false
  }

  return meta
}
