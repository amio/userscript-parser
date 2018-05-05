/**
 * Userscript format:
 * http://wiki.greasespot.net/Metadata_Block
 */

module.exports = function extractMetablock (userscriptText) {
  try {
    var metablockReg = /\B\/\/ ==UserScript==\n([\S\s]*?)\n\/\/ ==\/UserScript==([\S\s]*)/
    var metablock = userscriptText.match(metablockReg)
    if (!metablock) {
      return null
    }

    var meta = {}
    var metaArray = metablock[1].split('\n')
    metaArray.forEach(function (m) {
      var parts = m.match(/@(\w+)\s+(.+)/)
      if (parts) {
        meta[parts[1]] = meta[parts[1]] || []
        meta[parts[1]].push(parts[2])
      }
    })

    var content = metablock[2]

    return {
      meta: meta,
      content: content
    }
  } catch(e) {
    if (console) console.error(e)
    return null
  }
}
