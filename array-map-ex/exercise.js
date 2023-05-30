
// 1) Make an array of numbers that are doubles of the first array

// const arr = [2, 5, 100];

// function doubleNumbers(arr){                    //es5 tradtional loop
//   return arr.map(function(num){
//     return num * 2;
//   });
// }

// function doubleNumbers(arr){                    //es6 - arrow function
//     return arr.map(num => num *2);
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]







// 2) Take an array of numbers and make them strings

// const arr = [2, 5, 100]                                                     // es5
// function stringItUp(arr){
//     return arr.map(String);
// }


// const stringItUp = arr => arr.map(String);                                 //es6

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]







// 3) Capitalize the first letter of each name and make the rest of the characters lowercase

// const arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// function capitalizeNames(arr){
//   return arr.map(function(name){
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//   })
// }

// const capitalizeNames = arr => arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());


// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]







// 4) Make an array of strings of the names
// function namesOnly(arr){
//   const names = arr.map(function(obj){
//     return obj.name;
//   })
// }

// const namesOnly = arr => arr.map(obj => obj.name);

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]










// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){
//   const strings = arr.map(function(obj){
//     if (obj.age >= 18){
//         return obj.name + "can go to the Matrix."
//     } else {
//         return obj.name + "is under the age!"
//     }
//   })
//   return strings;
// }


// const makeStrings = arr => arr.map(obj => obj.age >= 18 ? '${obj.name} can go to the Matrix' : '${obj.name} is under age!');


// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]







// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
  const domArr = arr.map(function(obj){
    return '<h1>' + obj.name + '</h1>' + '<h2>'+ obj.age + '</h2>';
  });
  return domArr;
}

// const readyToPutInTheDOM = arr => arr.map(obj => '<h1>${obj.name}</h1><h2>${obj.age}</h2>');    //?

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]