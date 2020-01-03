const AppError = require('./custom-exception')

const defaultOptions = {
  nextOnce: true
}

function wrap(fn, options = {}) {
  const fullOptions = { ...defaultOptions, ...options };
  return (req, res, next) => {
    if (fullOptions.nextOnce) {
      const originalNext = next
      let nextCalled = false
      next = (...args) => {
        if (nextCalled) {
          return;
        }
        nextCalled = true
        originalNext(...args)
      }
    }
    try {
      const routePromise = fn(req, res, next)
      if (routePromise && routePromise.catch) {
        routePromise.catch(err => continueToErrorMiddleware(err, next))
      }
    } catch (err) {
      continueToErrorMiddleware(err, next)
    }
  }
};

function continueToErrorMiddleware(err, next){
  if (!err || !(err instanceof AppError))
    err = new AppError(err)
  next(err)
}

module.exports = wrap