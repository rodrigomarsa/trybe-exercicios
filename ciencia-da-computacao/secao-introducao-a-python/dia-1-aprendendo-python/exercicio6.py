# Crie uma função que receba os três lado de um triângulo e informe qual o
# tipo de triângulo formado ou "não é triangulo", caso não seja possível
# formar um triângulo.


def triangle_type(num1, num2, num3):
    if not num1 + num2 > num3 and num2 + num3 > num1 and num1 + num3 > num2:
        print("Não é triângulo")
    elif num1 == num2 == num3:
        print("Triângulo Equilátero")
    elif num1 == num2 or num2 == num3 or num3 == num1:
        print("Triângulo Isósceles")
    else:
        print("Triângulo Escaleno")


triangle_type(10, 10, 20)
