const accesskey = "Ef0Tt4fvNu30xqHL2D0acUV3-NPUgd6O_48FCFEm1Tc";

const formEl = document.querySelector("form");
const inputE1 = document.getElementById("Search-input");
const SearchResults = document.querySelector(".search-results");
const showMore = document.getElementById("showmore-btn");


let inputData= ""
let page = 1;

async  function searchImages(){  
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

    const reponse = await  fetch(url);
    const data = await reponse.json();

    const results = data.results;

    if (page === 1) {
        SearchResults .innerHTML ="";
    }

    results.map((result)=>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("serach-result");
        const image = document.createElement("img") ;
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target ="_blank";
        imageLink.textContent = result.alt_description;


        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        SearchResults.appendChild(imageWrapper);
    });

    page++
    if (page > 1) {
        showMore.style.display = "block";
    }
}

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", (event)=>{
    searchImages();
});


var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})


function toggleTheme() {
    // ... existing code
  
    // Update anchor tag color variables based on theme
    if (currentTheme === lightTheme) {
      document.documentElement.style.setProperty('--text-color-dark', '#ddd');
      document.documentElement.style.setProperty('--accent-color-dark', '#000');
    } else {
      document.documentElement.style.setProperty('--text-color-dark', '#fff');
      document.documentElement.style.setProperty('--accent-color-dark', '#007bff');
    }
  }