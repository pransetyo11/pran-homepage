 //fade effect
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("opacity-0", "translate-y-10");
    document.body.classList.add("opacity-100", "translate-y-0");
  });

// navbar fixed
window.addEventListener('scroll', function () {

    const header = document.querySelector('#header');
    const toTop = document.querySelector('#to-top');

    // navbar blur
    if (window.scrollY > 50) {

        header.classList.add('navbar-fixed');

        toTop.classList.remove('hidden');
        toTop.classList.add('flex');

        // munculkan navbar
        header.classList.remove('nav-hidden');
        header.classList.add('nav-show');

    } else {

        header.classList.remove('navbar-fixed');

        toTop.classList.add('hidden');
        toTop.classList.remove('flex');

        // sembunyikan navbar
        header.classList.remove('nav-show');
        header.classList.add('nav-hidden');
    }

});

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu= document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-aktif')
    navMenu.classList.toggle('hidden');
});

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

const words = [
  "Mechatronics Engineer",
  "AI Engineer",
  "Electrical & Automation",
  "C++ & Python Developer",
  "Deep Learning Enthusiast"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  const el = document.getElementById("typewriter");

  if (isDeleting) {
    el.textContent = currentWord.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  } else {
    el.textContent = currentWord.substring(0, j++);
    if (j > currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  }

  setTimeout(type, isDeleting ? 40 : 80);
}

type();

window.addEventListener('load', () => {
    const header = document.querySelector('#header');
    header.classList.add('nav-hidden');
});

// slidebar seabank
const slider = document.getElementById('seabank-slider');
const dots = document.querySelectorAll('.dot');

function scrollSlider(id, direction) {

    const slider = document.getElementById(id);

    const scrollAmount = slider.clientWidth;

    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// slidebar project cnn one piece
const onepieceSlider = document.getElementById('onepiece-slider');
const onepieceDots = document.querySelectorAll('.onepiece-dot');

onepieceSlider.addEventListener('scroll', () => {

    const index = Math.round(
        onepieceSlider.scrollLeft / onepieceSlider.clientWidth
    );

    onepieceDots.forEach((dot, i) => {

        if (i === index) {

            dot.classList.remove(
                'bg-slate-300',
                'dark:bg-slate-600'
            );

            dot.classList.add('bg-primary');

        } else {

            dot.classList.remove('bg-primary');

            dot.classList.add(
                'bg-slate-300',
                'dark:bg-slate-600'
            );
        }
    });
});

slider.addEventListener('scroll', () => {

    const index = Math.round(
        slider.scrollLeft / slider.clientWidth
    );

    dots.forEach((dot, i) => {

        if (i === index) {

            dot.classList.remove(
                'bg-slate-300',
                'dark:bg-slate-600'
            );

            dot.classList.add('bg-primary');

        } else {

            dot.classList.remove('bg-primary');

            dot.classList.add(
                'bg-slate-300',
                'dark:bg-slate-600'
            );
        }
    });
});