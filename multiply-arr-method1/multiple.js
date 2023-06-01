const peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29,
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13,
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82,
  },
];

//es5 step by step making sure it works before putting all together, helps me understand it better, than test each es6 version then combine it all for the intial requirement.

// function sortedOfAge(arr){
//     const adultList = arr.filter(function(person){
//         return person.age > 18;
//     })
//     return adultList;
// }

// console.log(sortedOfAge(peopleArray));

// function sortedOfAge(arr){
//     const adultList = arr.sort(function(a, b){
//         const lastNameA = a.lastName.toLowerCase();
//         const lastNameB = b.lastName.toLowerCase();
//         if(lastNameA < lastNameB) return - 1;
//         if(lastNameA > lastNameB) return 1;
//         return 0;
//     })
//     return adultList;
//  }

//  console.log(sortedOfAge(peopleArray));

// function sortedOfAge(arr){
//     const adultList = arr.map(function(person){
//         return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>";
//     })
//     return adultList;
//  }

//  console.log(sortedOfAge(peopleArray));



  //es6

// const sortedOfAge = (arr) => {
//     const adultList = arr.filter(person => person.age > 18)
//     return adultList;
// }

// console.log(sortedOfAge(peopleArray));

// const sortedOfAge = (arr) => {
//     const adultList = arr.sort((a, b) => {
//         const lastNameA = a.lastName.toLowerCase();
//         const lastNameB = b.lastName.toLowerCase();
//         if(lastNameA < lastNameB) return -1;
//         if(lastNameA > lastNameB) return 1;
//         return 0;
//     })
//     return adultList;
// }

// console.log(sortedOfAge(peopleArray));

// const sortedOfAge = (arr) => {
//     const adultList = arr.map(person => `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`);

//     return adultList;
// }

// console.log(sortedOfAge(peopleArray));

  //es5 all together

// function sortedOfAge(arr){
//     const adultList = arr
//     .filter(function(person){
//         return person.age > 18;
//     })
//     .sort(function(a, b){
//         const lastNameA = a.lastName.toLowerCase();
//         const lastNameB = b.lastName.toLowerCase();
//         if(lastNameA < lastNameB) return - 1;
//         if(lastNameA > lastNameB) return 1;
//         return 0;
//     })
//     .map(function(person){
//          return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>";
//     });
//     return adultList;
// }

// console.log(sortedOfAge(peopleArray));

//es6 all together

const sortedOfAge = (arr) => {
  const adultList = arr
    .filter((person) => person.age > 18)
    .sort((a, b) => {
      const lastNameA = a.lastName.toLowerCase();
      const lastNameB = b.lastName.toLowerCase();
      if (lastNameA < lastNameB) return -1;
      if (lastNameA > lastNameB) return 1;
      return 0;
    })
    .map((person) => `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`);

  return adultList;
};

console.log(sortedOfAge(peopleArray));




                    // extra credit

//create another array of one or more individuals

const addedArray = [
    {
        firstName: "Miro",
        lastName: "Rosencrans",
        age: 24
    },
    {
        firstName: "Lyla",
        lastName: "Marie",
        age: 21
    }
];




// add new array to orig array

const morePeople = peopleArray.concat(addedArray);
// console.log(morePeople);




//filter out last names ending with 'y' or 'a'

function filterLastName(peopleArray){
  const filteredName = peopleArray.filter(person => !person.lastName.endsWith("y") && !person.lastName.endsWith("a"));
  return filteredName;
}




// save the filtered people in another array

const filteredName = filterLastName(morePeople);
// console.log(filteredName);




//remove second person from the array

morePeople.splice(1, 1);
// console.log(morePeople);



//return array in reverse order

const reversedArray = morePeople.reverse();
console.log(morePeople);


