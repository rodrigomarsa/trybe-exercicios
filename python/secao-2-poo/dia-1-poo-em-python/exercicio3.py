class Livro:
    def __init__(self, titulo: str, autor: str, paginas: int) -> None:
        self.titulo = titulo
        self.autor = autor
        self.paginas = paginas

    def descricao(self) -> str:
        return f"{self.titulo}, de {self.autor}, tem {self.paginas} páginas."


livro = Livro("Os pequenos jangadeiros", "Aristides Fraga Lima", 96)

print(livro.descricao())
# Os pequenos jangadeiros, de Aristides Fraga Lima, tem 96 páginas.
