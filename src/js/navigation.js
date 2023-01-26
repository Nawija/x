const header = document.getElementById("header");
const navList = document.getElementById("navList");
const allLinks = document.querySelectorAll("a");
// const priceSection = document.querySelectorAll(".priceSection");
const burger = document.getElementById("burger");

// svg icons burger and close
const b = document.querySelector(".b");
const x = document.querySelector(".x");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        header.classList.add("shadow-lg");
    } else {
        header.classList.remove("shadow-lg");
    }
});

// for (const link of priceSection) {
//     link.addEventListener("click", scrollToSection);
// }

// function scrollToSection(e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");
//     const offsetTop = document.querySelector(href).offsetTop;
//     const headerHeight = document.querySelector("#header").offsetHeight;

//     scroll({
//         top: offsetTop - headerHeight,
//         behavior: "smooth",
//     });
// }

burger.addEventListener("click", () => {
    x.classList.toggle("hidden");
    b.classList.toggle("hidden");
});

burger.addEventListener("click", () => {
    if (navList.classList.contains("-top-[400%]")) {
        navList.classList.add("top-[100%]");
        navList.classList.remove("-top-[400%]");
        navList.classList.add("opacity-100");
        navList.classList.remove("opacity-0");
        x.classList.remove("hidden");
        b.classList.add("hidden");
    } else {
        navList.classList.remove("top-[100%]");
        navList.classList.add("-top-[400%]");
        navList.classList.remove("opacity-100");
        navList.classList.add("opacity-0");
        x.classList.add("hidden");
        b.classList.remove("hidden");
    }
    navList.classList.toggle("shadow-lg");
    allLinks.forEach((item) => {
        item.addEventListener("click", () => {
            navList.classList.add("-top-[400%]");
            navList.classList.remove("top-[100%]");
            navList.classList.remove("opacity-100");
            navList.classList.add("opacity-0");
            x.classList.add("hidden");
            b.classList.remove("hidden");
        });
    });
});
