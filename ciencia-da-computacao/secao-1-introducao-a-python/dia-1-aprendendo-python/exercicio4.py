# Crie uma função que receba uma lista de nomes e retorne o nome com a maior
# quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia",
# "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".


def greater_name(list):
    big_name = list[0]
    for name in list:
        if len(name) > len(big_name):
            big_name = name
    return big_name


print(greater_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
