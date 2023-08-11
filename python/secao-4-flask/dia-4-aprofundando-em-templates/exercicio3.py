from jinja2 import Template


def renderizar_formulario_contato(nome, email, mensagem):
    template = Template(
        """
    <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" value="{{ nome }}"><br>
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" value="{{ email }}"><br>
        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem">{{ mensagem }}</textarea><br>
        <input type="submit" value="Enviar">
    </form>
    """
    )
    resultado = template.render(nome=nome, email=email, mensagem=mensagem)
    print(resultado)


nome = input("Digite seu nome: ")
email = input("Digite seu e-mail: ")
mensagem = input("Digite sua mensagem: ")
renderizar_formulario_contato(nome, email, mensagem)
