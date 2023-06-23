# Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


def smallest_number(list):
    small_number = list[0]
    for number in list:
        if number < small_number:
            small_number = number
    return small_number


print(smallest_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
