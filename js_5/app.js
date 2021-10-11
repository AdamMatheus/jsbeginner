//*********  1. [1 -- 100] yazdır ve 5 katları yazılmasın 
// **********2. 42 de durdur

// for (let i=0; i<100; i++){
//     if (i%5==0){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
//     if (i===42) break;
// }

//----------------------------------------------------------------------------------------------------------------------------
//**********[1 - 6] arasında rastgele sayı cek.3 defa 3 çıkarsa yada 1 kez 6 cikarsa oyun bitecek

// let x=Math.trunc(Math.random()*20)+1; 20 ye kadar olan sayilar arasindan sayi cekmek icin
// console.log(x);

// 

////--------------------------------------------------------------***************FUNCTIONS-***************************

// function square(num){
//     a=num*num;
//     return a;
// }

let myNum=4;

// console.log(square(myNum));
// console.log(myNum);

////-------------------------------------------

// const students=['sait','brown','heisenberg','emre'];

// console.log(`welcome ${students[0]}!`);
// console.log(`welcome ${students[1]}!`);
// console.log(`welcome ${students[2]}!`);
// console.log(`welcome ${students[3]}!`);

// students[0]='mike';
// console.log(students);

// greetAll(students,console.log);

function greet(student) {
  //     // console.log(`welcome ${student}!`);
      return `Wellcome ${student}!`;
   }
   function greetAll(who,callback){
       for (let i=0 ; i< who.length; i++){
           callback(greet(who[i]));
       }
   }
  
  
  // function carp(num1,num2) {
  //     if (isNaN(num1)|| isNaN(num2)) {
  //         return "please enter number";
  //     }
  //     return num1 *num2;
  // }
  
  // let result= carp(4,6);
  // console.log('result:>>',result);
  
  // result = [quotient,remainder]
  // 13%4 = 3 kalan 1
  // function divide(dividend,divider) {
  //     let quotient =dividend/divider;
  //     let remainder = dividend%divider;
  //     let result = [quotient,remainder];
  //     console.log(quotient);
  //     if (divider===0) return;
  //     return result;
  // }
  
  // let result= divide(13,4);
  // console.log('result:>>',result);
  
  const studentObject= {
      firstName:"Yusuf",
      studentNumber:"C9302",
  };
  
  function sayHi() {
      return `welcome`;
  }
  
  // console.log(sayHi(studentObject));
  // console.log('#110 student:>>',studentObject);
  
  // const sayHi2=function() {
  //     return 'hello';
  
  // };
  // console.log(sayHi2());
  
  // ///---------------recursive
  
  // function count(num) {
  //     if (num===10) return;
  //     console.log(num);
  //     count(++num);
  
  // }
  
  // count(1);
  
  
  //-----------------IIFE------
  
  (function greet2(){
      console.log('how do you do?');
  })();
  
  //greet2();