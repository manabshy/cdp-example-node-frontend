const plantHealthController = {
  handler: (request, h) => {
    if (request != null) {
      request.yar.set('errors', '')
      request.yar.set('errorMessage', '')
      request.yar.set('errorMessageRadio', '')
      const radiooption = request?.yar?.get('radiooption')
      const importq = radiooption?.purposeOfVisit
      request.yar.set('radiooption', null)
      return h.view('plant-health/index', {
        pageTitle: 'Plant',
        heading: 'Plant',
        importq: importq
      })
    }
  }
}

export { plantHealthController }
