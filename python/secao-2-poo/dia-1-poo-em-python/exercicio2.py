from typing import List


def filtrar_strings(lista: List[str], caractere: str) -> List[str]:
    resultado = []
    for texto in lista:
        if texto.startswith(caractere):
            resultado.append(texto)
    return resultado
