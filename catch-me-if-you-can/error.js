
// //1a) function that returns sum of two numbers, throws error if either is not a number data type.
// function sum(x, y) {
//   if (typeof x !== "number" || typeof x !== "number") {
//     throw new Error("Both arguments must be numbers!");
//   }
//   return x + y;
// }

// //1b) call sum function inside a try block using '1' & '2' as arguments, console.log withing a catch block to inform user of the error.
// try {
//   console.log(sum("1", "2"));
// } catch (error) {
//   console.log("Error:", error.message);
// }

//2a) write a function called login that takes a username and password as parameters, throw and error if either of them dont match, other wise console.log 'login successful!'

const user = {username: "sam", password: "123abc"};

function login(username, password){
    if (username !== user.username || password !== user.password){
        throw new Error("Invalid Credentials");
    }
    console.log('Login Sucessful!');
}

//2b) call the login functionwithing a try block, in one use correct creds. and the second use incorrect. display approp message for both users correct or incorrect.
try {
    login("sam", "123abc");
} catch (error) {
    console.log('Error:', error.message);
}

try {
    login("miro", "password");
} catch (error){
    console.log('Error:', error.message);
}