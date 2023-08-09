from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    filmes = [
        {"titulo": "O Poderoso Chefão", "ano": 1972},
        {"titulo": "Interestelar", "ano": 2014},
        {"titulo": "A Origem", "ano": 2010},
        {"titulo": "Clube da Luta", "ano": 1999},
        {"titulo": "Pulp Fiction", "ano": 1994},
    ]
    return render_template("index.html", filmes=filmes)


if __name__ == "__main__":
    app.run()
