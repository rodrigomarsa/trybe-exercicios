from typing import List


def sum_of_integers(values: List[int]) -> int:
    return sum(values)


def soma_lista(valores: List[int]) -> int:
    soma = 0
    for valor in valores:
        soma += valor
    return soma
