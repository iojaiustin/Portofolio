
document.addEventListener("DOMContentLoaded", function() {
  const skills = document.getElementById("skills-scroll");
  if (!skills) return;

  // Only run on mobile (under 600px)
  if (window.innerWidth > 600) return;

  let direction = 1; // 1: right, -1: left
  let step = 1; // px per frame
  let interval = null;

  function autoScroll() {
    // Scroll by step pixels in the current direction
    skills.scrollLeft += step * direction;

    // If we reach the right end
    if (skills.scrollLeft + skills.clientWidth >= skills.scrollWidth - 2) {
      direction = -1; // change direction to left
    }
    // If we reach the left end
    if (skills.scrollLeft <= 0) {
      direction = 1; // change direction to right
    }
  }

  interval = setInterval(autoScroll, 20); // 50fps

  // Pause scroll on hover/touch
  skills.addEventListener('mouseenter', () => { clearInterval(interval); });
  skills.addEventListener('mouseleave', () => { interval = setInterval(autoScroll, 20); });
  skills.addEventListener('touchstart', () => { clearInterval(interval); });
  skills.addEventListener('touchend', () => { interval = setInterval(autoScroll, 20); });
});

