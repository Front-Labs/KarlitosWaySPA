export const navFade = () => {
  const navScroll = document.getElementById('navbar')

  window.addEventListener('scroll', function() {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
      navScroll.classList.add('nav-colored')
      navScroll.classList.remove('nav-transparent')
    } else {
      navScroll.classList.add('nav-transparent');
      navScroll.classList.remove('nav-colored')
    }
  }, false)
}