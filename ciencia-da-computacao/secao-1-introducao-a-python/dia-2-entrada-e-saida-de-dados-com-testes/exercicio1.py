# Faça um programa que receba um nome e imprima o mesmo na vertical em escada
# invertida


def print_name(name):
    for row in range(len(name), 0, -1):
        print(name[slice(row)])


print_name("PEDRO")
