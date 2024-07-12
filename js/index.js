document.addEventListener("DOMContentLoaded", function () {
  let isScrollingRight = true;
let isScrollingLeft = false; // Added this line
let scrollDirection = 10;
const gallery = document.getElementById("gallery");
const previewtext = document.getElementById("previewtext");
const getstarted = document.getElementById("getstarted");
let highlightcolor = getComputedStyle(document.documentElement).getPropertyValue("--highlight-color"); // Added this line to get the highlight color from the document.querySelector(":root")

function searchImages() {
  location.replace("./html/dashboard.html?query=" + document.getElementById("searchQuery").value);
}
function scrollGallery() {
  if (isScrollingRight) {
    if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 10) {
      isScrollingRight = false;
      isScrollingLeft = true;
      scrollDirection = -10;
    }
  } else if (isScrollingLeft) {
    if (gallery.scrollLeft === 0) {
      isScrollingLeft = false;
      isScrollingRight = true;
      scrollDirection = 10;
    }
  }

  gallery.scrollLeft += scrollDirection;
}
setInterval(scrollGallery, 100); // Call scrollGallery function every 100 milliseconds
let colors = [
  "purple",
  "blue",
  "violet",
  "whitesmoke",
  "indigo",
]
setInterval(() => {
  highlightcolor = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector(":root").style.setProperty("--highlight-color", highlightcolor);
}, 800);
document.getElementById("searchbar").addEventListener("submit", (event) => {
  event.preventDefault();
  searchImages();
})
})
