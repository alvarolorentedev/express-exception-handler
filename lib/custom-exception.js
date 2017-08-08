class ExceptionCustom extends Error {
    constructor (message, status, response) {
        super(message || 'Unknown Exception')
        Error.captureStackTrace(this, this.constructor)
        this.name = this.constructor.name
        this.status = status || 500
        this.response = response
    }
}

module.exports = ExceptionCustom