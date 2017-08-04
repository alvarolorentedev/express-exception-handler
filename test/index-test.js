const index = require('../lib/index')

describe('test the index exports', () => {
    test('has exeption exported', async () => {
        expect(index.exception).not.toBeUndefined()
    })

})