from flask import Flask, render_template

app = Flask(__name__)


class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year


book = Book("Dom Casmurro", "Machado de Assis", 1899)


@app.route("/")
def book_view():
    return render_template("book.html", book=book)


if __name__ == "__main__":
    app.run()
