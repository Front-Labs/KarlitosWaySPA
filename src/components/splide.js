import Splide from '@splidejs/splide';
import Video from '@splidejs/splide-extension-video';


export const splide = () => {
  if(window.innerHeight > window.innerWidth) {
    // portrait
    new Splide( '.splide', {
        type       : 'fade',
        arrows     : false,
        cover      : true,
        height     : '100vh'
  
    }).mount( { Video } )
  } else {
    // landscape
    new Splide( '.splide', {
        video      : {
        width: '100vw',
      },
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
        trimSpace  : true,
        pagination : false
    }).mount( { Video } );
  }
}