let isScrollingRight = true;
let isScrollingLeft = false; // Added this line
let scrollDirection = 10;
const gallery = document.getElementById("gallery");
const previewtext = document.getElementById("previewtext");

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
  "pink",
  "indigo",
]
setInterval(() => {
  previewtext.style.color = colors[Math.floor(Math.random() * colors.length)];
}, 500);