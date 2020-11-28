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

// function on(source, event, fn) {
//   const wrapper = typeof fn === 'function' ? fn : () => fn
//   source.addEventListener(event, wrapper)
// }