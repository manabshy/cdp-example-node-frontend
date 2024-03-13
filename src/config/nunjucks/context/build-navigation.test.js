import { buildNavigation } from '~/src/config/nunjucks/context/build-navigation'

const mockRequest = ({ path = '/' } = {}) => ({
  path
})

describe('#buildNavigation', () => {
  test('Should provide expected highlighted navigation details', async () => {
    expect(buildNavigation(mockRequest())).toEqual([
      {
        isActive: true,
        text: 'Home',
        url: '/'
      }
    ])
  })
})
