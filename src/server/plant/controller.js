const plantController = {
  handler: (request, h) => {
    if (request != null) {
      let importq
      if (request.query.WhereAreYouImportingInto === 'gb') {
        importq = request.query.WhereAreYouImportingInto
        return h.view('plant/search', {
          pageTitle: 'Plant',
          heading: 'Plant',
          importq: importq
        })
      } else if (request.query.WhereAreYouImportingInto === 'ni') {
        return h.view('plant/service-unavailable.njk', {
          pageTitle: 'Plant',
          heading: 'Plant',
          importq: importq
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
