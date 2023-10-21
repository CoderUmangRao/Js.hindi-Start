// const tinderUser = new Object()   ////// it is singleton objects
const tinderUser = {}   /// same as uper the output is empty   it is non-sinleton objects

tinderUser.id = "123abs"
tinderUser.name = "Rao"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname : {
            firstName : "Rao",
            lastName : "sahab"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname);
// console.log(regularUser.fullname.userFullname.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2)  ///// dono object ko ek he object m marge krta hai

const obj3 = {...obj1, ...obj2}  ///// modern tarika

// console.log(obj3);

const users = [
    {
        id:1,
        email : "yaf@gmail.com"
    },
    {
        id:2,
        email : "yaf@gmail.com"
    },
    {
        id:3,
        email : "yaf@gmail.com"
    },
    {
        id:4,
        email : "yaf@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  ///// iska typeof array hai
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //// har ek key value ko array bnata hai ye entries
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  /// property available hai ya nhi


const course = {
    coursename: " Js in hindi",
    price : "989",
    courseInstructer : "Rao Sahb"
}

// course.courseInstructer  ///// value ko direct use krne ka tarika

const {courseInstructer :instruct} = course

// console.log(courseInstructer);
console.log(instruct);  //// this is de-structure


// const navbar = () => {

// }

// navbar(company = "Rao-sahb")


{
    "name"= "Umang",
    "couse"= "python",
    "price" = "234"
}