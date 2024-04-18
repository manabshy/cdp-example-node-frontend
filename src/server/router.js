import inert from '@hapi/inert'
import yar from '@hapi/yar'
import { health } from '~/src/server/health'
import { home } from '~/src/server/home'
import { plant } from '~/src/server/plant'
import { planthealth } from '~/src/server/plant-health'
import { purposeofvisit } from '~/src/server/plant-health/purpose-of-visit'
import { serveStaticFiles } from '~/src/server/common/helpers/serve-static-files'

const options = {
  storeBlank: false,
  cookieOptions: {
    password: 'the-password-must-be-at-least-32-characters-long',
    isSecure: true
  }
}

const router = {
  plugin: {
    name: 'router',
    register: async (server) => {
      await server.register([inert])
      await server.register([
        health,
        home,
        plant,
        planthealth,
        purposeofvisit,
        serveStaticFiles
      ])
      await server.register({
        plugin: yar,
        options
      })
    }
  }
}

export { router }
