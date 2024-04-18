const purposeOfVisitController = {
  handler: (request, h) => {
    if (request != null) {
      let importq
      if (request.query.whatdoyouwanttofind === 'importrules') {
        request.yar.set('radiooption', { purposeOfVisit: 'importrules' })
        return h.view('plant/index', {
          pageTitle: 'Plant',
          heading: 'Plant'
        })
      } else if (request.query.whatdoyouwanttofind === 'pest') {
        request.yar.set('radiooption', { purposeOfVisit: 'pest' })
        return h.view('plant-health/service-unavailable.njk', {
          pageTitle: 'Plant',
          heading: 'Plant'
        })
      } else {
        const radiooption = request?.yar?.get('radiooption')
        importq = radiooption?.purposeOfVisit
        request.yar.set('radiooption', null)
        if (!importq) {
          request.yar.set('errors', {
            errors: {
              titleText: 'There is a problem',
              errorList: [
                {
                  text: 'Select what do you want to find',
                  href: '#itembox'
                }
              ]
            }
          })
          request.yar.set('errorMessage', {
            errorMessage: { text: 'Select what do you want to find' }
          })
        }
        const errors = request.yar?.get('errors')
        const errorMessage = request.yar?.get('errorMessage')
        return h.view('plant-health/index', {
          pageTitle: 'Plant',
          heading: 'Plant',
          importq: importq,
          errors: errors?.errors,
          errorMessage: errorMessage?.errorMessage,
          errorMessageRadio: errorMessage?.errorMessage
        })
      }
    }
  }
}

export { purposeOfVisitController }
