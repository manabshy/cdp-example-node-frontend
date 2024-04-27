const plantHealthController = {
  handler: (request, h) => {
    if (request != null) {
      request.yar.set('errors', '')
      request.yar.set('errorMessage', '')
      request.yar.set('errorMessageRadio', '')
      const radiooption = request?.yar?.get('purposeOfVisitRadiooption')
      const radiobuttonValue = radiooption?.purposeOfVisit
      return h.view('plant-health/index', {
        pageTitle: 'Plant',
        heading: 'Plant',
        radiobuttonValue
      })
    }
  }
}

export { plantHealthController }
