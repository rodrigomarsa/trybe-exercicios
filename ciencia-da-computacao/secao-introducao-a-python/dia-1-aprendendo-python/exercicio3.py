# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

def square_asterisks(number):
    for row in range(number):
        print(number * "*")


square_asterisks(5)
