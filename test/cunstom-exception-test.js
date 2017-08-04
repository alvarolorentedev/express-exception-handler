var exception = require('../lib/custom-exception')

describe('test the custom exception', () => {
    test('default exceptios is unknown messsage and status 500', async () => {
        var ex = new exception()
        expect(ex.status).toBe(500)
        expect(ex.message).toBe("Unknown Exception")
    })

    test(' exceptios has stacktrace', async () => {
        var ex = new exception()
        expect(ex.stack).not.toBeUndefined()
    })

    test(' exceptios has name', async () => {
        var ex = new exception()
        expect(ex.name).not.toBeUndefined()
    })
})