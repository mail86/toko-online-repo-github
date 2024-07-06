//toggle class #box
var myAudio = document.getElementById("Audio");
var isPlaying = false;
function togglePlay() {
myAudio.play();
terakhir = document.querySelector('#box'); terakhir.classList.add('hide');
  };

  
// toggle class active
const navbarNav = document.querySelector
( '.navbar-nav' );

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
  navbarNav.classList.toggle('active');  
};                                                                   


// klik di luar si debar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

  
  