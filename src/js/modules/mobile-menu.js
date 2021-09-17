export default function mobileMenu() {
    if (document.getElementById('menu__button')) {
        const hamburger = document.getElementById('menu__button');
        const menu = document.querySelector('.menu-top');
        const body = document.querySelector('body');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('menu-top--open');
            body.classList.toggle('no-scroll');
        });
    }
}
