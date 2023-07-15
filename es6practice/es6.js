// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// task 1
// Re-write this `.map()` using an arrow function:
// Be aware that if JavaScript sees a `{` directly after the `=>`
// it will think it's starting a function, and not starting an object,
// so the `:` will be an unexpected symbol.

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

// arrow function:
// const carrots = ["bright orange","ripe","rotten"];

// const mapVegetables = (arr) => arr.map((carrot) => ({type:"carrot",name: carrot }));

// task 2
// Re-write this .filter() ’s callback function using an arrow function:

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

// arrow function:
// const people = [
//     {
//         name:"Princess Peach",
//         friendly:false
//     },
//     {
//         name:"Luigi",
//         friendly:true
//     },
//     {
//         name:"Mario",
//         friendly:true
//     },
//     {
//         name:"Bowser",
//         friendly:false
//     }
// ];

// const filterForFriendly = (arr) => arr.filter((person) => person.friendly);

// task 3
// Re-write the following functions to be arrow functions:

// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }
// Hi

// arrow function:
// const doMathSum = (a,b) => a +b;
// const produceProduct = (a,b) => a * b;

// task 4
// Write a printString function that takes firstName,
// lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?

// firstName should default to "Jane"lastName should default to "Doe"age should default to 100

// const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
//     return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
// };

//ex:
// console.log(printString("Kat","Stark",40)); // Hi Kat Stark, how does it feel to be 40?
// console.log(printString()); // Hi Jane Doe, how does it feel to be 100?

// task 5
// Use the shorthand syntax to make the following filter take up one line.
// Copy and paste the array to test it.

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];

//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }

// template literals to build the string in one line:
// const filterForDogs = (arr) => arr.filter(animal => animal.type === "dog");

// TEMPLATE LITERALS \\

// const welcomeMessage = (location, name) => {
//   return `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;
// };

//ex:
// console.log(welcomeMessage("Hawaii", "Janice"));


