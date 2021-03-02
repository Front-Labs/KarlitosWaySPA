import Splide from '@splidejs/splide'

export const splide = () => {
  if(window.innerHeight > window.innerWidth) {
    // portrait
    new Splide( '.splide', {
      type       : 'fade',
      arrows     : false,
      cover      : true,
      height     : '100vh'
    }).mount()
  } else {
    // landscape
    new Splide( '.splide', {
      type       : 'loop',
      padding    : {
        right    : '10rem',
        left     : '10rem'
      },
      gap        : '3rem',
      height     : '60vh',
      cover      : true,
      width      : '100vw',
      focus      : 'center',
      trimSpace  : true
    }).mount()
  }
}