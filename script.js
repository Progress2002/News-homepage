const mobileNav = document.getElementById('mobile-nav')
const navToggleBtn = document.querySelector('#hamburger')
const overlay = document.querySelector('#overlay')

const toggle = () => {
  mobileNav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
  overlay.classList.toggle('active');
}

navToggleBtn.addEventListener('clicks', toggle)
