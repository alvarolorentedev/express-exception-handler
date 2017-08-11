const Layer = require('express/lib/router/layer')
const wrap = require('./wrap')

const _layer = Object.defineProperty(Layer.prototype, "handle", {
  enumerable: true,
  get: function() { return this.__handle; },
  set: function(fn) { 
    if(fn.length < 4)
      fn = wrap(fn)
    this.__handle = fn
  }
});
