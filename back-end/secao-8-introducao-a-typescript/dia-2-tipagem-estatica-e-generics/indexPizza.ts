import Pizza from "./Pizza";
import PizzaCommon from "./PizzaCommon";
import PizzaSugar from "./PizzaSugar";
import PizzaVegetarian from "./PizzaVegetarian";

const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8
}

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6
}

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4
}

const calabrese: PizzaCommon = {
  flavor: 'Calabresa',
  slices: 6
}
console.log(calabrese);

const frango: PizzaCommon = {
  flavor: 'Frango',
  slices: 8
}
console.log(frango);

const pepperoni: PizzaCommon = {
  flavor: 'Pepperoni',
  slices: 6
}
console.log(pepperoni);

const marguerite: PizzaVegetarian = {
  flavor: 'Marguerita',
  slices: 8
}

console.log(marguerite);

const palmito: PizzaVegetarian = {
  flavor: 'Palmito',
  slices: 8
}

console.log(palmito);

const goiabadaEQueijo: PizzaSugar = {
  flavor: 'Goiabada com Queijo',
  slices: 4
}

console.log(goiabadaEQueijo);
