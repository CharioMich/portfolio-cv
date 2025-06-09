/**
 * Updates data-bs-dismiss attribute on offcanvas li elements 
 * so the offcanvas can dissapear after section selection on smaller screens.
 * Also toggles w-50 class on about me section cards
 */ 
function updateOffcanvasDismiss() {
  const navLinks = document.querySelectorAll(".offcanvas-body .nav-item");
  const aboutCards = document.querySelectorAll(".cf-about");
  const headContainer1 = document.getElementById("head1");
  const headContainer2 = document.getElementById("head2");

  if (window.innerWidth < 768) {
    navLinks.forEach((link) => {
      link.setAttribute("data-bs-dismiss", "offcanvas");
    });
    aboutCards.forEach((card) => {
      card.classList.remove("w-50");
    });
  } else {
    navLinks.forEach((link) => {
      link.removeAttribute("data-bs-dismiss");
    });
    aboutCards.forEach((card) => {
      card.classList.add("w-50");
    });
  }
}

// Run on page load
updateOffcanvasDismiss();

// Update on window resize
window.addEventListener("resize", updateOffcanvasDismiss);

// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();