// var str1="Hello";
// var str2="'hello' world\'s";
// var str3=`hello world`;
// var str4=new String('hello world')

// console.log(str1);
// console.log(str4);
// console.log(str2.length);
// console.log(str3.length);
// console.log((typeof(str4)));
// console.log(str4.length);


///**********concat */////////


// var s1="hello";
// var s2="world";
// var s3=s1.concat(s2);
// var s4=s1.concat("world!2");

// console.log(s3);
// console.log(s4);
// console.log(s1+"world");

// console.log((s1.concat(s2.concat(" "+"method4"))));



////////**********charAT *//////////
// var a="primitive.\nlerin properti veya metodu olmaz"

// console.log(a);

// console.log(a.charAt());///varsayilan ilk elemeani getrir
// console.log(a.charAt(a.length-1));///somn elemani getirir
// console.log(a.charAt(9));
// console.log(a.charAt[9]);


/////////********includes*******////

// var str="lorLorem Ipsum is simply dummy text of the printing and typesetting industry"
// var n=str.includes("simply");
// var n1=str.includes("xs");

// console.log(n);
// console.log(n1);




///////*****indexof ******************/////////

// var str="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
// var n=str.indexOf("simply");
// var n1=str.indexOf("p");
// var n2=str.indexOf("P");

// console.log(n);
// console.log(n1);
// console.log(n2);



// let str = 'Lorem ipsum dolor adalet amet consectetur adipisicing elit. Cupiditate numquam, minima soluta beatae a quas aliquam ex distinctio exercitationem illo adalet autem quod vitae. Repellat quasi ab dolorum, doloremque laudantium unde cum doloribus! Officiis delectus nulla error suscipit debitis incidunt. ';
// const myArr = str.split(" ");
// let strAdalet = 'adalet';
// let indexAdalet = [];
//   for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] === strAdalet){
//       indexAdalet.push(i);    
//     }
//   }
// console.log(indexAdalet);


/////////////////////**********replace()************* */

// var str="Lorem ipsum dummy dolor adalet amet consectetur adipisicing elit. "

// var n=str.replace("dummy","humhum");
// var n1=str.replace(/Dummy/i, "cumcum");//case sensitive devre disi

// // console.log(n);
// // console.log(n1);
// // console.log(str.replace("dummy","damdam"));
// // console.log(str);


///////////////************search()************ ////

// var str='red,green,blue'  // In this method, search value can either be string or it can be a regular expression.
// var n=str.search("Blue");
// var n1=str.search(/Blue/i);

// console.log(n);
// console.log(n1);


//////////////**************SLICE() *******/

//If you dont use the second parameter, the method will slice out the rest of the string:

// var s="Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry."

// console.log(s.slice(1,6));
// console.log(s.slice(6));
// console.log(s.length);
// console.log(s.slice(-33,64));

// 1. Kullanıcıdan değer alıp ne çevirmek istediği c > f , f>c,
// çevirmek istediği değeri de alacağız
// Çıkış için seçenek 



// 2. c > f

// 3. f > c

//  */

  

//     n2=str.indexOf("and");
    //    str.indexof("k",n)//it start search from 4th position

const artc="link:https://app.slack.com/client/T02E1MNKZJR/C02EHB5L7TK";
console.log(artc.link("https://app.slack.com/client/T02E1MNKZJR/C02EHB5L7TK"));
characterWanted=prompt("Index numaralarini aramak istediginiz karakter yada kelimeyi giriniz");

let to_Index=[]
for(var i=0; i<artc.length;i++){
    if(i==artc.indexOf(`${characterWanted}`,i)){
        to_Index.push(i)
    } 
}
console.log(to_Index)
    
// const str = "・Welcome to ・StackOverFlow ・Best Regards";

// let bulletIndex = []

// for(var i=0; i<str.length; i++){
//   if(i == str.indexOf("to")){
//     bulletIndex.push(i)
//   }
// }

// console.log(bulletIndex)



