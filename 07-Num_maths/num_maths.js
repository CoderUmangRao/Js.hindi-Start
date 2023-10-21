const num = 400    //// yha pr 400 number hai but confirm nhi hai
// console.log(num);

const num2 = new Number(100)  //// yha pr 100 confirm hai ki  ye number hai
// console.log(num2);

// console.log(num.toString(4));   //// convert num to string
// console.log(num.toString().length);    //// find length of string
// console.log(num.toFixed(1));    //// iska matlab point k baad kitni value chahiye
// console.log(typeof num);

const num3 = 125.5535
// console.log(num3.toPrecision(2));
// console.log(num3.toPrecision(3));
// console.log(num3.toPrecision(4));

const num4 = 10000000000
// console.log(num4.toLocaleString());
// console.log(num4.toLocaleString('en-IN'));


/////************* Maths********/
// console.log(Math.abs(-5));  //// means negative to positive only
// console.log(Math.round(5.7));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(4.8));

// console.log(Math.random());   /// only 0 - 1 value is given
// console.log(Math.random()*10);
// console.log((Math.random()*10) + 1);  /// here + 1 means the value is always given in 1 not 0

const min = 10
const max = 20

console.log(Math.floor(Math.random()));
console.log(Math.floor(Math.random() * (11)) + min);
console.log(Math.floor(Math.random() * (max - min + 1)) + min);