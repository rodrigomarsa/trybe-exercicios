from jinja2 import Template


def renderizar_nomes(nomes):
    template = Template(
        "{% for nome in nomes %}{{ loop.index }}. {{ nome }}\n{% endfor %}"
    )
    resultado = template.render(nomes=nomes)
    print(resultado)


nomes = ["João", "Maria", "José"]
renderizar_nomes(nomes)
