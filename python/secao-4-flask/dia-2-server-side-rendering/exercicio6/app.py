from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# Lista de alunos (exemplo)
alunos = [
    {"nome": "João", "matricula": "2021001"},
    {"nome": "Maria", "matricula": "2021002"},
    {"nome": "Pedro", "matricula": "2021003"},
]


# Rota para exibir a lista de alunos
@app.route("/")
@app.route("/alunos")
def listar_alunos():
    return render_template("alunos.html", alunos=alunos)


# Rota para adicionar um novo aluno
@app.route("/alunos/adicionar", methods=["GET", "POST"])
def adicionar_aluno():
    if request.method == "POST":
        nome = request.form["nome"]
        matricula = request.form["matricula"]
        novo_aluno = {"nome": nome, "matricula": matricula}
        alunos.append(novo_aluno)
        return redirect("/")
    return render_template("adicionar_aluno.html")


# Rota para editar as informações de um aluno
@app.route("/alunos/editar/<int:index>", methods=["GET", "POST"])
def editar_aluno(index):
    if index < 0 or index >= len(alunos):
        return redirect("/")

    aluno = alunos[index]
    if request.method == "POST":
        nome = request.form["nome"]
        matricula = request.form["matricula"]
        aluno["nome"] = nome
        aluno["matricula"] = matricula
        return redirect("/")

    return render_template("editar_aluno.html", aluno=aluno, aluno_index=index)


# Rota para excluir um aluno
@app.route("/alunos/excluir/<int:index>", methods=["GET", "POST"])
def excluir_aluno(index):
    if request.method == "GET":
        aluno = alunos[index]
        return render_template("excluir_aluno.html", aluno=aluno, index=index)

    if index < 0 or index >= len(alunos):
        return redirect("/")

    alunos.pop(index)
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
