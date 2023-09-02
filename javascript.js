// Selecting the IMG element
const img = document.querySelector("img")
let defaultString = "cats"
fetchGif(defaultString)

// Fetches GIF from the GIPHY API
function fetchGif(defaultString) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=qEt9iQEaTZ1jXC3o44lwSnEHADWip5lq&s=${defaultString}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        }).then(function(response) {
            img.src = response.data.images.original.url;
        }).catch(function (response) {
            if (response.data === []) {
                defaultString = "error";
                fetchGif(defaultString)
            }
        })
}

// Makes the form for changing the GIF appear and disappear
let isHidden = true;
document.querySelector(".new-gif").addEventListener("click", function() {
    if (isHidden) {
        const newGifForm = document.querySelector("#new-gif-form");
        newGifForm.style.display = "flex";
        isHidden = false;
    } else {
        const newGifForm = document.querySelector("#new-gif-form");
        newGifForm.style.display = "none";
        isHidden = true;
    }
})

// Sends the entered GIF search to the function that changes the GIF displayed
document.querySelector("#new-gif-form").addEventListener("submit", function(event) {
    event.preventDefault();
    createNewGif();
})

function createNewGif() {
    const form = document.querySelector("#new-gif-form");
    form.style.display = "none";
    defaultString = document.querySelector("#title").value;
    form.reset()
    isHidden = true;
    fetchGif(defaultString)
}

// Adds an event listener to the refresh button to refresh the GIF
document.querySelector(".refresh-gif").addEventListener("click", function() {
    refreshGif();
})

function refreshGif() {
    fetchGif(defaultString)
}