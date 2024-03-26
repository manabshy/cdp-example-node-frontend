const plantController = {
  handler: (request, h) => {
    if (request != null) {
      if (request.query.WhereAreYouImportingInto === 'gb') {
        return h.view('plant/search', {
          pageTitle: 'Plant',
          heading: 'Plant'
        })
      } else if (request.query.WhereAreYouImportingInto === 'ni') {
        return h.view('plant/service-unavailable.njk', {
          pageTitle: 'Plant',
          heading: 'Plant'
        })
      } else {
        return h.view('plant/index', {
          pageTitle: 'Plant',
          heading: 'Plant'
        })
      }
    }
  }
}

export { plantController }
