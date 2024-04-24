const homeController = {
  handler: (request, h) => {
    const i18n = require('i18n');
    const path = require('path');
    i18n.configure({
      locales: ['en'],
      directory: path.join(__dirname, 'locales'),
      defaultLocale: 'en',
      objectNotation: true,
      updateFiles: false,
    });
    
    console.log(i18n.__('searchTitle'));
    const fs = require('fs');
    const filePath = path.join(__dirname , '/locales/en.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    const content = i18n.__(filePath);
    console.log('content of json file',data);
    console.log('i18n content of json file', content);
    //const searchTitle = data?.searchTitle;
    const searchTitle = i18n.__('searchTitle');
    const search = data?.search;
    console.log('stitle', searchTitle);
    return h.view('home/index', {
      search,
      searchTitle,
      pageTitle: 'Home',
      heading: 'Home',
      breadcrumbs: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Plant'
        }
      ]
    })
  }
}

export { homeController }
