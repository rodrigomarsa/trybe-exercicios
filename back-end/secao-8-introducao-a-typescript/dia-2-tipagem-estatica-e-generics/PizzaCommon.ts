import Pizza from "./Pizza";
import { Commom } from "./PizzaFlavorsTypes";

interface PizzaCommon extends Pizza {
  flavor: Commom
}

export default PizzaCommon;