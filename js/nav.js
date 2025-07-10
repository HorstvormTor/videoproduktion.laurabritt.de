// nav

const toggleButton = document.getElementById('toggle-button')
const navBarmobil = document.getElementById('toggle-navbar-mobil')

toggleButton.addEventListener('click', () => {
  navBarmobil.classList.toggle('active');

})

const listMobil = document.getElementById('list-mobil')
const listClose = document.getElementById('toggle-navbar-mobil')

listMobil.addEventListener('click', () => {
  listClose.classList.toggle('active');

})

