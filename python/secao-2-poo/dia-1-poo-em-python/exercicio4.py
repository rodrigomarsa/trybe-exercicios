class Carro:
    def __init__(self, modelo: str, ano: int) -> None:
        self.modelo = modelo
        self.ano = ano
        self.velocidade = 0

    def acelerar(self, quantidade: int) -> None:
        self.velocidade += quantidade
        print(
            f"O carro {self.modelo} do ano {self.ano} "
            f"acelera a {self.velocidade} km/h"
        )

    def desacelerar(self, quantidade: int) -> None:
        self.velocidade -= quantidade
        print(
            f"O carro {self.modelo} do ano {self.ano} "
            f"desacelera a {self.velocidade} km/h"
        )


carro = Carro("Fusca", 1980)
carro.acelerar(20)
carro.desacelerar(10)
