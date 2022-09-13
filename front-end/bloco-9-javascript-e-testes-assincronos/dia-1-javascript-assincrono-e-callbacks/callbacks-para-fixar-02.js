const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
setTimeout(() => {
const user = {
firstName: 'Ivan',
lastName: 'Ivanovich',
nationality: 'Russo',
};
return console.log(callback(user));

// Dica: use esse `console.log()` abaixo para imprimir o resultado na tela.
// console.log(user);
}, delay());
};

getUser(userFullName); // deve imprimir "Olá! Meu nome é Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan é Russo" depois de um certo tempo
