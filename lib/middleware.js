function exceptionMiddleware (err, req, res, next) {
    res.sendStatus(err.status)
}

module.exports = exceptionMiddleware