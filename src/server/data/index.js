import { dataController } from '~/src/server/data/controller'

const data = {
  plugin: {
    name: '/',
    register: async (server) => {
      server.route({
        method: 'GET',
        path: '/',
        ...dataController
      })
    }
  }
}

export { data }
