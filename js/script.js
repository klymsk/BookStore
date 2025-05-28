document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById("header__menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const body = document.body;

    const catalogBtn = document.getElementById("header__side-second");

    const catalogueBtn = document.getElementById("header__second-catalogue-btn");
    const catalogueMenu = document.getElementById("mobile-menu__catalogue");

    const header = document.querySelector("header");

    document.body.classList.add('preload');

    menuBtn.addEventListener("click", function() {
        mobileMenu.classList.toggle("active");
        if (mobileMenu.classList.contains("active")) {
            catalogBtn.style.display = "none";
            body.classList.add('no-scroll');
        } else {
            catalogBtn.style.display = "";
            body.classList.remove('no-scroll');
        }
    });

    catalogueBtn.addEventListener("click", function() {
        catalogueMenu.classList.toggle("active");
        header.classList.toggle("active");
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.pointerEvents = 'none';
            preloader.style.transition = 'opacity 0.5s ease';
            document.body.classList.remove('preload');
            setTimeout(() => {
            preloader.remove();
            }, 500);
        }
        }, 2000); 
    });
});