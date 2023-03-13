
const links = document.querySelectorAll('.link-dropdown')
const dropdowns = document.querySelectorAll('.dropdown')

links.forEach((link, i) => {
  link.addEventListener('click', () => {
    console.log('Clicou')
    dropdowns[i].classList.toggle('active')
  })
})
