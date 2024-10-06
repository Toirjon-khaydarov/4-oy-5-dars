// 1-misol

// function kvadrat(son) {
//     return son*son;
// }

// let javob = kvadrat(3);
// console.log(javob);

// 2-misol

// let t = (a, b) => a + b;

// console.log(t(5, 6));
// console.log(t(11, 5));

// 3-misol

// const greet = (ism = "Dostim") => `Salom, ${ism}!`;

// console.log(greet('Brat'));
// console.log(greet());

// 4-misol

// const countdown = (raqam) => {
//     if (raqam <= 0) return;
//     console.log(raqam);
//     countdown(raqam - 1);
// };

// countdown(9);

// misol-5

// function sonlarniQoshish(a, b) {
//     return a + b;
// }

// function calculate(n1, n2, callback) {
//     return callback(n1, n2);
// }
// console.log(calculate(10, 5, sonlarniQoshish));

// 6-misol

// function cubeCalculator() {
//   return function (t) {
//     return Math.pow(t, 3);
//   };
// }

// const cube = cubeCalculator();
// console.log(cube(3));
// console.log(cube(4));

// 7-misol

function printBookInfo(book) {
    console.log(`nom: ${book.name}`);
    console.log(`muallif: ${book.autor}`);
    console.log(`yil: ${book.year}`);
}

const book = {
    name: "toshmatning kitobi",
    autor: "Eshmat",
    year: 2017 
};

console.log(book);

