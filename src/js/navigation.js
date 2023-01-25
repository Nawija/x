const header = document.getElementById("header");
const nav = document.getElementById("nav");
const allLinks = document.querySelectorAll("a");
const priceSection = document.querySelectorAll(".priceSection");
const burger = document.getElementById("burger");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        header.classList.add("shadow-lg");
    } else {
        header.classList.remove("shadow-lg");
    }
});

for (const link of priceSection) {
    link.addEventListener("click", scrollToSection);
}


function scrollToSection(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    const headerHeight = document.querySelector("#header").offsetHeight;
  
    scroll({
      top: offsetTop - headerHeight,
      behavior: "smooth"
    });
  }


burger.addEventListener("click", () => {
    if (nav.classList.contains("hidden")) {
        nav.classList.add("navToggle");
        nav.classList.remove("hidden");
    } else {
        nav.classList.remove("navToggle");
        nav.classList.add("hidden");
    }
    nav.classList.toggle("shadow-lg");
    allLinks.forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.add("hidden");
            nav.classList.remove("navToggle");
        });
    });
});
