# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
# e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma
# função que retorne dois valores em uma tupla contendo a quantidade de latas
# de tinta a serem compradas e o preço total a partir do tamanho de uma parede
# (em m²).


def quantity_value_ink(wall):
    roof = round((wall / 3) / 18)
    cost = roof * 80
    return roof, cost


print(quantity_value_ink(100))
