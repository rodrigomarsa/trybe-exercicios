import QuadraTenis from "../QuadraTenis";
import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const trybeClube = new Clube();

const quadraFutebol = new QuadraFutebol();
trybeClube.adicionarQuadra(quadraFutebol);

const dataReserva = new Date('2023-03-22');

const reservarQuadraFutebol = trybeClube
  .buscarQuadra<QuadraFutebol>(0)
  .reservar(dataReserva);
console.log(reservarQuadraFutebol);

const quadraTenis = new QuadraTenis();
trybeClube.adicionarQuadra(quadraTenis);

const reservarQuadraTenis = trybeClube
  .buscarQuadra<QuadraTenis>(1)
  .reservar(dataReserva);
console.log(reservarQuadraTenis);

