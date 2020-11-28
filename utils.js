function selector(item) {
  return document.querySelector(item) || {}
}

function selectors(item) {
  return document.querySelectorAll(item) || []
}

function inject(target, content) {
  target.innerHTML = content
  return target
}

function creator(item) {
  return document.createElement(item)
}

function addClass(element, __class) {
  element.classList.add(__class)
  return element
}

function removeContent() {
  const article = selector('article')
  article.removeChild(selector('#content'))
  const content = creator('section')
  content.setAttribute('id', 'content')
  article.append(content)
}

function rawParser(raw) {
  return raw.json()
}

function errorManager(error) {
  console.log('*Error: ', error.message)
}

function getRndPlace() {
  return PLACES[~~(Math.random() * PLACES.length)]
}

function setMap(coordinates) {
  const map = L.map('map').setView(coordinates, 13)
  L.tileLayer(MAPBOX_API, {
    attribution: ATTRIBUTION,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: ACCESS_TOKEN
  }).addTo(map)
  L.marker(coordinates).bindPopup(`First brewed: ${sharedInfo}`).addTo(map)
}

function getCoordinates(placesContent) {
  const { coordinates } = placesContent?.features[0]?.geometry
  return [...coordinates].reverse()
}

// function on(source, event, fn) {
//   const wrapper = typeof fn === 'function' ? fn : () => fn
//   source.addEventListener(event, wrapper)
// }