console.log('Hello via Bun!')

import * as cheerio from 'cheerio'

const baseUrl = 'https://daisyui.com'

const fetchHTML = async (url: string) =>
  fetch(url)
    .then((res) => res.text())
    .then((html) => cheerio.load(html))

const fetchComponentList = async () => {
  const $ = await fetchHTML(baseUrl + '/components')
  return $('.card')
    .toArray()
    .map((el) => {
      const $el = $(el)
      const url = $el.attr('href')
      const image = $el.find('img').attr('src')
      const name = $el.find('.card-title').text()
      const description = $el.find('.card-body').text()
      return {
        url,
        image,
        name,
        description,
        usages: [],
      }
    })
}

const fetchComponentDetail = async (pathname: string) => {
  const $ = await fetchHTML(baseUrl + pathname)
  return $('.component-preview')
    .toArray()
    .map((el) => {
      const $el = $(el)
      const title = $el.find('h4.component-preview-title').text()
      const code = $el.find('input[aria-label=HTML] + div .code-wrapper').text()
      return {
        title,
        code,
      }
    })
}

const writeFile = async (name: string, data: any) => {
  await Bun.write(name, data)
}

const components = await fetchComponentList()

for (const component of components) {
  console.log(component)
  component.usages = await fetchComponentDetail(component.url)
}

await writeFile('daisyui.json', JSON.stringify(components, null, 2))

