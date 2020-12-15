const hamburgerMenu = document.querySelector('.hamburger-menu');

// Event listeners
hamburgerMenu.addEventListener('click', () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
})