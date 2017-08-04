const Layer = require('express/lib/router/layer')
const wrap = require('./wrap')

const _layer = Object.defineProperty(Layer.prototype, "handle", {
  enumerable: true,
  get: function() { return this.__handle; },
  set: function(fn) { this.__handle = wrap(fn) }
});
