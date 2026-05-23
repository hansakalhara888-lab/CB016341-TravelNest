// Hamburger menu 
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}


// Reusable localStorage helpers (used across all pages)
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}


// Scroll-reveal animation for elements with class "reveal"
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  revealElements.forEach(element => {
    const position = element.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      element.classList.add("show");
    }
  });
});


// Newsletter subscription (saves email to localStorage)
const newsletterForm = document.querySelector("#newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = document.querySelector("#newsletterEmail").value;

    localStorage.setItem("travelnest_newsletter", email);

    document.querySelector("#newsletterMsg").textContent =
      "Subscribed successfully!";

    newsletterForm.reset();
  });
}