document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("imageholder");
    const descriptionElement = document.getElementById("description");
    const id = new URLSearchParams(window.location.search).get("id");
    const image = document.createElement("img");
    image.src = id;
    imageElement.appendChild(image);
})