import { creations } from './data.js'

const mobileDOM = document.querySelector('.creations.mobile .img-center')
const desktopDOM = document.querySelector('.creations.desktop .img-center')

const mobileView = creations
  .map(({ id, text, images }) => {
    const { mobile: img } = images
    return ` 
        <div data-id=${id}>
          <img src=${img} alt=${text} />
          <h3 class="img-text">${text}</h3>
        </div> `
  })
  .join('')

const desktopView = creations
  .map(({ id, text, images }) => {
    const { desktop: img } = images
    return ` 
        <div data-id=${id}>
          <img src=${img} alt=${text} />
          <h3 class="img-text">${text}</h3>
        </div> `
  })
  .join('')

const displayCreations = () => {
  mobileDOM.innerHTML = mobileView
  desktopDOM.innerHTML = desktopView
}

export default displayCreations
