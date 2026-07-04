const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

function closeMenu() {
  navLinks?.classList.remove("active");
  if (hamburger) {
    hamburger.setAttribute("aria-expanded", "false");
  }
}

function openMenu() {
  navLinks?.classList.add("active");
  if (hamburger) {
    hamburger.setAttribute("aria-expanded", "true");
  }
}

if (hamburger && navLinks && navbar) {
  hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = navLinks.classList.contains("active");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target)) {
      closeMenu();
    }
  });
}
