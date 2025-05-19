document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById("header__menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const body = document.body;

    const catalogBtn = document.getElementById("header__side-second");

    const catalogueBtn = document.getElementById("header__second-catalogue-btn");
    const catalogueMenu = document.getElementById("mobile-menu__catalogue");

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
    });
});