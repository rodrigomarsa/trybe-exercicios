# Crie uma função que receba um número inteiro N e retorne o somatório
# de todos os números de 1 até N. Por exemplo, para N = 5,
# o valor esperado será 15.


def sum_numbers(number):
    counter = 1
    result = 0

    while counter <= number:
        result += counter
        counter += 1
    return result


print(sum_numbers(5))
