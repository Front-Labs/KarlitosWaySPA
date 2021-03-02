export const mobileMenu = () => {
  const navbar = document.querySelector('.navbar')
  const toggle = document.querySelector('.toggle')

  function toggleMenu() {
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active')
      toggle.querySelector('a').innerHTML = "<i class='fas fa-bars'></i>"
    } else {
      navbar.classList.add('active')
      toggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>"
    }
  }

  toggle.addEventListener('click', toggleMenu, false)

  const closeMenu = document.querySelector('.navbar-data')

  closeMenu.addEventListener('click', toggleMenu, false)
}