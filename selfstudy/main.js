// var,let, const

// const name="John";
// const number=30;
// const isCool=true;
// const rating=4.5;
// const x=null;
// const y=undefined;
// let z;
// console.log(typeof rating);

// String,Numbers,Boolean,null,undefined
// const name ='John';
// const age =30;

// //Concatenation
// console.log('my name is' + name + ' i am '+ age);

// //Template String

// const hello='My name is ${name} anad I am ${age}';
// console.log(hello);

// const s = 'Hello world';
// console.log((s.length));
// console.log((s.toUpperCase()));
// console.log((s.toLowerCase()));
// console.log((s.substring(0,5).toUpperCase()));
// console.log((s.split('')));
// const ss = 'technology,computers,it,code'
// console.log(ss.split(','));

// //Arrays -variables that hold multipe values

// const numbers = new Array(1,2,3,4,5);
// const fruits=['apple','orange','pears'];
// console.log(fruits);
// console.log(numbers);
// console.log(fruits[1]);
// fruits.push("grapes");
// console.log(fruits[3]);
// fruits.unshift('banana');
// fruits.pop();
// console.log(Array.isArray('hello'));
// console.log(fruits.indexOf('orange'));
// console.log(fruits);


// object 

// const person={
//     firstName:'John',
//     lastName:'Doe',
//     age:12,
//     hobbies:['music','movies','sports'],
//     adress:{street:"50 main str",city:'Boston',state:'MA'}
// }

// console.log(person.firstName,person.lastName);

// console.log(person.hobbies);

// const{firstName,lastName,adress:{city}}=person;
// console.log(city);
// person.email='john@gmail.com';
// console.log(person);

//TODO

// const todos=[
//     {
//         id:1,
//         text:"Take out trash",
//         isCompleted:true
//     },
//     {
//         id:2,
//         text:"Go to the bed",
//         isCompleted:true
//     },
//     {
//         id:3,
//         text:"do your homework",
//         isCompleted:false
//     },

// ];
// console.log(todos[1].text);

// //For

// for(let i=0; i<=10; i++)
// { console.log(`For Loop Number: ${i}`);}


// //while

// let i=0;
// while(i<10){console.log(`while Loop Number: ${i}`);i++;}



// console.log('\n*** Some builtin Math functions ***');
// console.log('Math.floor(10.7)', Math.floor(10.7));
// console.log('Math.floor(10.3)', Math.floor(10.3));
// console.log('Math.floor(-10.7)', Math.floor(-10.7));
// console.log('Math.floor(-10.3)', Math.floor(-10.3));
// console.log('Math.ceil(10.7)', Math.ceil(10.7));
// console.log('Math.ceil(10.3)', Math.ceil(10.3));
// console.log('Math.ceil(-10.7)', Math.ceil(-10.7));
// console.log('Math.ceil(-10.3)', Math.ceil(-10.3));
// console.log('Math.trunc(10.7)', Math.trunc(10.7));
// console.log('Math.trunc(10.3)', Math.trunc(10.3));
// console.log('Math.trunc(-10.7)', Math.trunc(-10.7));
// console.log('Math.trunc(-10.3)', Math.trunc(-10.3));
// console.log('Math.round(10.7)', Math.round(10.7));
// console.log('Math.round(10.3)', Math.round(10.3));
// console.log('Math.round(-10.7)', Math.round(-10.7));
// console.log('Math.round(-10.3)', Math.round(-10.3));
// console.log('Math.random()', Math.random());

// function solution(N) {
//     const binary = N.toString(2);
//     return binary
//             .split('1')
//             .reduce((maxGap, item, index, array) => {
//                 if(item 
//                     && item.length > maxGap 
//                     && array[index-1] !== undefined 
//                     && array[index+1] !== undefined) return item.length;
//                 return maxGap;
//             }, 0);
// }


// function helloWorld(){
//     var selam="Hello World!"
//     console.log(selam)}


