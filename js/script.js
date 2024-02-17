//taglle class active
const navbarNav = document.querySelector('.navbar-nav');
//keitka hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
});

//pop up list product
function togglePopup1() {
  document.getElementById('popup-1').classList.toggle('active');
}
function togglePopup2() {
  document.getElementById('popup-2').classList.toggle('active');
}
function togglePopup3() {
  document.getElementById('popup-3').classList.toggle('active');
}
function togglePopup4() {
  document.getElementById('popup-4').classList.toggle('active');
}
//Animation On Scroll
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    }
  });
};
//show readmore
const parentContainer = document.querySelector('.about .row .content');
parentContainer.addEventListener('click', (event) => {
  const current = event.target;
  const isReadBtn = current.className.includes('read-btn');
  if (!isReadBtn) return;
  const currentText = event.target.parentNode.querySelector('.read-text');
  currentText.classList.toggle('read-text--show');
  current.textContent = current.textContent.includes('Read More') ? 'Read Less...' : 'Read More...';
});
