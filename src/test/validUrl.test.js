import { validUrl } from '../client/js/validUrl'

test('validUrl = function', () => {
  expect(typeof validUrl).toBe('function')
})

test('validUrl = True', () => {
  const url = 'https://www.google.com'
  const response = validUrl(url)
  expect(response).toBe(true)
})
