 //fade effect
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("opacity-0", "translate-y-10");
    document.body.classList.add("opacity-100", "translate-y-0");
  });

// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else{
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden')
        toTop.classList.remove('flex')
    }
}

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu= document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-aktif')
    navMenu.classList.toggle('hidden');
});
// 
function toggleContent() {
    const contentContainer = document.getElementById("contentContainer");
    const gradientOverlay = document.getElementById("gradientOverlay");
    const readMoreButton = document.getElementById("readMoreButton");
    
    contentContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    // Toggle Kontainer
    if (contentContainer.classList.contains("max-h-48")) {
      contentContainer.classList.remove("max-h-48");
      contentContainer.classList.add("max-h-full");
      gradientOverlay.style.display = "none";
      readMoreButton.textContent = "Read Less";
    } else {
      contentContainer.classList.add("max-h-48");
      contentContainer.classList.remove("max-h-full");
      gradientOverlay.style.display = "block";
      readMoreButton.textContent = "Read More";
    }
  }

  
// klik diluar hamburger
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-aktif')
        navMenu.classList.add('hidden');
    }
});

// darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// toggle sesuai mode
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}