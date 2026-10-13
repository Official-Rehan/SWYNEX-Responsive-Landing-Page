"use strict";

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("active");

  menuBtn.textContent = isOpen ? "×" : "☰";

  menuBtn.setAttribute("aria-expanded", String(isOpen));

  menuBtn.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// Close menu after selecting a navigation link
document.querySelectorAll("#navLinks a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");

    menuBtn.textContent = "☰";

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation");
  });
});

// Scroll reveal animations
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(function (element) {
    observer.observe(element);
  });
} else {
  revealElements.forEach(function (element) {
    element.classList.add("visible");
  });
}

// Automatically update the footer year
document.getElementById("year").textContent =
  new Date().getFullYear();