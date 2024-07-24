document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("imageholder");
    const descriptionElement = document.getElementById("description");
    const id = new URLSearchParams(window.location.search).get("id");
    const photographer = new URLSearchParams(window.location.search).get("photographer");
    const likes = new URLSearchParams(window.location.search).get("likes");
    descriptionElement.innerHTML = `<h1>Photographer: ${photographer}</h1><h1>Likes: ${likes}</h1>`;
    const image = document.createElement("img");
    image.src = id;
    imageElement.appendChild(image);

    
})