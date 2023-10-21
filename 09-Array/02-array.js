const marvel = ["Thor","Dr.Strange","IronMan","Jean-Grey"]
const Dc = ["Superman","Flash","Dr.Fate","Sonic"]

// marvel.push(Dc)

// console.log(marvel);
// console.log(marvel[4][1]);

// all_heros = marvel.concat(Dc)
// console.log(all_heros);

const all_new_heros = [...marvel,...Dc]    //// here ...means spread opretor(array k hr element ko alg alg krta hai)
// console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherArray = anotherArray.flat(Infinity)  //// flat means hr ek array k element ko ek saath ek array m print kr dega
// console.log(realanotherArray);


// console.log(Array.isArray("Umang"));
// console.log(Array.from("Umang"));   /// string k hr ch ko seperate krega


let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));   //// here (of) means sbhi var ko ek array k andr lana

