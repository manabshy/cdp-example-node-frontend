const plantHealthController = {
  handler: (request, h) => {
    if (request != null) {
      request.yar.set('errors', '')
      request.yar.set('errorMessage', '')
      request.yar.set('errorMessageRadio', '')
      const radiooption = request?.yar?.get('purposeOfVisitRadiooption')
      const radiobuttonValue = radiooption?.purposeOfVisit
      // ========== ========== ========== ========== ==========
      // set the value of radio button in the cookie to null
      // onclick of startnow button
      // ========== ========== ========== ========== =========
      if (request.yar.get('startnowButton')) {
        request.yar.set('purposeOfVisitRadiooption', null)
        request.yar.set('importConfirmationRadiooption', null)
        request.yar.set('startnow', false)
      }
      return h.view('plant-health/index', {
        pageTitle: 'Plant',
        heading: 'Plant',
        radiobuttonValue: radiobuttonValue
      })
    }
  }
}

export { plantHealthController }
