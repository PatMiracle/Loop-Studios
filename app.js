import displayCreations from './creations.js'
const navBtn = document.querySelector('.nav-btn')
const sidebar = document.querySelector('.sidebar')

// toogle sidebar
navBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar')
})

sidebar.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar')
})

// display creations
window.addEventListener('DOMContentLoaded', displayCreations())

// scroll animations
ScrollReveal().reveal('.hero', {
  origin: 'left',
  distance: '40px',
  delay: 500,
  easing: 'ease-in',
})
ScrollReveal().reveal('img', {
  origin: 'bottom',
  distance: '40px',
  delay: 300,
  easing: 'ease-in',
})
ScrollReveal().reveal('article', {
  origin: 'right',
  distance: '40px',
  delay: 300,
  easing: 'ease-in',
})
