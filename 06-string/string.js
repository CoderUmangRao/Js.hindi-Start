const name = "Rao-sahb"
const nametwo = 57

// console.log(name + nametwo + "value");   /// it is not use in this tym b,coz its old..we used ``

///  `` = back ticks
        // string interpolation

// console.log(`My name is ${name} and my value is ${nametwo}`);   ///// Modern way to declare string variable

const gameName = new String('UmangRao')  /// Assign index value from given string
// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));   //// know to position of index value

const newGameName = gameName.slice(2,8)

// console.log(newGameName);

const newString = "   Umang   "
// console.log(newString);
// console.log(newString.trim());   //// remove all spaces in given string


const url = "http://umang.com%rao.com"
console.log(url);
console.log(url.replace('%','-'))  /// replace any value from given value which is given by user



