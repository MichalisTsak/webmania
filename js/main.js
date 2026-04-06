/* global Typed, mixitup */
const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');



iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

// Throttle helper
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}

// Change background header
function scrollHeader() {
    const header = document.getElementById('header');
    window.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', throttle(scrollHeader, 100));


/* ============= Hero type effect =============  */

const typed = document.querySelector('.typed');

if(typed){
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');

    new Typed('.typed', {
        strings: typed_strings,
        typeSpeed: 90,
        backSpeed: 60,
        loop: true,
        backDelay: 2200
    });
}

// Scroll sections active link

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrlY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight; 
        const sectionTop = section.offsetTop - 50;  

        let sectionId = section.getAttribute('id');

        if(scrlY > sectionTop && scrlY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href*="' + sectionId + '"]').classList.add('active-link');
        } else {
            document.querySelector('.menu a[href*="' + sectionId + '"]').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', throttle(scrollActive, 100));


// Resume tabs — click only
const tabLinks = document.querySelectorAll('.resume_tabs ul li a');
const pages = document.querySelectorAll('.page');

tabLinks.forEach((tabLink, index) => {
    tabLink.addEventListener('click', function (event) {
        event.preventDefault();

        tabLinks.forEach(link => link.classList.remove('current'));
        tabLink.classList.add('current');

        pages.forEach(page => page.classList.remove('active'));
        pages[index].classList.add('active');

        const resumeSection = document.getElementById('resume');
        window.scrollTo({
            top: resumeSection.offsetTop + 90,
            behavior: 'smooth'
        });
    });
});





// Scroll fade-in animations
const animatedEls = document.querySelectorAll(
    '.section_title, .about_img, .about_content, .portfolio_filters'
);
animatedEls.forEach(el => el.classList.add('fade-up'));

document.querySelectorAll('.resume_wrap').forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = (i % 5) * 0.08 + 's';
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.transitionDelay = '0s';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


// Portfolio
let filterItems = document.querySelectorAll('.portfolio_filters li');

function activePortfolio(event) {
    filterItems.forEach(el => {
        el.classList.remove('filter-active');
    });
    event.currentTarget.classList.add('filter-active');
}

filterItems.forEach(el => {
    el.addEventListener('click', activePortfolio);
})

// mixitup filter

let mixerPortfolio = mixitup('.portfolio_wrap-container', {
            selectors: {
                target: '.portfolio_item'
            },
            animation: {
                duration: 300
            }
    })








