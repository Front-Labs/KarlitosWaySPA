export const sectionHighlight = () => {
  const home = document.getElementById('home')
  const about = document.getElementById('about')
  const portfolio = document.getElementById('portfolio')
  const contact = document.getElementById('contact')
  const scroll = document.getElementById('scroll-link')

  const observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting) {
      if(entries[0].target == home) {
        const navbarHome = document.getElementById('navbar-home')
        navbarHome.classList.add('navbar-highlight')
        scroll.href = '#about'
      } else if(entries[0].target == about) {
        const navbarAbout = document.getElementById('navbar-about')
        navbarAbout.classList.add('navbar-highlight')
        scroll.href = '#portfolio'
      } else if(entries[0].target == portfolio) {
        const navbarPortfolio = document.getElementById('navbar-portfolio')
        navbarPortfolio.classList.add('navbar-highlight')
        scroll.href = '#contact'
      } else if(entries[0].target == contact) {
        const navbarContact = document.getElementById('navbar-contact')
        navbarContact.classList.add('navbar-highlight')
        scroll.href = '#home'
        scroll.classList.remove('scroll-down')
        scroll.classList.add('scroll-up')
      };
    }
    if(entries[0].isIntersecting == false) {
      if(entries[0].target == home) {
        const navbarHome = document.getElementById('navbar-home')
        navbarHome.classList.remove('navbar-highlight')
      } else if(entries[0].target == about) {
        const navbarAbout = document.getElementById('navbar-about')
        navbarAbout.classList.remove('navbar-highlight')
      } else if(entries[0].target == portfolio) {
        const navbarPortfolio = document.getElementById('navbar-portfolio')
        navbarPortfolio.classList.remove('navbar-highlight')
      } else if(entries[0].target == contact) {
        const navbarContact = document.getElementById('navbar-contact')
        navbarContact.classList.remove('navbar-highlight')
        scroll.classList.remove('scroll-up')
        scroll.classList.add('scroll-down')
      }
    }
  }, { threshold: [1] })

  observer.observe(home)
  observer.observe(about)
  observer.observe(portfolio)
  observer.observe(contact)
}