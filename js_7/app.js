// const car=['opel','Audi','BMW',2,['Hello','World']];
// console.log(car);
// console.log(car[4][0]);

// const car2=new Array ("opel","audi",'BMW',2,['hello','world']);
// console.log(car2);

// const x=new Array (2,10);
// const x=new Array(10);
// console.log(x);

// const car=['opel','Audi','BMW',2,['Hello','World']];
// car[4]='mercedes';
// console.log(car);

// console.log(typeof car);

// console.log(car instanceof Array);
// console.log(Array.isArray(car));



//////////**********LENGTH************* *////////

//  const cars=['opel','audi','BMW'];
// // console.log(cars);

// const cars3=['opel','audi','bmw',2,['hello','world']];
// // console.log(cars3.length);



// ////////////*************CONCAT************////// */
// const cars2=['mercedes','renault']
// console.log(cars2.concat(cars));
// console.log(''+cars2);
// console.log(cars2.concat(cars,'cars3'));



//////////////******SORT***********/////////
// const daltones=['joe','jack','william','avarel']
// daltones.sort()
// console.log(daltones);
// daltones.reverse()
// console.log(daltones);


// const points=[40,100,1,5,25,10];
// console.log(points.sort());
// console.log(points.sort(function(a,b) {return a-b}));


// var alphabet='abcçdefgğhıijklmnoöprsştuüvyz0123456789'
// function ascii(text){
//     for(let i=0;i <text.length;i++) {
//         console.log(text[i],text.charCodeAt(i))
//     }
// }

// ascii(alphabet.toLocaleUpperCase('tr-TR'))
// //ascii(alphabet.toLocaleUpperCase())


///////////////----------PUSH()----------//////////////////

// const fruits=['banana','orange','apple','mango'];
// fruits.push('pears','fig');
// console.log(fruits);

// let c=fruits.pop();
// console.log(c);
// console.log(fruits);
// fruits.pop();


/////////---------shift()  & unshift--------//////////
// const fruits=["Banana", "Orange", "Apple", "Mango"];
// const deleted=fruits.shift()
// console.log(fruits);
// console.log(deleted);
// console.log(fruits.shift());

// const newLength=fruits.unshift('pineapple','fig')
// console.log(fruits);
// console.log(newLength);

// const fruits=["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// console.log(fruits[1]);
// fruits[100]="abc"
// console.log(fruits);
// console.log(fruits.length);


///////////-----------splice()----------/////////////////

// var names=["John", "Edward", "Victor"]
// var deleted=names.splice(1,2,'mark','james')
// console.log(deleted);
// console.log(names);

// names.splice(-2,1)
// console.log(names);
// names.splice(-2)
// names.splice();
// console.log(names);



////////-------------SLICE()--------/////////////////

// const months = ['Jan', 'March', 'April', 'June',"july"];
// //const springs=months.slice(1,3);
// // const springs=months.slice(-4,-2);
//  const springs=months.slice(1,-2);

// // const springs=months.slice(-2,-5);//calsimaz bos array dondurur
// console.log(springs);
// console.log((months));




//////////////////----------indexOf()--lastindexof()-------////////////

// const colors = ["Red", "Green", "Yellow", "Blue", "Pink", "Green"];
// const x=colors.indexOf('Green',3)
// const x1=colors.lastIndexOf("Green",3)

// console.log(x);
// console.log(x1);

// console.log(colors.indexOf('Black'));
// console.log(colors.lastIndexOf('Black'));



///////////////-----------iterate methods-------//////////

const colors = ["Red", "Green", "Yellow", "Blue", "Pink", "Green"];

//// 1.for
// for (let i=0; i< colors.length; i++){
//     console.log(colors[i]);
// }

//// 2. for in 

//for (i in colors) console.log(colors[i]);

//// 3.for of 

//for (elements of colors){console.log(elements);}

//// 4.forEach()

// colors.forEach(i=>console.log(i))

 const colors2=[1,2,3,4,5,6,7,8,9,10];
// colors2.forEach(i=>console.log(i**2))

//forEach() and for in skip empty elements in the array, for and for of do not. 
//for (elements of colors2){console.log(elements**2);}
//for (i in colors2) console.log(colors2[i]**2);
for (let i=0; i< colors2.length; i++){
        console.log(colors2[i]**2);}