import { IAgenda } from "./src/interfaces/IAgenda";
import { ITenis } from "./src/interfaces/ITenis";
import normas from "./src/normas/normasDeUso";
import Quadra from "./src/Quadra";

export default class QuadraTenis extends Quadra {
  public tenisData: ITenis = normas.tenis;

  public reservar<ITenis>(horaReserva: Date): IAgenda<ITenis> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: horaReserva,
      regras: this.tenisData as unknown as ITenis,
    };
  }
}