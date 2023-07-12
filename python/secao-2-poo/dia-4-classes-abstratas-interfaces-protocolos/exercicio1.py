from abc import ABC, abstractmethod


class Funcionario(ABC):
    def __init__(self, nome: str, salario: float) -> None:
        self.nome = nome
        self.salario = salario

    @abstractmethod
    def calcularBonificacao(self):
        pass


class Programador(Funcionario):
    def calcularBonificacao(self):
        return (
            f"O salário do programador {self.nome} mais a "
            f"bonificação é de R${'{:.2f}'.format(self.salario * 1.2)}"
        )


class Analista(Funcionario):
    def calcularBonificacao(self):
        return (
            f"O salário do analista {self.nome} mais a "
            f"bonificação é de R${'{:.2f}'.format(self.salario * 1.3)}"
        )


class Gerente(Funcionario):
    def calcularBonificacao(self):
        return (
            f"O salário do gerente {self.nome} mais a "
            f"bonificação é de R${'{:.2f}'.format(self.salario * 1.4)}"
        )


class Colaborador(Funcionario):
    def calcularBonificacao(self):
        return (
            f"O salário do colaborador {self.nome} mais a "
            f"bonificação é de R${'{:.2f}'.format(self.salario * 1.1)}"
        )


class Main:
    def main(self):
        programador = Programador("Rafa", 1500)
        print(programador.calcularBonificacao())

        analista = Analista("Maria", 1600)
        print(analista.calcularBonificacao())

        gerente = Gerente("José", 1800)
        print(gerente.calcularBonificacao())

        colaborador = Colaborador("Isabel", 1200)
        print(colaborador.calcularBonificacao())


if __name__ == "__main__":
    Main().main()
