const dataController = {
    handler: (request, h) => {
      const locale = request.i18n.getLocale();
      return h.response({ message: locale }).code(200)
    }
}
  
export { dataController }
  