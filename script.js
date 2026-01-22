// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        if (id.startsWith('#')) {
            e.preventDefault();
            const el = document.querySelector(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Highlight active navigation item on scroll
const sections = Array.from(document.querySelectorAll('section, header'));
const navLinks = Array.from(document.querySelectorAll('nav a:not(.cta):not(.nav-brand)'));

const onScroll = () => {
    const top = window.scrollY + 100;
    let current = sections[0];
    
    for (const section of sections) {
        if (section.offsetTop <= top) {
            current = section;
        }
    }
    
    navLinks.forEach(link => link.classList.remove('active'));
    
    const id = current && current.id ? '#' + current.id : null;
    if (id) {
        const activeLink = document.querySelector(`nav a[href="${id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
};

if (sections.length && navLinks.length) {
    window.addEventListener('scroll', onScroll);
    onScroll();
}
