const homeController = {
  handler: (request, h) => {
    const i18n = require('i18n')
    const path = require('path')
    i18n.configure({
      locales: ['en'],
      directory: path.join(__dirname, 'locales'),
      defaultLocale: 'en',
      objectNotation: true,
      updateFiles: false
    })
    i18n.setLocale('en')
    const govukHeading = i18n.__('govuk-heading')
    const govukCaption = i18n.__('govuk-caption')
    const govukBodyTitle = i18n.__('govuk-body-title')
    request.yar.set('startnowButton', true)
    return h.view('home/index', {
      govukCaption,
      govukHeading,
      govukBodyTitle,
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
