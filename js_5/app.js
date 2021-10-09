//[1-100 ]yazdir 5 katlari yazilmasin

// for(let i=0; i<=100;i++){
//     if(i%5==0){
//         continue
//     }else{
//         console.log(i);
//     }
// }

//[1-6] arasinda rastgele sayi  . 3 defa 3 cikarsa yada 6 cikarsa oyunu bitir

// let x=Math.trunc(Math.random()*20)+1;
// console.log(x)

let count = 0;

while (true) {
  let x = Math.floor(Math.random() * 6);
    if (x == 6) {
      console.log("kazandı")
      break
    } else if (x == 3) {
      count += 1
    } else if (count == 3) {
      console.log("3'ü tamamladın ve çıkış yaptın")
      break
    }
  }