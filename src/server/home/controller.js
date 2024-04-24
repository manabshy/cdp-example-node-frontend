const homeController = {
  handler: (request, h) => {
    request.yar.set('startnowButton', true)
    return h.view('home/index', {
      pageTitle: 'Home',
      heading: '',
      breadcrumbs: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Environment',
          href: '/'
        },
        {
          text: 'Animal and plant health',
          href: '/'
        }
      ]
    })
  }
}

export { homeController }
