import { createServer } from '~/src/server'

describe('#plantController', () => {
  let server
  beforeEach(async () => {
    server = await createServer()
  })
  const options = {
    method: 'GET',
    url: '/plant'
  }

  describe('when the request succeeds', () => {
    test('displays the correct message', async () => {
      const response = await server.inject(options)
      expect(response.raw.res.statusCode).toEqual(200)
    })
  })
})
