from jinja2 import Template


def renderizar_tabela_produtos(produtos):
    template = Template(
        """
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Estoque</th>
            </tr>
        </thead>
        <tbody>
            {% for produto in produtos %}
            <tr>
                <td>{{ produto.nome }}</td>
                <td>{{ produto.preco }}</td>
                <td>{{ produto.estoque }}</td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
    """
    )
    resultado = template.render(produtos=produtos)
    print(resultado)


produtos = [
    {"nome": "Produto 1", "preco": 10.0, "estoque": 5},
    {"nome": "Produto 2", "preco": 15.0, "estoque": 3},
    {"nome": "Produto 3", "preco": 20.0, "estoque": 8},
]
renderizar_tabela_produtos(produtos)
