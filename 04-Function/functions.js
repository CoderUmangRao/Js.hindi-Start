//////Function
function sayMyName(){
console.log("U");
console.log("M");
console.log("A");
console.log("N");
console.log("G");
}
// sayMyName()

// function addTwoNum(num1,num2){
//     console.log(num1 + num2)
// }

function addTwoNum(num1,num2){
    // const result = num1 + num2
    // return result
    return num1 + num2      ///// direct bhi return kr sakte hai
}
const result = addTwoNum(3,6)
// addTwoNum(3,"6")
// addTwoNum(3,null)
// console.log("Result:",result);

function logInUser(username = "Rao_Sahab"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(logInUser("Umang"))
// console.log(logInUser("YadavJi"))

////////////Function With objects

function addToCart(...num1) {      /////here ...is rest opretor
    return num1
}
// console.log(addToCart(200,300,500))


const user = {
    username: "RaoSahab",
    price : 3444
}

function handleObject(user) {
    console.log(`Username is ${user.username} and price is ${user.price}`);
}

// handleObject(user)
handleObject({
    username : "yadavji",
    price : 4555
})

const myArray = [199,299,399,499]
function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myArray))