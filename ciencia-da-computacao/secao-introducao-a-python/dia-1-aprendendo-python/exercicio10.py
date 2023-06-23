# Um posto está vendendo combustíveis com a seguinte tabela de descontos:
# Álcool:
# - Até 20 litros, desconto de 3% por litro;
# - Acima de 20 litros, desconto de 5% por litro.
# Gasolina:
# - Até 20 litros, desconto de 4% por litro;
# - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos, o tipo
# de combustível (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do
# litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def value_to_pay(liters, fuel):
    gas_value = 2.5
    alcohol_value = 1.9
    if fuel == "A":
        if liters <= 20:
            discount = 0.03
            alcohol_value = alcohol_value - (alcohol_value * discount)
            return liters * alcohol_value
        elif liters > 20:
            discount = 0.05
            alcohol_value = alcohol_value - (alcohol_value * discount)
            return liters * alcohol_value
    if fuel == "G":
        if liters <= 20:
            discount = 0.04
            gas_value = gas_value - (gas_value * discount)
            return liters * gas_value
        elif liters > 20:
            discount = 0.06
            gas_value = gas_value - (gas_value * discount)
            return liters * gas_value


print(value_to_pay(25, "G"))
