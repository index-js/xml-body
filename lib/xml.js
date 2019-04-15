const parseString = require('xml2js').parseString


module.exports = (req, options) => new Promise((resolve, reject) => {
    let xml = ''

    req
    .setEncoding('utf8')
    .on('error', reject)
    .on('data', chunk => xml += chunk.replace(/\r/g, ''))
    .on('end', () => parseString(xml, options, (err, res) => {
      if (err) reject(err)
      resolve(res)
    }))
})
