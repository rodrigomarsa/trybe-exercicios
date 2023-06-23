# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

def arithmetic_average(list):
    sum = 0
    quantity = len(list)
    for value in list:
        sum += value
    return sum / quantity


print(arithmetic_average([2, 3, 3, 5, 7, 10]))
