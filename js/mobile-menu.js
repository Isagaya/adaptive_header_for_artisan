let mobileMenuBtn = document.querySelector('.mobile-menu img');

mobileMenuBtn.addEventListener('click', () => {
    let mobileMenu = document.querySelector('.mobile-slide');
    let menuImage = document.querySelector('.mobile-menu img');

    if (mobileMenu.classList.contains('active')) {
        menuImage.src = 'css/img/close-state.png';
        mobileMenu.classList.toggle('active');

    } else {
        menuImage.src = 'css/img/open-state.png';
        mobileMenu.classList.toggle('active');
    }
});