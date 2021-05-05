/*
    Prototypes
*/

let testObj = {
  someData: 'data',
  someValue: 'value'
}

console.log( testObj );
console.log( 'string', testObj.toString(), String.prototype );

let myArray = [1,2,3,4,5];
    myArray.push(6);
//     myArray.map( function(){});

console.log( 'array', myArray, Array.prototype, myArray.hello );

var num = 10.512;
console.log( num, num.toFixed(1), Number.prototype );


function talk(){
  console.log('Play sound:', this.sound);
}

let animal = {
  // тоже самое что и talk: talk
  talk,
  du: 'hiiiii',
  color: 'blue',
  // toString: function(){
  //   return 'toString()';
  // }
};

// console.log( animal );

let cat = {
  sound: 'meow',
  color: 'yellow'
};
Object.setPrototypeOf( cat, animal );

// console.log( cat );
// console.log( cat.color );
// console.log( cat.toString() );
// console.log( cat.du );

cat.talk();


let dog = {
    sound: 'woof'
};

Object.setPrototypeOf( dog, cat );
console.log(dog, dog.color);

dog.talk();






