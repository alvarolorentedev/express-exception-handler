const Layer = require('express/lib/router/layer')
const wrap = require('./wrap')

module.exports = (options = {}) => {
  Object.defineProperty(Layer.prototype, "handle", {
    enumerable: true,
    get: function() { return this.__handle; },
    set: function(fn) { 
      if (fn.length < 4)
        fn = wrap(fn, options)
      this.__handle = fn
    }
  })
}
