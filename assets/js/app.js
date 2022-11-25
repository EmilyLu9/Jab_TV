// Hamburger menu 
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul")
hamburger.addEventListener('click', openMenu)
function openMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active')
}
const navLink = document.querySelectorAll('#nav');
navLink.forEach((n) => n.addEventListener('click', closeMenu));
function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Close menu on nav menu clicks

// scroll to top functionality
/* Select the button with ID */
const scrollUp = document.querySelector("#scroll-up");

/* click move to top => top left 0 */
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// Theme switcher functionality
const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", () => {
    /* Toggle website theme */
    document.body.classList.toggle("dark");
});
