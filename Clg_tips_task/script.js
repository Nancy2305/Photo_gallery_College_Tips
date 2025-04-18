// gallery.js

const slides = {
  team: ["images/team1.jpg", "images/team2.jpg"],
  creative: ["images/creative1.jpg", "images/creative2.jpg"],
  fun: ["images/fun1.jpg", "images/fun2.jpg"],
  bts: ["images/bts1.jpg", "images/bts2.jpg"]
};

const currentIndex = {
  team: 0,
  creative: 0,
  fun: 0,
  bts: 0
};

function nextSlide(category) {
  currentIndex[category] = (currentIndex[category] + 1) % slides[category].length;
  document.getElementById(`${category}-slide`).src = slides[category][currentIndex[category]];
}
