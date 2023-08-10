// Step One: Get the Data

// Write a function that gets the JSON and parses the JSON to create an array of objects

function getPokemonData(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.vschool.io/pokemon", true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200){
            const data = JSON.parse(xhr.responseText);
            const pokemonObjects = data.objects[0].pokemon;
            callback(pokemonObjects);
        }
    };
    xhr.send();
}





// Step Two: Display the Data

// Make each Pokemon's name show up on a separate line in the browser.
// You will be using a for loop to iterate through each pokemon object, and some DOM mamnipulation to add nodes for each Pokemon.

function displayPokemonNames(pokemonArray){
    const list = document.createElement("ul");

    pokemonArray.forEach(function (pokemon){
        const listItem = document.createElement("li");
        listItem.textContent = pokemon.name;
        list.appendChild(listItem);
    });
    document.body.appendChild(list);
}
    getPokemonData(displayPokemonNames);





// Extra Credit: Display Details about each Pokemon

// You'll need to manually create an XML HTTP Request and handle the readyState with onReadyStateChange.
// You'll need to use the built-in JavaScript JSON object to change the JSON into a useable JavaScript object. 
// You'll need to use pure JavaScript to create and add an element to your HTML.


// function getPokemonData(callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://api.vschool.io/pokemon", true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText);
//             const pokemonObjects = data.objects[0].pokemon;
//             callback(pokemonObjects);
//         }
//     };
//     xhr.send();
// }

// function displayPokemonDetails(pokemonArray) {
//     const list = document.getElementById("pokemon-details");

//     pokemonArray.forEach(function (pokemon) {
//         const listItem = document.createElement("li");
        
//         getPokemonDetails(pokemon.resource_uri, function (details) {
//             listItem.textContent = `Name: ${pokemon.name}, Height: ${details.height}, Weight: ${details.weight}`;
//             list.appendChild(listItem);
//         });
//     });
// }

// function getPokemonDetails(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const details = JSON.parse(xhr.responseText);
//             callback(details);
//         }
//     };
//     xhr.send();
// }

// getPokemonData(displayPokemonDetails);