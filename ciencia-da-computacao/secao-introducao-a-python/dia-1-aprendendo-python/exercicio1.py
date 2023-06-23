# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def greater_number(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2


print(greater_number(1, 2))
print(greater_number(24, 18))
