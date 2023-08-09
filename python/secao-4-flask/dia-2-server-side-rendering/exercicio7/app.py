from flask import Flask, render_template, request
from controllers.filme_controller import FilmeController

app = Flask(__name__)
filme_controller = FilmeController()


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        titulo = request.form.get("titulo")
        filmes = filme_controller.buscar_filmes_por_titulo(titulo)
    else:
        filmes = filme_controller.buscar_filmes_por_titulo()
        # Exemplo de busca inicial
    return render_template("index.html", filmes=filmes)


@app.route("/filmes/<id>")
def filme(id):
    print(id)
    filme = filme_controller.buscar_filme_por_id(id)
    return render_template("filme.html", filme=filme)


if __name__ == "__main__":
    app.run(debug=True)
