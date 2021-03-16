import Swal from "sweetalert2"

export const swal = () => {
  const phone = document.getElementById('phone')
  const instagram = document.getElementById('instagram')
  const email = document.getElementById('email')

  phone.addEventListener('click', (event) => {
    Swal.fire({
      width: 350,
      imageUrl: './images/phone-qr.svg',
      imageHeight: 250,
      imageWidth: 250,
      imageAlt: 'Call QR Code',
      showConfirmButton: false,
      background: 'rgba(0,0,0,0)',
      showCloseButton: true
    })
  })

  instagram.addEventListener('click', (event) => {
    Swal.fire({
      width: 350,
      imageUrl: './images/instagram-qr.svg',
      imageHeight: 250,
      imageWidth: 250,
      imageAlt: 'Instagram QR Code',
      showConfirmButton: false,
      background: 'rgba(0,0,0,0)',
      showCloseButton: true
    })
  })

  email.addEventListener('click', (event) => {
    Swal.fire({
      width: 350,
      imageUrl: './images/email-qr.svg',
      imageHeight: 250,
      imageWidth: 250,
      imageAlt: 'Email QR Code',
      showConfirmButton: false,
      background: 'rgba(0,0,0,0)',
      showCloseButton: true
    })
  })
}