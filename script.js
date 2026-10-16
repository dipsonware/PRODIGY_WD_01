const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Change navbar style on scroll
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // run once on page load

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
  hamburger.classList.toggle("active");
});