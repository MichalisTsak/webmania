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

// Change background header
function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);


/* ============= Hero type effect =============  */

const typed = document.querySelector('.typed');

if(typed){
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');

    new Typed('.typed', {
        strings: typed_strings,
        typeSpeed: 80,
        backSpeed: 40,
        loop: true,
        backDelay: 2000
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
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


// Resume scroll

const pages = document.querySelectorAll('.page');
const resume = document.querySelector('.resume');   

function resumeActive(){
    const scrly = window.scrollY;
    
    pages.forEach(page => { 
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 300;

        let sectionId = page.getAttribute('id');

        if(scrly > sectionTop && scrly <= sectionTop + sectionHeight) {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current');
        } else {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current');
        }
    })
}


window.addEventListener('scroll', resumeActive);

// Resume tabs show only when pressed and also scroll to the top of the resume section when you click on a tab link


   // Get all tab links and pages
const tabLinks = document.querySelectorAll('.resume_tabs ul li a');
const pagez = document.querySelectorAll('.page');

// Add click event listener to each tab link
tabLinks.forEach((tabLink, index) => {
    tabLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior

        // Remove 'current' class from all tab links
        tabLinks.forEach(link => link.classList.remove('current'));

        // Add 'current' class to the clicked tab link
        tabLink.classList.add('current');

        // Hide all pages
        pagez.forEach(page => page.classList.remove('active'));

        // Show the corresponding page based on the index
        pagez[index].classList.add('active');

        // Scroll to the top of the resume section
        const resumeSection = document.getElementById('resume');
        window.scrollTo({
            top: resumeSection.offsetTop + 90, // Adjust the offset as needed
            behavior: 'smooth'
        });
    });
});





// Portfolio 
let filterItems = document.querySelectorAll('.portfolio_filters li');

function activePortfolio() {
    filterItems.forEach(el => {
        el.classList.remove('filter-active')
        this.classList.add('filter-active');
        });
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








