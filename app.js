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
