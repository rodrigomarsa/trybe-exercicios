const myName = "Rodrigo";
const birthCity = "Uberlândia";
const birthYear = 1985;
birthYear = 2030;
birthCity = "Belo Horizonte";


console.log(myName);
console.log(birthCity);
console.log(birthYear);


let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientAge);

const base = 5;
const height = 8;
const area = base*height;
console.log(area);
const perimeter = base + base + height + height;
console.log(perimeter);

const nota = 80;
if (nota >= 80) {
    console.log('Parabéns, você foi aprovada(o)');
} else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera');
} else {
    console.log('Você foi reprovada(o)');
}


const currentHour = 8;
let message = "";
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";   
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour > 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else if (currentHour > 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}
console.log(message);


let weekDay = "quarta-feira";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um da de aprendizado na Trybe >:D");
} else {
    console.log("FINALMENTE, descanso merecido UwU");
}


let resultado = 'aprovada';
switch (resultado) {
    case 'reprovada':
        console.log('Você foi reprovada(o)');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;
    case 'aprovada':
        console.log('Parabéns, você foi aprovada(o)');
}
