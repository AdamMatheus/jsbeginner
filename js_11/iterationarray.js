// *=======================================================
//                       FOREACH
// *=======================================================

//---------------------------------------------------------
// print each element of array into console
//---------------------------------------------------------

const students = [ 'John', 'ali', ' Veli' ];
students.forEach(print);

// * function decleration

function print(x) {
	console.log(x);
}
//// with Arrow function ///////

students.forEach((x) => console.log(x));

//---------------------------------------------------------------
// Calculate the sum of the array
//----------------------------------------------------------------

const array1 = [ 5, 6, 3, 4, 5 ];
let sum = 0;
array1.forEach((x) => (sum += x));
console.log('toplam:', sum);

// =======================================================
//                        MAP
// =======================================================
// map() metodu, dizilerin içerisindeki değerleri
// güncelleyerek ayrı bir diziye saklamak içinn kullanablriz.

//---------------------------------------------------------------
// Dizinin her bir elamanının 5 katını alarak ayrı bir dizide
// saklayan uygulamayı map() metodu ile yazınız.
//----------------------------------------------------------------

// Eğer bir diziyi trasnformasyona uğratacak isek forEach yerine map()
// kullanmak çok daha basit. map() metodu, güncellenmiş diziyi doğrudan
// bir değişkene atamaya izin  vermektedir.

const numberArray = [ 3, 7, 12, 3, 44, 0, 7, 2 ];
const doubled = numberArray.map((x) => x * 2);
console.log(doubled, numberArray);
