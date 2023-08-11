from jinja2 import Environment, FileSystemLoader, TemplateNotFound
from datetime import datetime

try:
    saudacoes = {
        "manha": "Bom dia",
        "tarde": "Boa tarde",
        "noite": "Boa noite",
        "hora": datetime.now().hour,
    }

    loader = FileSystemLoader("saudacao/templates")

    environment = Environment(loader=loader)

    template = environment.get_template("saudacao.html")

    output = template.render(saudacoes)
except NameError as e:
    print(f"NameErro: {str(e)}")
except TemplateNotFound as e:
    print(f'Erro: Template "{str(e)}" não encontrado')
except Exception as e:
    print(f"Erro: {str(e)}")
else:
    print(output)
