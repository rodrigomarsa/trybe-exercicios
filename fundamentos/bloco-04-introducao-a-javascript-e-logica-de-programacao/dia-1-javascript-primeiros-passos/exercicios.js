// const a = 10;
// const b = 5;
// const c = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c) {
//     console.log(b);
// } else {
//     console.log(c);
// }

// if (a > 0) {
//     console.log("positive");
// } else if (a < 0) {
//     console.log("negative");
// } else {
//     console.log("zero");
// }

const anguloUm = 60;
const anguloDois = 40;
const anguloTres = 80;

if (anguloUm + anguloDois + anguloTres === 180) {
    console.log("true");
} else if (anguloUm < 0 || anguloDois < 0 || anguloTres < 0) {
    console.log("erro");
} else {
    console.log("false");
}