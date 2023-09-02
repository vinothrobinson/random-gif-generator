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
        });
}
