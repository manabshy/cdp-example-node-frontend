import { getDefaultLocaleData } from '~/src/server/localisation'
const importConfirmationController = {
  handler: (request, h) => {
    if (request != null) {
      const data = getDefaultLocaleData('import-confirmation')
      const mainContent = data?.mainContent
      const getHelpSection = data?.getHelpSection
      const serviceUnavailablePage = data?.serviceUnavailablePage

      let radiobuttonValue
      if (request.query.whereareyouimportinginto === 'gb') {
        radiobuttonValue = request.query.Whereareyouimportinginto
        request.yar.set('importConfirmationRadiooption', {
          whereareyouimportinginto: 'gb'
        })
        return h.view('plant-health/import-confirmation/search', {
          pageTitle: 'ImportConfirmation',
          heading: 'ImportConfirmation'
        })
      } else if (request.query.whereareyouimportinginto === 'ni') {
        request.yar.set('importConfirmationRadiooption', {
          whereareyouimportinginto: 'ni'
        })
        return h.view(
          'plant-health/import-confirmation/service-unavailable.njk',
          {
            serviceUnavailablePage,
            getHelpSection,
            pageTitle: 'ImportConfirmation',
            heading: 'ImportConfirmation'
          }
        )
      } else {
        request.yar.set('errors', '')
        request.yar.set('errorMessage', '')
        request.yar.set('errorMessageRadio', '')
        const radiooption = request?.yar?.get('importConfirmationRadiooption')
        radiobuttonValue = radiooption?.whereareyouimportinginto
        if (!radiobuttonValue) {
          request.yar.set('errors', {
            errors: {
              titleText: 'There is a problem',
              errorList: [
                {
                  text: 'Select where are you importing plant or plant product into',
                  href: '#itembox'
                }
              ]
            }
          })
          request.yar.set('errorMessage', {
            errorMessage: {
              text: 'Select where are you importing plant or plant product into'
            }
          })
        }
        const errors = request.yar?.get('errors')
        const errorMessage = request.yar?.get('errorMessage')
        return h.view('plant-health/import-confirmation/index', {
          mainContent,
          getHelpSection,
          radiobuttonValue,
          pageTitle: 'ImportConfirmation',
          heading: 'ImportConfirmation',
          errors: errors?.errors,
          errorMessage: errorMessage?.errorMessage,
          errorMessageRadio: errorMessage?.errorMessage
        })
      }
    }
  }
}

export { importConfirmationController }
