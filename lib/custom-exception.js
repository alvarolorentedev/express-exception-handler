class ExceptionCustom extends Error {
    constructor (message, status) {
        super(message || 'Unknown Exception')
        Error.captureStackTrace(this, this.constructor)
        this.name = this.constructor.name
        this.status = status || 500
    }
}

module.exports = ExceptionCustom