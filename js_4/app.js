// let score = 85;
// // let grade = score >= 50
// if (score >= 80) { 
//     console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
// }else if (score >= 50) {
//     console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`);
// }else{
//     console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`);
// }
// // console.log('ders bitti'); */
// Ternary If else
/* let score = 49;
score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`) : 
               console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`); */
/* let username = 'Mark';
username ? console.log(`Merhaba ${username}`) : console.log('Please Login'); */
// if (score >= 80) { 
//     console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
// }else if (score >= 50) {
//     console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`);
// }else{
//     console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`);
// }
/* let score = prompt(' Sınav notunu gir : ')
score >= 80 ? console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`) : 
   (score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`): 
   console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`))
 */

/*let userNAme;
console.log(userName&&console.log(`MErhaba ${userName}`));*/

////////        SWITCH CASE YAPSIS /////

// var text;
// var fruits;
// switch (fruits.toLowerCase()){
//     case "Banana":
//         text="Banana is good";
//         break;
//     case "orange":
//     case "lemon":
//     case "greyfurt": 
//         text="I am not fan of orange";
//         break;
//     case "apple":
//         text="how you like them apples";
//         break;
//     default:
//         text="I have never heard of ${fruits}";

// }

// console.log(text);


// var year = 2024;
// var month = 4;
// var dayCount;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         dayCount = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dayCount = 30;
//         break;
//     case 2:
//         if (((year % 4 == 0) && !(year % 100 == 0))
//             || (year % 400 == 0))
//             dayCount = 29;
//         else
//             dayCount = 28;
//         break;
//     default:
//         dayCount = -1; // invalid month
// }
// console.log(dayCount); // 29
////////////////haftalik plan//////////////
// let text=prompt("gun gir")
// let gun="monday";
// switch (gun.toLowerCase()){
//     case "monday":
//     case "sunday":
//     case "wednesday":
//     case "thursday": 
//         text="class day";
//         break;
//     case "tuesday":
//     case "friday":
//         text="teamwork";
//         break;
//     default:
//         text="tatil";
// }
// console.log(text);


// let password='wpewoqpeiqwp'
// if (password.length >=5 && password.includes('@')){
//     console.log('that password is strong');

// }
// else{
//     console.log('password is not long enough');
// }

///////////     LOOPS   /////
// let i=0;
// let sum=0;
// while(i,11){
//     sum+=i;
//     console.log(sum);
//     i++
// }


// let i=5;
// let sum=0
// do {
//     sum+=i;
//     i++;
// }

// while (i<5);
// console.log(sum);

// ///  for loop    ////

// let text="Clarusway";
// for (let i=0;i<text.length;i++){
//     console.log(text[i]);
// }


// sum=0;
// for (let i=0;i<=10;i++){
//     sum+=i;
//     console.log(sum);
// }


// let sum=0;
// for(let i=0; i<=10;i++){
//     if (i%2==0){
//         console.log(i);
//     }
// }

/////sayi 3 e bolunurse fizzz 5 ee bolunurse buz 15 e  bolunurse fizz buz

// for (let i=3; i<100; i++){
//     if (i%3==0 && i%5==0){
//         console.log(i,"fizzbuzz");}
//     else if(i%5==0){
//         console.log(i,"buzz");}
//     else if(i%3==0){
//         console.log(i,"fizz");}
// }


// /////// find prime numer  //////////////
//  for (let counter = 0; counter <= 100; counter++) {

//     var notPrime = false;
//     for (let i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(counter);
//     }
// }
    
    for(let sayi=2 ; sayi<100; sayi++){
        var sonuc=true;
            for(let i=2;i<sayi;i++){
                if(sayi%i==0){
                   sonuc=false;
                    break;
                }
                
               
            }  
        if(sonuc){console.log(sayi);}    
    }
            
    
       
    
