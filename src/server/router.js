import inert from '@hapi/inert'

import { health } from '~/src/server/health'
import { home } from '~/src/server/home'
import { plant } from '~/src/server/plant'
import { serveStaticFiles } from '~/src/server/common/helpers/serve-static-files'

const router = {
  plugin: {
    name: 'router',
    register: async (server) => {
      await server.register([inert])
      await server.register([health, home, plant, serveStaticFiles])
    }
  }
}

export { router }
