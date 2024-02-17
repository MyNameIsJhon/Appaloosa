const menuItems = document.querySelectorAll('#menu li');
const sections = document.querySelectorAll('section');
const stickyNav = document.getElementById('stickyNav');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    menuItems.forEach((item) => {
        item.classList.remove('active');
        if (item.querySelector('a').getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });

    // Laissez le menu toujours fixé en haut de la page
});

