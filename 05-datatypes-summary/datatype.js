/// Primitive data types

///  7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


/// Reference type/ Non-Primitive data type

// Array, Objects, Functions


// const id = Symbol(123)
// const anotherId = Symbol(123)
// console.log(id == anotherId);

// const bigNumber = 56434245356789786767564342454567n

/// Array
// const heros = ["Thor","Dr.Fate","Wonder-Women","Superman"]
// console.log(heros[1]);

/// Object
// let myObject = {
//     name:"Rao Sahb",
//     age: 24
// }
// console.log(myObject);

/// Function
// function myFunction() {
//     console.log("Hello World")
// }
// console.log(myFunction);

// console.log(typeof myObject);


    ////// ################### Memory
// Stack Memory(Primitive), Heap Memory(Non-primitive)

// let userName = "Rao-Sahb"

// let anotherUserName = userName
// anotherUserName = "Umang-Rao"

// console.log(userName);
// console.log(anotherUserName);

let userOne = {
    email : "yadavji@gmail.com",
    id : 12344
}

let userTwo = userOne

userTwo.email = "raosahb@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);