//// singleton 
//// constructor se singleton bnta hai
/////// object.create


//////////////// Object literals

const mySymbol = Symbol("Key1")

const jsUser = {
    name : "Rao_sahb",
    "full_name" : "Umang_rao",  //// ye kbhi bhi dot se acces he nhi hoga
    [mySymbol] : "Mykey1",  //// it is symbol object
    age : 18,
    location : "gaziabad",
    email : "yadav ji@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday",'Sunday']
}

// console.log(jsUser.age);  /////  this is not a right way to access the objects
// console.log(jsUser["age"]);
// console.log(jsUser.full_name);
// console.log(jsUser[mySymbol]);  //// access the symbol object
// console.log(typeof [mySymbol]);

jsUser.email = "umang456@gmail.com"   //// change the value of email

Object.freeze(jsUser)  ///// kisi bhi object ko change hone se rokne k liye
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello user");
}

jsUser.greeting2 = function(){
    console.log(`Hello user,${this.full_name}`);
}
// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());