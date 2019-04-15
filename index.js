const parser = require('./lib/xml')


module.exports = options => {
  return async (ctx, next) => {
    let type = ctx.headers['content-type'] || ''

    if (type.match(/\/xml\b/) && ctx.method !== 'GET') ctx.request.body = await parser(ctx.req, options)

    return next()
  }
}
