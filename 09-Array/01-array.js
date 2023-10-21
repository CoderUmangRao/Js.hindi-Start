/////  Array

const myArray = [0, 1, 2, 3, 4, 5]
// console.log(myArray[2]);

///// Array Method

// myArray.push(6)   //// insert new element
// myArray.pop(5)       //// delete the element

// myArray.unshift(7)    ///// shift nre element in strting array
// myArray.shift()

// console.log(myArray.includes(9));///// check the element is in or not ( ans is in true or false)

// const myArray1 = myArray.join()///// change array to string
// console.log(myArray1);


///// Slice  and Splice
console.log("A",myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);

console.log("B",myArray);
const myn2 = myArray.splice(1,3)
console.log(myArray);
console.log(myn2);
console.log(myArray);

