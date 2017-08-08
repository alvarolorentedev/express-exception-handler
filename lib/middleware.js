function exceptionMiddleware (err, req, res, next) {
    res.status(err.status).send(err.response || err.message);
}

module.exports = exceptionMiddleware