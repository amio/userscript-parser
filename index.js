/**
 * Userscript format:
 * http://wiki.greasespot.net/Metadata_Block
 */

module.exports = function extractMetablock (userscriptText) {
  var meta = {}

  try {
    var metablockReg = /\B\/\/ ==UserScript==\n([\S\s]*?)\n\/\/ ==\/UserScript==/
    var metablock = userscriptText.match(metablockReg)
    if (!metablock) {
      return null
    }
    var metaArray = metablock[1].split('\n')

    metaArray.forEach(function (m) {
      var parts = m.match(/@(\w+)\s+(.+)/)
      if (parts) {
        meta[parts[1]] = meta[parts[1]] || []
        meta[parts[1]].push(parts[2])
      }
    })

    meta.content = userscriptText.replace(metablockReg, '')
  } catch(e) {
    if (console) console.error(e)
    return null
  }

  return meta
}
