
function cardPatternGenerator(name, tagline, image) {
  const newSection = creator('section')
  addClass(newSection, `card-beer`)
  const sectionContent = `
    <img src=${image || ''} />
    <h3>${name}</h3>
    <p>${tagline}</p>
  `
  return inject(newSection, sectionContent)
}

function oneBeerPatternGenerator({
  name,
  image_url: image,
  brewers_tips: tips,
  description,
  pairing_food: pairing
}) {
  const newSection = creator('section')
  addClass(newSection, 'beer-panel')
  const sectionContent = `
    <img src=${image || ''} />
    <h2>${name}</h2>
    <q>${tips}</q>
    <q>${description}</q>
    <q>${pairing}</q>
  `
  return inject(newSection, sectionContent)
}

function oneBeer(beerId) {
  removeContent()
  fetch(`${PUNKAPI_BASE_URL}${BEERS}/${beerId}`, FETCH_HEADERS)
    .then(rawParser)
    .then(([beer]) => {
      const target = selector('#content')
      target.append(oneBeerPatternGenerator(beer))
    })
    .catch(errorManager)
}

function home() {
  removeContent()
}

function allBeers() {
  removeContent()
  fetch(`${PUNKAPI_BASE_URL}${BEERS}${PAGINATION_URL}`, FETCH_HEADERS)
    .then(rawParser)
    .then(result => {
      const target = selector('#content')
      result.forEach(({ name, tagline, image_url }) => {
        target.append(cardPatternGenerator(name, tagline, image_url))
      })

      const cards = selectors('.card-beer')
      for (let i = -1; ++i < cards.length;) {
        cards[i].addEventListener('click', function () {
          oneBeer(result[i].id)
        })
      }
    })
    .catch(errorManager)
}

function randomBeer() {
  removeContent()
  fetch(`${PUNKAPI_BASE_URL}${BEERS}${RANDOM}`, FETCH_HEADERS)
    .then(rawParser)
    .then(([beer]) => {
      const target = selector('#content')
      target.append(oneBeerPatternGenerator(beer))
    })
    .catch(errorManager)
}

function main() {
  const homeHeaderButton = selector('#home-section')
  homeHeaderButton.addEventListener('click', home)

  const allBeersHeaderButton = selector('#all-beers-section')
  allBeersHeaderButton.addEventListener('click', allBeers)

  const randomHeaderButton = selector('#random-section')
  randomHeaderButton.addEventListener('click', randomBeer)
}

main()