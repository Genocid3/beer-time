const PUNKAPI_BASE_URL = 'https://api.punkapi.com/v2'
const BEERS = '/beers'
const RANDOM = '/random'
const PAGINATION_URL = `?page=1&per_page=50`
const FETCH_HEADERS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}