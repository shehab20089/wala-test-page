import "../scss/styles.scss";
import { Dropdown } from "bootstrap";

// check if Nav Left the Header
// Get the header and nav element
const header = document.querySelector("header");
const nav = document.querySelector("nav");

// Create a new intersection observer
const observer = new IntersectionObserver((entries) => {
  // Loop through the entries
  entries.forEach((entry) => {
    // Check if the nav element has left the header element
    if (!entry.isIntersecting) {
      nav.classList.add("fixed-top");
      nav.style.backgroundColor = "#00ce8b";
    }
    if (entry.isIntersecting) {
      nav.classList.remove("fixed-top");
      nav.style.backgroundColor = "transparent";
    }
  });
});

// Observe the header element
observer.observe(header);
