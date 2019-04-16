# Xml-body
> Koa xml parser

## Usage

```
$ npm i xml-body
```
``` js
const koa = require('koa')
const xmlBody = require('xml-body')

// Default Options
const options = {
  explicitRoot: false,
  explicitArray: false
}

app.use(xmlBody())
```

## Xml parse options
Uses [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) see all available [options](https://github.com/Leonidas-from-XIV/node-xml2js#options)

Supported `Content-Type`: `application/xml`, `text/xml`, etc.

## Authors

**Yanglin** ([i@yangl.in](mailto:mail@yanglin.me))


## License

Copyright (c) 2018 Yanglin

Released under the MIT license
