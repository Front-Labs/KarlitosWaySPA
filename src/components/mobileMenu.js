export const mobileMenu = () => {
  const navbar = document.querySelector('.navbar')
  const toggle = document.querySelector('.toggle')

  function toggleMenu() {
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active')
      toggle.querySelector('a').innerHTML = "<img src='images/bars-solid.svg'>"
    } else {
      navbar.classList.add('active')
      toggle.querySelector('a').innerHTML = "<img src='images/times-solid.svg'>"
    }
  }

  toggle.addEventListener('click', toggleMenu, false)

  const closeMenu = document.querySelector('.navbar-data')

  closeMenu.addEventListener('click', toggleMenu, false)
}