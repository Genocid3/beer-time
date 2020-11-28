const MAPBOX_API = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
const ATTRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
const ACCESS_TOKEN = 'pk.eyJ1IjoibW9scGUxMDEiLCJhIjoiY2tpMDltNms2MGlsNDJ5cWt2cnYwajh1MyJ9.Uln4c1zIk3418MWbAM-9qg'
const MAPBOX_PLACES_API = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const REST_PLACES_URL = `.json?types=place&access_token=pk.eyJ1Ijoic29seiIsImEiOiJja2FpYWJobjIwbzVtMnNvNTdmNGF4NHJ2In0.HP3anVetw1Hw0MxhQJPagQ`

const PLACES = ['madrid', 'london', 'munich', 'lisbon', 'moscow']

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