const parseString = require('xml2js').parseString


module.exports = (xml = '', options) => new Promise((resolve, reject) => {
    parseString(xml, options, (err, res) => {
        if (err) reject(err)
        resolve(res)
    })
})
