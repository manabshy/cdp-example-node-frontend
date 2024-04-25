import { getDefaultLocaleData } from '../localisation'
const homeController = {
  handler: (request, h) => {
    const data = getDefaultLocaleData('home')
    const govukHeading = data?.govukheading
    const govukCaption = data?.govukcaption
    const govukBodyTitle = data?.govukbodytitle

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
