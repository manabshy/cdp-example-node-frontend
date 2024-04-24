import { plantHealthController } from '~/src/server/plant-health/controller'

const planthealth = {
  plugin: {
    name: 'plant-health',
    register: async (server) => {
      server.route([
        {
          method: 'GET',
          path: '/plant-health',
          ...plantHealthController
        }
      ])
    }
  }
}

export { planthealth }
