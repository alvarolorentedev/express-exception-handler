const AppError = require('./custom-exception')

function wrap(fn, options = {}) {
  return (req, res, next) => {
    try {
      const routePromise = fn(req, res, next)
      if (routePromise && routePromise.catch)
      routePromise.catch(err => continueToErrorMiddleware(err, next))
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