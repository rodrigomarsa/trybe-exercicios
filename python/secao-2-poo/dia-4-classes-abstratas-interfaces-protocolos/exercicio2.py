from abc import ABC, abstractmethod


class Entregavel(ABC):
    @abstractmethod
    def entregar(self, cliente: str, endereco: str) -> None:
        pass


class Cliente:
    def __init__(self, nome: str, telefone: str) -> None:
        self.nome = nome
        self.telefone = telefone


class Endereco:
    def __init__(
        self, rua: str, numero: int, bairro: str, cidade: str, estado: str
    ) -> None:
        self.rua = rua
        self.numero = numero
        self.bairro = bairro
        self.cidade = cidade
        self.estado = estado


class Correios(Entregavel):
    def entregar(self, cliente: str, endereco: str) -> None:
        print(
            f"O pacote foi entregue com sucesso para o cliente {cliente.nome}"
        )
        print(
            f"Endereço: {endereco.rua}, {endereco.numero}, "
            f"{endereco.bairro}, {endereco.cidade}, {endereco.estado}"
        )
        print(f"Telefone: {cliente.telefone}")


class Transportadora(Entregavel):
    def entregar(self, cliente: str, endereco: str) -> None:
        print(
            f"A carga foi entregue com sucesso para o cliente {cliente.nome}"
        )
        print(
            f"Endereço: {endereco.rua}, {endereco.numero}, "
            f"{endereco.bairro}, {endereco.cidade}, {endereco.estado}"
        )
        print(f"Telefone: {cliente.telefone}")


class Main:
    def main(self):
        correios = Correios()
        transportadora = Transportadora()

        cliente = Cliente("Rafa", "99999-9999")
        endereco = Endereco("Rua A", 123, "Centro", "São Paulo", "SP")

        correios.entregar(cliente, endereco)
        transportadora.entregar(cliente, endereco)


if __name__ == "__main__":
    Main().main()
