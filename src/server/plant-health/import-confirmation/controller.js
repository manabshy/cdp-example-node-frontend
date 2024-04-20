const importConfirmationController = {
  handler: (request, h) => {
    if (request != null) {
      let importq
      if (request.query.whereareyouimportinginto === 'gb') {
        importq = request.query.Whereareyouimportinginto
        request.yar.set('radiooption', { whereareyouimportinginto: 'gb' })
        return h.view('plant-health/import-confirmation/search', {
          pageTitle: 'ImportConfirmation',
          heading: 'ImportConfirmation'
        })
      } else if (request.query.whereareyouimportinginto === 'ni') {
        request.yar.set('radiooption', { whereareyouimportinginto: 'ni' })
        return h.view(
          'plant-health/import-confirmation/service-unavailable.njk',
          {
            pageTitle: 'ImportConfirmation',
            heading: 'ImportConfirmation'
          }
        )
      } else {
        request.yar.set('errors', '')
        request.yar.set('errorMessage', '')
        request.yar.set('errorMessageRadio', '')
        const radiooption = request?.yar?.get('radiooption')
        importq = radiooption?.whereareyouimportinginto
        request.yar.set('radiooption', null)
        if (!importq) {
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
          pageTitle: 'ImportConfirmation',
          heading: 'ImportConfirmation',
          importq: importq,
          errors: errors?.errors,
          errorMessage: errorMessage?.errorMessage,
          errorMessageRadio: errorMessage?.errorMessage
        })
      }
    }
  }
}

export { importConfirmationController }
