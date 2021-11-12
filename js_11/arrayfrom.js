/////////////////    Example-1 (Char array from string) ////////////////////

const msg = 'Hello World';
const msgArray = Array.from(msg);
console.log(msgArray);

//////////  Example-2 (Array from set)  /////////////////////////
const persons = new Set([ 'John', 'Jack', 'Jack' ]);
const fruit = new Set([ 'apple', 4 ]);

const personArr = Array.from(persons);
console.log(personArr);

const fruitArr = Array.from(fruit);
console.log(fruitArr);

/////////// Example-3 (Array from MAp)  ////////////////////

const questAns = new Map([ [ '1', 'a' ], [ '2', 'c' ] ]);

const answerArr = Array.from(questAns.values());
console.log(answerArr);

/////////////////   Example-4 (Array with map function) ////////////////

const square = Array.from([ 1, 2, 3 ], (x) => x * x);
console.log(square);
