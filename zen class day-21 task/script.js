// Fetch random dog image
function fetchDogImage() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => data.message);
}

// Display dog image on the page
function displayDogImage(imageUrl) {
  const dogImage = document.getElementById("dogImage");
  dogImage.src = imageUrl;
}

// Fetch country data
function fetchCountryData() {
  return fetch("https://restcountries.com/v3/all")
    .then((response) => response.json())
    .then((data) => data.slice(0, 5)); // Get first 5 countries for demo purposes
}

// Display country information on the page
function displayCountryData(countryData) {
  const countryList = document.getElementById("countryList");
  countryData.forEach((country) => {
    const listItem = document.createElement("li");
    listItem.textContent = country.name.common;
    countryList.appendChild(listItem);
  });
}

// Fetch a random joke
function fetchRandomJoke() {
  return fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => data.joke);
}

// Display joke on the page
function displayJoke(joke) {
  const jokeText = document.getElementById("jokeText");
  jokeText.textContent = joke;
}

// Fetch data from APIs and display on the page
function fetchData() {
  fetchDogImage()
    .then((imageUrl) => displayDogImage(imageUrl))
    .catch((error) => console.error("Error fetching dog image:", error));

  fetchCountryData()
    .then((countryData) => displayCountryData(countryData))
    .catch((error) => console.error("Error fetching country data:", error));

  fetchRandomJoke()
    .then((joke) => displayJoke(joke))
    .catch((error) => console.error("Error fetching joke:", error));
}

// Invoke fetchData function on page load
window.addEventListener("load", fetchData);
