
const links = document.querySelectorAll('.link-dropdown')
const dropdowns = document.querySelectorAll('.dropdown')
const search = document.querySelector('.search')
const inputSearch = document.querySelector('.input')

links.forEach((link, i) => {
  link.addEventListener('click', () => {
    console.log('Clicou')
    dropdowns[i].classList.toggle('dropdown-enter')
  })
})

search.addEventListener('click', () => {
  inputSearch.classList.toggle('dropdown-enter')
})