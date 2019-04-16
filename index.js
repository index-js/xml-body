const parser = require('./lib/xml')


module.exports = option => {
  return async (ctx, next) => {
    let type = ctx.headers['content-type'] || ''

    if (type.match(/\/xml\b/) && ctx.method !== 'GET') {
      let options = option || { explicitRoot: false, explicitArray: false }
      ctx.request.body = await parser(ctx.req, options)
    }

    return next()
  }
}
