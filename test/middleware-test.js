const middleware = require('../lib/middleware')

describe('test the middleware', () => {
    test('exception middleware sends error status', () => {
        var res = {
            sendStatus: jest.fn()
        }
        middleware({status:500}, undefined,res)
        expect(res.sendStatus.mock.calls.length).toBe(1)
        expect(res.sendStatus.mock.calls[0][0]).toBe(500)
    })

})