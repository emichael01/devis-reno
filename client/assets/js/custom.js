var navbar = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".mobile-nav ul li");
window.onscroll = function () {
    if (window.pageYOffset > 80) {
        navbar.classList.add("stickyadd");
    } else {
        navbar.classList.remove("stickyadd");
    }

    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};

// Menu Colleped
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// Client Review
var swiper = new Swiper(".client-review-slider", {
    autoplay: true,
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 3000 },
    navigation: {
        nextEl: ".client-review .swiper-btn-next",
        prevEl: ".client-review .swiper-btn-prev",
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
            spaceBetween: 28,
        },
    },
});

// VanillaCounter
VanillaCounter();
