import { plantController } from '~/src/server/plant/controller'

const plant = {
  plugin: {
    name: 'plant',
    register: async (server) => {
      server.route([
        {
          method: 'GET',
          path: '/plant',
          ...plantController
        }
      ])
    }
  }
}

export { plant }
