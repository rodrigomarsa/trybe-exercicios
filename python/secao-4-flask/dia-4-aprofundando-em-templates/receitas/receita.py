from jinja2 import Environment, FileSystemLoader
from filtros.converte_para_lista import converte_para_lista


loader = FileSystemLoader("templates")

environment = Environment(loader=loader)
environment.filters["converte_para_lista"] = converte_para_lista

template = environment.get_template("receita.html")

data = {
    "nome": "Pudim de leite condensado",
    "ingredientes": ["leite condensado", "creme de leite", "ovos", "açúcar"],
    "preparo": """bata o leite condensado junto com o creme de leite e os ovos
    no liquidificador por 5 minutos, enquanto isso, coloque o açúcar na
    frigideira até virar caramelo, ponha o caramelo em uma forma e despeje a
    misturam em cima, coloque para gelar""",
}

output = template.render(data)

print(output)
