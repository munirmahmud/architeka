const hamburgerMenu = document.querySelector('.hamburger-menu');

// Event listeners
hamburgerMenu.addEventListener('click', () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
});

// Add scroll behaviour 
const scrollTop = document.querySelector('.scroll-btn');
scrollTop.addEventListener('click', () => {
    let htmlEl = document.querySelector('html');
    htmlEl.style.scrollBehavior = 'smooth';

    setTimeout(() => {
        htmlEl.style.scrollBehavior = 'unset';
    }, 1000);
});