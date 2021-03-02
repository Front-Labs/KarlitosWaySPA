import Swal from "sweetalert2"

export const swal = () => {
  const phone = document.getElementById('phone')
  const instagram = document.getElementById('instagram')
  const email = document.getElementById('email')

  phone.addEventListener('click', (event) => {
    Swal.fire({
      width: 350,
      imageUrl: 'http://res.cloudinary.com/daanr37/image/upload/v1608563352/Karlitos%20Way/telephone-qr_a1u4ml.svg',
      imageHeight: 250,
      imageWidth: 250,
      imageAlt: 'Call QR Code',
      showConfirmButton: false,
      background: 'rgba(0,0,0,0)',
      showCloseButton: true
      // html: '<p>SCAN ME!</p>'
    })
  })

  instagram.addEventListener('click', (event) => {
    Swal.fire({
      width: 350,
      imageUrl: 'http://res.cloudinary.com/daanr37/image/upload/v1608563350/Karlitos%20Way/instagram-qr_osangw.svg',
      imageHeight: 250,
      imageWidth: 250,
      imageAlt: 'Instagram QR Code',
      showConfirmButton: false,
      background: 'rgba(0,0,0,0)',
      showCloseButton: true
      // html: '<p>SCAN ME!</p>'
    })
  })

  email.addEventListener('click', (event) => {
    Swal.fire({
      width: 350,
      imageUrl: 'http://res.cloudinary.com/daanr37/image/upload/v1608563327/Karlitos%20Way/email-qr_pvvwd8.svg',
      imageHeight: 250,
      imageWidth: 250,
      imageAlt: 'Email QR Code',
      showConfirmButton: false,
      background: 'rgba(0,0,0,0)',
      showCloseButton: true
      // html: '<p>SCAN ME!</p>'
    })
  })
}