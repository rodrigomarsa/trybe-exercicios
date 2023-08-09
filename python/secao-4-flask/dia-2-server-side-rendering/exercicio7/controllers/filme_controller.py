from models.filme import Filme


class FilmeController:
    def buscar_filmes_por_titulo(self, titulo=None):
        query = {"titulo": titulo} if titulo else None
        filmes = Filme.buscar_filmes_por_titulo(query)
        return [filme.to_dict() for filme in filmes]

    def buscar_filme_por_id(self, id):
        filme = Filme.buscar_filmes_por_id(id)
        return filme.to_dict()
