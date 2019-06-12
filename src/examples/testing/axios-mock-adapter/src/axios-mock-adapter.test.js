const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')

const data = [
  {
    name: 'lucasdc',
    email: 'lucasdc@gmail.com',
  },
  {
    name: 'ulises',
    email: 'ulises@gmail.com',
  },
]

const url = '/users'
const urlError = '/log'

describe('Test con fake server', () => {
  beforeEach(() => {
    const mockAdapter = new MockAdapter(axios)
    mockAdapter.onGet(url).reply(200, data)
    mockAdapter.onPost(url).reply(200, 'ok')
  })

  it('Get exitoso', () => {
    axios.get(url)
      .then(response => {
        expect(response.data).toBe(data)
      })
      .catch(console.error)
  })

  it('Post exitoso', () => {
    axios.post(url)
      .then(response => {
        expect(response.data).toBe('ok')
      })
      .catch(console.error)
  })

  it('Not fount', () => {
    axios.get(urlError)
      .catch(err => {
        expect(err.response.status).toBe(404)
      })
  })
})



