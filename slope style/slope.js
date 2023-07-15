
// REST OPERATOR \\

// #1
// function collectAnimals(...animals) {
//     return animals;
// }

// console.log(collectAnimals("dog","cat","mouse","jackolope","platypus"));


// #2

// function combineFruit(fruit, sweets, vegetables) {
//     return { fruit, sweets, vegetables };
// }

// console.log(combineFruit(["apple","pear"], ["cake","pie"], ["carrot"]));
 

// #3

// function parseSentence({ location, duration }) {
//     return `We're going to have a good time in ${location} for ${duration}`;
// }
//  console.log(
//     parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//  })
//  );


// #4

// function returnFirst(items) {
//     const [firstItem] = items;
//     return firstItem;
// }

// console.log(returnFirst([1, 2, 3, 4, 5]));


// #5

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr) {
//     const [firstFav, secondFav, thirdFav] = arr;
//     return `My top three favotrite activities are ${firstFav}, ${secondFav}, ${thirdFav}.`;
// }

// console.log(returnFavorites(favoriteActivities));


// #6

// function combineAnimals(...arrays) {
//     return [...arrays.flat()];
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// #7

// const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1);

// console.log(product(2, 3, 4, 5, 6));


// #8

// const unshift = (array, ...elements) => [...elements, ...array];

// const array = [1, 2, 3, 4, 5];
// console.log(unshift(array, 6, 7, 8, 9, 10));


// #9

function populatePeople(names) {
    return names.map(function(name) {
        const [firstName, lastName] = name.splite(" ");
        return {
            firstName,
            lastName
        };
    });
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));