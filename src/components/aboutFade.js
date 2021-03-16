export const aboutFade = () => {
  const fixedProfile = document.getElementById('about-background')
  const startFade = about.offsetTop
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > startFade) { 
      let opacity = ((window.pageYOffset / (startFade * 2)) - 0.5)
      console.log(opacity)
      fixedProfile.style.background = `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url('images/karlein.jpg')`
    }
  }, false)
}