document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    async function searchImages(query) {
        const accessKey = 'GkYqDGQFy7wRxS1Q5ULtCHLrpRhE_l9DhECspJZ_kcM';
        const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=18&client_id=${accessKey}`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayImages(data.results);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    function displayImages(images) {
        const imagesDiv = document.getElementById('images');
        imagesDiv.innerHTML = '';

        images.forEach(image => {
            const imgDiv = document.createElement('div');
            imgDiv.className = 'image';
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.small;
            imgDiv.appendChild(imgElement);

            const photographer = document.createElement('p');
            photographer.textContent = `Photographer: ${image.user.name}`;
            imgDiv.appendChild(photographer);

            const likes = document.createElement('p');
            likes.textContent = `Likes: ${image.likes}`;
            imgDiv.appendChild(likes);

            const downloadLink = document.createElement('a');
            downloadLink.href = image.links.download;
            downloadLink.textContent = 'Download Image';
            downloadLink.target = '_blank';
            imgDiv.appendChild(downloadLink);
            
            imagesDiv.appendChild(imgDiv);

            imgDiv.addEventListener('click', function() {
                location.replace(`./imagepage.html?id=${imgElement.src}&photographer=${image.user.name}&likes=${image.likes}`);
            });
        });
        document.getElementsByTagName('footer')[0].style.position = 'static';
    }

    const searchQuery = document.getElementById("searchQuery");
    const searchBar = document.getElementById("searchbar");
    
    searchBar.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = searchQuery.value;
        history.pushState(null, '', `?query=${query}`);
        searchImages(query);
    });

    const initialQuery = getQueryParam("query");
    if (initialQuery) {
        searchQuery.value = initialQuery;
        searchImages(initialQuery);
    }
    const arrow = document.getElementById("arrow")
    arrow.addEventListener("click", function(){
        if(document.getElementById("aside").style.width == "4vw"){
            document.getElementById("aside").style.width = "20vw"
            Array.from(document.getElementsByClassName("sidepanel")).forEach(element => {
                element.style.opacity = "1"
            })
            document.getElementById("arrow").style.transform = "rotate(0deg)"
            document.querySelector("main").style.width = "80vw"
        }
        else{
        document.getElementById("aside").style.width = "4vw"
        Array.from(document.getElementsByClassName("sidepanel")).forEach(element => {
            element.style.opacity = "0"
        })
        document.getElementById("arrow").style.transform = "rotate(180deg)"
        document.querySelector("main").style.width = "96vw"
        }
    })
});
