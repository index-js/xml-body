const parser = require('./lib/xml')


module.exports = option => {
  return async (ctx, next) => {
    let type = ctx.headers['content-type'] || ''
    let method = ctx.method.toUpperCase()

    if (type.match(/\/xml\b/) && !['GET', 'OPTIONS'].includes(method)) {
      let options = option || { explicitRoot: false, explicitArray: false }
      ctx.request.body = await parser(ctx.request.body, options)
    }

    return next()
  }
}
