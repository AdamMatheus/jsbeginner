// const isimler = [ 'mustafa', 'Murat', ' Ahmet', 'Ayse', 'canan' ];
// const buyukHarfler = isimler.map((x) => x.toUpperCase());
// console.log(buyukHarfler, isimler);

// const prices = [ 100, 150, 100, 50, 80 ];

// const newPrice = prices.map((x, i, d) => (x >= 100 ? (x += x * 0.1) : (x += x * 0.15)));
// console.log(`newprice of Product ${i + 1} ${x}`);

// const coords = [ -100, 150, -32, 43, -20 ];

// negatives = coords.filter((x) => x < 0);
// console.log(negatives);

// const coords = [ -100, 150, -32, 43, -20 ];

// const toplam = coords.reduce(function(x, y, i) {
// 	console.log(`iterasyon ${i} ${x}`);
// 	return x + y;
// });
// console.log(toplam);

// // answer = coords.filter((c) => c < 0).map((c) => c * -1).forEach((c) => console.log(c));
// // console.log(answer);

// const people = [ 'Mustafa', 'Murat', 'Kerime', 'Ayşe', 'Can', 'mehmet', 'ali' ];

// const personel = people.map((x) => x.toUpperCase()).filter((n) => n.startsWith('M') | n.startsWith('A'));
// console.log(personel);

const maas = [ 3000, 2891, 3500, 4200, 7000, 2500 ];
const newPrice = maas.filter((c) => c < 3000).map((x) => (x += x * 0.1)).reduce((x, y) => x + y);
console.log(newPrice);
